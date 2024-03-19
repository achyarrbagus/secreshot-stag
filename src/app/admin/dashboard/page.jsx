"use client";
import NavbarAdmin from "../components/navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const App = () => {
  const [articles, setArticles] = useState("");
  const [article, setArticle] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const router = useRouter();
  const FetchArticle = async () => {
    axios
      .get("http://localhost:5500/api/v1/articles")
      .then(function (response) {
        setArticles(response.data.data);
      })
      .catch(function (error) {
        setArticles("");
      });
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
            "Content-type": "multipart/form-data",
            Authorization: "Bearer" + " " + token,
          },
        };
        axios
          .delete(`http://localhost:5500/api/v1/article/${id}`)
          .then(function (response) {
            FetchArticle();
            Swal.fire("Saved!", "", "success");
          })
          .catch(function (error) {
            Swal.fire("Saved!", "", "success");
            FetchArticle();
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
      name: "title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "action",
      selector: (row) => (
        <div className="d-flex gap-2">
          <Button variant="primary" size="sm">
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
