"use client";
import NavbarAdmin from "../components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

const App = () => {
  const URL_API_V2 = "https://api.cepatsehat.com/api/v2/";
  const admin = true;

  const router = useRouter();
  const [articles, setArticles] = useState("");
  const [filteredArticles, setFilteredArticles] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const FetchArticle = async () => {
    axios
      .get(`${URL_API_V2}articles?admin=${admin}`)
      .then(function (response) {
        setArticles(response.data.data);
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
      router.push("/admin");
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

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    var data_filter = articles.filter((item) =>
      item.title?.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArticles(data_filter);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data_filter = articles.filter((item) =>
      item.title?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredArticles(data_filter);
  };

  useEffect(() => {
    FetchArticle();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      width: "60px",
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
      width: "300px",
    },
    {
      name: "Locale",
      selector: (row) => row.locale,
      sortable: true,
      width: "100px",
    },
    {
      name: "Intro",
      selector: (row) => CutText(row.intro),
      sortable: true,
      width: "300px",
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
      width: "100px",
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex gap-2 mx-4">
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
      width: "300px",
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.created_at,
      sortable: true,
      width: "140px",
    },
    {
      name: "Updated At",
      selector: (row) => row.updated_at,
      sortable: true,
      width: "140px",
    },
  ];

  return (
    <>
      <NavbarAdmin path={"dashboard-v2"} />
      <div className="container-fluid">
        <div className="d-flex justify-content-end px-4 gap-4">
          <Button
            className="btn btn-success btn-sm"
            size="sm"
            onClick={() => router.push("/admin/create-article-v2")}
          >
            Create Article
          </Button>
          <Form inline onSubmit={handleSubmit} className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Filter by title"
              className="mr-sm-4"
              onChange={handleChange}
              value={searchValue}
            />
            <Button size="xs" type="submit">
              Search
            </Button>
          </Form>
        </div>
        <DataTable
          title="List Article"
          columns={columns}
          data={filteredArticles ? filteredArticles : articles}
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
};

export default App;
