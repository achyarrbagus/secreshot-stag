"use client";

import React, { useEffect } from "react";
import Articles from "../../../../public/assets/article/json/article.json";
import ArticlesId from "../../../../public/assets/article/json/article-id.json";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LayoutWrapper from "@/app/components/layout-wrapper";

function Article() {
  const navStyle = {
    "--bs-breadcrumb-divider":
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
  };

  const lang = useSelector((state) => state.lang.value);
  const router = useRouter();

  const [id, setId] = React.useState();
  const [artcs, setArtcs] = React.useState();

  useEffect(() => {
    // Mendapatkan path URL setelah domain
    const path = window.location.pathname;

    // Membagi path berdasarkan tanda /
    const pathSegments = path.split("/");

    const articleId = pathSegments[2];
    setId(articleId);
  }, [id]);

  const data = lang == "ID" ? ArticlesId[id] : Articles[id];

  return (
    data && (
      <>
        <div className="content">
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
                    {data.Title}
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
                    {data.Title}
                  </h3>
                  <p className="summary fs-12">{data.Desc}.</p>
                  <img src={data.PathImg} className="w-100 my-3" alt="" />
                  {/* <p className="fs-12">
                  However, there are also some things that can unwittingly cause gastric disorders. What are these habits, here
                  are some habits that can trigger stomach disorders:
                </p> */}
                  {data.SubArticle.map((item) => (
                    <>
                      <p className="title-p fw-bold">{item.Title}</p>
                      <p className="fs-12">{item.Desc}</p>
                    </>
                  ))}
                </div>

                {(() => {
                  switch (lang) {
                    case "ID":
                      return (
                        <>
                          <div className="col-md-4">
                            <h3 className="title-section text-start pt-0 fs-14">
                              {" "}
                              More Article{" "}
                            </h3>
                            <div className="list-article">
                              {ArticlesId &&
                                ArticlesId.map((item, index) => (
                                  <>
                                    <butoon
                                      onClick={() =>
                                        router.push(`/article/${index}`)
                                      }
                                      className="items-article"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <img src={item.PathImg} alt="" />
                                      <div className="name">
                                        <h5>{item.Title}</h5>
                                        <a className="text-muted fs-14">
                                          read more{" "}
                                          <i className="mdi mdi-arrow-right"></i>
                                        </a>
                                      </div>
                                    </butoon>
                                  </>
                                ))}
                            </div>
                          </div>
                        </>
                      );
                    default:
                      return (
                        <div className="col-md-4">
                          <h3 className="title-section text-start pt-0 fs-14">
                            More Article
                          </h3>
                          <div className="list-article">
                            {Articles &&
                              Articles.map((item, index) => (
                                <>
                                  <butoon
                                    onClick={() =>
                                      (window.location.href = `/article/${index}`)
                                    }
                                    className="items-article"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <img src={item.PathImg} alt="" />
                                    <div className="name">
                                      <h5>{item.Title}</h5>
                                      <a className="text-muted fs-14">
                                        read more
                                        <i className="mdi mdi-arrow-right"></i>
                                      </a>
                                    </div>
                                  </butoon>
                                </>
                              ))}
                          </div>
                        </div>
                      );
                  }
                })()}
              </div>
            </div>
          </section>
        </div>
      </>
    )
  );
}

export default Article;
