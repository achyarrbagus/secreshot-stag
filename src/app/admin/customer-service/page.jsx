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
  const [cs, setcs] = useState("");
  const FetchCS = async () => {
    axios
      .get("https://api.cepatsehat.com/api/v1/customers-service")
      .then(function (response) {
        console.log(response.data.data);
        setcs(response.data.data);
      })
      .catch(function (error) {
        setcs("");
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
          .delete(`https://api.cepatsehat.com/api/v1/cs/${id}`, config)
          .then(function (response) {
            console.log(response);

            FetchCS();
            Swal.fire("Success!", "", "success");
            return;
          })
          .catch(function (error) {
            FetchCS();
            Swal.fire("Failed!", "", "warning");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    FetchCS();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Customer Service Name",
      selector: (row) => row.customer_service_name,
      sortable: true,
    },
    {
      name: "Number Whatsapp",
      selector: (row) => row.number_whatsapp,
      sortable: true,
    },
    {
      name: "Start Time",
      selector: (row) => row.start_time,
      sortable: true,
    },
    {
      name: "End Time",
      selector: (row) => row.end_time,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status.toString(),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={() => router.push(`/admin/update-cs?id=${row.id}`)}
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
  ];

  return (
    <>
      <NavbarAdmin />
      <div className="container-fluid">
        <DataTable
          title="CS List"
          columns={columns}
          data={cs}
          pagination
          highlightOnHover
        />
      </div>
    </>
  );
};

export default App;
