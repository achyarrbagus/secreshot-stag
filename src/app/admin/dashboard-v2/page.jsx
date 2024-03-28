"use client";
import NavbarAdmin from "../components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const App = () => {
  const URL_API_V2 = "https://api.cepatsehat.com/api/v2/";
  const admin = true;

  const router = useRouter();
  const [articles, setArticles] = useState("");

  const FetchArticle = async () => {
    axios
      .get(`${URL_API_V2}articles?admin=${admin}`)
      .then(function (response) {
        setArticles(
          response.data.data.sort((a, b) => a.article_id_v2 - b.article_id_v2)
        );
      })
      .catch(function (error) {
        setArticles("");
      });
  };

  const CutText = (text) => {
    let sentences = text.split("");
    let first100Sentences = sentences.slice(0, 30);
    let resultText = first100Sentences.join("");
    return resultText;
  };

  const DeleteArticle = async (id) => {
    const token = Cookies.get("islogin");
    if (!token) {
      alert("token not found");
      outer.push("/admin");
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          headers: {
            Authorization: "Bearer" + " " + token,
          },
        };
        axios
          .delete(`${URL_API_V2}article/${id}`, config)
          .then(function (response) {
            console.log(response);

            FetchArticle();
            Swal.fire("Success!", "", "success");
            return;
          })
          .catch(function (error) {
            FetchArticle();
            Swal.fire("Failed!", "", "warning");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    FetchArticle();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Publish Date",
      selector: (row) => row.publish_date,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Locale",
      selector: (row) => row.locale,
      sortable: true,
    },
    {
      name: "Intro",
      selector: (row) => CutText(row.intro),
      sortable: true,
    },
    {
      name: "Group Article",
      selector: (row) => row.article_id_v2,
      sortable: true,
    },
    {
      name: "Add Lenguage",
      selector: (row) => (
        <>
          {row.locale === "en" ? (
            <Button
              variant="warning"
              onClick={() =>
                router.push(
                  `/admin/create-article-v2?articleIdV2=${row.article_id_v2}&locale=${row.locale}`
                )
              }
              size="sm"
            >
              Add
            </Button>
          ) : (
            <></>
          )}
        </>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={() =>
              router.push(
                `/admin/update-article-v2?id=${row.article_id_v2}&locale=${row.locale}`
              )
            }
            size="sm"
          >
            Update
          </Button>
          <Button
            variant="danger"
            onClick={() => DeleteArticle(row.id)}
            size="sm"
          >
            Delete
          </Button>
        </div>
      ),
      sortable: true,
      width: "14rem",
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Updated At",
      selector: (row) => row.updated_at,
      sortable: true,
    },
  ];

  return (
    <>
      <NavbarAdmin />
      <div className="container-fluid">
        <DataTable
          title="List Article"
          columns={columns}
          data={articles}
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
};

export default App;
