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
  const [article, setArticle] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const router = useRouter();
  const [articles, setArticles] = useState("");
  const FetchArticle = async () => {
    axios
      .get("https://api.cepatsehat.com/api/v1/articles")
      // .get("http://127.0.0.1:5500/api/v1/articles")
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
          .delete(`https://api.cepatsehat.com/api/v1/article/${id}`, config)
          // .delete(`http://127.0.0.1:5500/api/v1/article/${id}`, config)
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
      name: "Action",
      selector: (row) => (
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={() => router.push(`/admin/update-article?id=${row.id}`)}
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
