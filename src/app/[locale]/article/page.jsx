"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LayoutWrapper from "../components/layout-wrapper";
import axios from "axios";
import { Suspense } from "react";
import useSWR from "swr";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { Dropdown, Nav, Container } from "react-bootstrap";
import { useSearchParams, useRouter } from "next/navigation";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

function Article() {
  const lang = useSelector((state) => state.lang.value);
  const searchParams = useSearchParams();
  const [cata, setData] = useState();
  const [id, setId] = React.useState(0);
  const [article, setArticle] = React.useState([]);
  const t = useTranslations("home");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const query = router.query;

  const navStyle = {
    "--bs-breadcrumb-divider":
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
  };

  const FetchArticle = async (id, locale) => {
    const url = `https://api.cepatsehat.com/api/v2/article/${id}?locale=${locale}`;
    try {
      let resp = await axios.get(url);
      console.log(resp);
      console.log(resp.data.data[0]);

      setArticle(resp.data.data[0]);
    } catch (error) {
      setArticle([]);
    }
  };

  const { data: articles, error: articlesError } = useSWR(
    `https://api.cepatsehat.com/api/v2/articles?locale=${locale}`,
    fetcher
  );

  useEffect(() => {
    FetchArticle(searchParams.get("id"), searchParams.get("locale"));
  }, [searchParams]);

  const onLocaleChange = (newLocale, id) => {
    const params = new URLSearchParams();
    params.append("id", id);
    params.append("locale", newLocale);

    // Dapatkan URL saat ini
    const currentUrl = new URL(window.location.href);

    // Tambahkan query string yang dibuat sebelumnya
    currentUrl.search = params.toString();

    // Ganti URL dengan query string baru
    router.replace(currentUrl.toString());
    // router.replace(pathname, { locale: newLocale });
  };

  const dateToString = (dateString) => {
    const dt = new Date(dateString);
    const date = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const months = [
      "Januari",
      "February",
      "March",
      "Aprl",
      "Mei",
      "Juni",
      "Juli",
      "Augstus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const monthName = months[month];

    const result = date + " " + monthName + " " + year;

    return result;
  };

  return (
    article && (
      <>
        {/* navbar */}
        <Nav activeKey="/home" className="nav nav-top fixed-top">
          <Container>
            <div className="d-flex align-items-center gap-3">
              <Link href={`/${locale}`}>
                <div style={{ cursor: "pointer" }} className="nav-brand">
                  <img src="/assets/img/logo.png" alt="" />
                </div>
              </Link>

              <Dropdown className="btn-group ms-auto">
                {(() => {
                  switch (locale) {
                    case "id":
                      return (
                        <Dropdown.Toggle
                          variant=""
                          className="btn btn-secondary dropdown-toggle"
                          id="dropdown-basic"
                        >
                          <i className="mdi mdi-earth me-2"></i> ID
                        </Dropdown.Toggle>
                      );
                    default:
                      return (
                        <Dropdown.Toggle
                          variant=""
                          className="btn btn-secondary dropdown-toggle"
                          id="dropdown-basic"
                        >
                          <i className="mdi mdi-earth me-2"></i> EN
                        </Dropdown.Toggle>
                      );
                  }
                })()}

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => onLocaleChange("en", searchParams.get("id"))}
                    className="d-flex gap-1"
                  >
                    <img
                      src="/assets/img/flag/EN Flag_new.png"
                      alt=""
                      className="mt-1"
                      width={25}
                    />
                    English
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => onLocaleChange("id", searchParams.get("id"))}
                    className="d-flex gap-1"
                  >
                    <img
                      src="/assets/img/flag/ID Flag_new.png"
                      alt=""
                      className="mt-1"
                      width={25}
                    />
                    Indonesia
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Nav>

        <div className="content">
          <div className="nav-content">
            <div className="container">
              <nav style={navStyle}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link
                      href={`/?locale=${searchParams.get(
                        "locale"
                      )}&lang=${locale}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#/">Article</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {article.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <section className="detail-article py-4">
            <div className="container">
              <div className="row g-3">
                <div className="col-md-8">
                  <h3 className="title-detail fw-bold fs-24 text-primary">
                    {article.title}
                  </h3>
                  <p className="text-capitalize">
                    {dateToString(article.publish_date)}
                  </p>
                  <img
                    src={`https://api.cepatsehat.com/uploads/${article.image}`}
                    alt="image"
                    style={{ maxWidth: "100%" }}
                  />
                  <div
                    className="mt-2"
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  />
                </div>
                <>
                  <div className="col-md-4">
                    <h3 className="title-section text-start pt-0 fs-14">
                      More Article
                    </h3>
                    <div className="list-article">
                      {articles &&
                        articles.slice(0, 15).map((item, index) => (
                          <>
                            <Link
                              style={{ color: "#5B5A5A" }}
                              href={`/${locale}/article?id=${item.article_id_v2}&locale=${locale}`}
                            >
                              <butoon
                                className="items-article"
                                style={{ cursor: "pointer" }}
                              >
                                <img
                                  src={`https://api.cepatsehat.com/uploads/${item.image}`}
                                  alt="image"
                                />

                                <div className="name">
                                  <h5>{item.title}</h5>

                                  <a className="text-muted fs-14">
                                    read more
                                    <i className="mdi mdi-arrow-right"></i>
                                  </a>
                                </div>
                              </butoon>
                            </Link>
                          </>
                        ))}
                    </div>
                  </div>
                </>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  );
}

export default function ArticlePage() {
  return (
    <LayoutWrapper>
      <Suspense fallback={<div>Loading article...</div>}>
        <Article />
      </Suspense>
    </LayoutWrapper>
  );
}
{
  /* <div className="content">
  <div className="nav-content">
    <div className="container">
      <nav style={navStyle}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#/">Article</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <section className="detail-article py-4">
    <div className="container">
      <div className="row g-3">
        <div className="col-md-8">
          <h3 className="title-detail fw-bold fs-24 text-primary">
            {article.title}
          </h3>
          <p className="text-capitalize">{dateToString(article.created_at)}</p>
          <img
            src={`https://api.cepatsehat.com/uploads/${article.image}`}
            alt="image"
            style={{ maxWidth: "100%" }}
          />
          {/* <p className="summary fs-12">{article.description}.</p> */
}

//   <div
//     className="mt-2"
//     dangerouslySetInnerHTML={{ __html: article.description }}
//   />
//   {/* {data?.SubArticle.map((item) => (
//             <>
//               <p className="title-p fw-bold">{item.Title}</p>
//               <p className="fs-12">{item.Desc}</p>
//             </>
//           ))} */}
// </div>

//         {(() => {
//           switch (lang) {
//             case "ID":
//               return (
//                 <>
//                   <div className="col-md-4">
//                     <h3 className="title-section text-start pt-0 fs-14">
//                       More Article
//                     </h3>
//                     <div className="list-article">
//                       {ArticlesId &&
//                         ArticlesId.map((item, index) => (
//                           <>
//                             <Link
//                               style={{ color: "#5B5A5A" }}
//                               href={`/article?id=${item.Id - 1}`}
//                             >
//                               <butoon
//                                 className="items-article"
//                                 style={{ cursor: "pointer" }}
//                               >
//                                 <img src={item.PathImg} alt="" />
//                                 <div className="name">
//                                   <h5>{item.Title}</h5>
//                                   <a className="text-muted fs-14">
//                                     read more{" "}
//                                     <i className="mdi mdi-arrow-right"></i>
//                                   </a>
//                                 </div>
//                               </butoon>
//                             </Link>
//                           </>
//                         ))}
//                     </div>
//                   </div>
//                 </>
//               );
//             default:
//               return (
//                 <div className="col-md-4">
//                   <h3 className="title-section text-start pt-0 fs-14">
//                     More Article{" "}
//                   </h3>
//                   <div className="list-article">
//                     {articles &&
//                       articles.map((item, index) => (
//                         <>
//                           <Link
//                             style={{ color: "#5B5A5A" }}
//                             href={`/article?id=${item.id}`}
//                           >
//                             <butoon
//                               className="items-article"
//                               style={{ cursor: "pointer" }}
//                             >
//                               <img
//                                 src={`https://api.cepatsehat.com/uploads/${item.image}`}
//                                 alt="image"
//                               />

//                               <div className="name">
//                                 <h5>{item.title}</h5>
//                                 <a className="text-muted fs-14">
//                                   read more
//                                   <i className="mdi mdi-arrow-right"></i>
//                                 </a>
//                               </div>
//                             </butoon>
//                           </Link>
//                         </>
//                       ))}
//                   </div>
//                 </div>
//               );
//           }
//         })()}
//       </div>
//     </div>
//   </section>
// </div>; */}
