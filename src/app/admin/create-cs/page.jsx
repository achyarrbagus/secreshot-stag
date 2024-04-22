"use client";

import { Container, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import NavbarAdmin from "../components/navbar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import axios from "axios";
import * as yup from "yup";
import { Suspense } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          className="px-4"
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: props.valueTextEditor }}
        />
      </Modal.Body>
    </Modal>
  );
}

const Page = () => {
  const URL_API = "https://api.cepatsehat.com/api/v1/";

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [modalShow, setModalShow] = useState(false);
  const [article, setArticle] = useState({
    article_title: "",
  });

  const [valueTextEditor, setTextEditor] = useState();

  const validationsSchema = yup.object().shape({
    customer_service_name: yup.string().min(5).required("Required"),
    number_whatsapp: yup.string().min(5).required("Required"),
    start_time: yup.string().required("Required"),
    end_time: yup.string().required("Required"),
    status: yup.boolean(),
    url_telegram: yup.string().required("Required"),
    number_whatsapp: yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    const token = Cookies.get("islogin");
    if (!token) {
      alert("token not found");
      router.push("/admin");
      return;
    }

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: "Bearer" + " " + token,
      },
    };

    axios
      .post(`${URL_API}cs`, values, config)
      .then(function (response) {
        console.log(response.data.data);
        alert("updated success");
        router.push("/admin/customer-service");
        return;
      })
      .catch(function (error) {
        alert("updated failed");
        console.log(error.response);
        router.push("/admin/customer-service");
      });
  };

  const valueForm = {
    customer_service_name: "",
    start_time: "",
    end_time: "",
    status: "",
    url_telegram: "",
    number_whatsapp: "",
  };

  const initialValues = {
    customer_service_name: "",
    article_category: "",
    source: "",
    status: "",
    intro: "",
  };

  const formik = useFormik({
    initialValues: valueForm || initialValues,
    validationSchema: validationsSchema,
    enableReinitialize: true,
    onSubmit,
  });

  const handleFileChange = (ev, setter) => {
    const file = ev.target.files && ev.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        console.log("Too big brother");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setter(ev.target.files[0]);

        const imgPreview = document.getElementById("banner-priview");
        imgPreview.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const FetchArticle = async () => {
    axios
      .get(`${URL_API}cs/${id}`)
      .then(function (response) {
        setArticle(response.data.data);
        setTextEditor(response.data.data.description);
      })
      .catch(function (error) {
        console.log(error);
        setArticle(null);
      });
  };

  const modules = {
    toolbar: [
      [
        { header: "1" },
        { header: "2" },
        { header: [3, 4, 5, 6] },
        { font: [] },
      ],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
      ["code-block"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "color",
    "list",
    "link",
    "image",
    "video",
    "code-block",
  ];

  return (
    <>
      <NavbarAdmin />
      <Container>
        <div className="mx-auto" style={{ maxWidth: "840px;" }}>
          <div className="pb-4 pt-4">
            <h3 style={{ textAlign: "center" }}>Update Customer Service</h3>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="mb-2">
                <label htmlFor="article_title" className="form-label">
                  Customer Service Name
                </label>
                <input
                  type="text"
                  id="customer_service_name"
                  value={formik.values?.customer_service_name || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control ${
                    formik.errors.customer_service_name &&
                    formik.customer_service_name
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {formik.errors.customer_service_name &&
                  formik.touched.customer_service_name && (
                    <p style={{ color: "red" }}>
                      {formik.errors.customer_service_name}
                    </p>
                  )}
              </div>
              <div className="mb-2">
                <label htmlFor="article_title" className="form-label">
                  Url Telegram
                </label>
                <input
                  type="text"
                  id="url_telegram"
                  value={formik.values?.url_telegram || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control ${
                    formik.errors.url_telegram && formik.url_telegram
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {formik.errors.url_telegram && formik.touched.url_telegram && (
                  <p style={{ color: "red" }}>{formik.errors.url_telegram}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="article_title" className="form-label">
                  Number Whatsapp
                </label>
                <input
                  type="text"
                  id="number_whatsapp"
                  value={formik.values?.number_whatsapp || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control ${
                    formik.errors.number_whatsapp && formik.number_whatsapp
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {formik.errors.number_whatsapp &&
                  formik.touched.url_telegram && (
                    <p style={{ color: "red" }}>
                      {formik.errors.number_whatsapp}
                    </p>
                  )}
              </div>
              <div className="d-flex w-1/2 gap-2">
                <div className="mb-2">
                  <label htmlFor="article_category" className="form-label">
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="start_time"
                    value={formik.values?.start_time || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-control ${
                      formik.errors.start_time && formik.start_time
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.start_time && formik.touched.start_time && (
                    <p style={{ color: "red" }}>{formik.errors.start_time}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label htmlFor="article_category" className="form-label">
                    End Time
                  </label>
                  <input
                    type="time"
                    id="end_time"
                    value={formik.values?.end_time || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-control ${
                      formik.errors.end_time && formik.end_time
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  {formik.errors.end_time && formik.touched.end_time && (
                    <p style={{ color: "red" }}>{formik.errors.end_time}</p>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" type="submit">
                  Add Customer Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        valueTextEditor={valueTextEditor}
      />
    </>
  );
};

export default function UpdateArticle() {
  return (
    <Suspense fallback={<div>Loading article...</div>}>
      <Page />
    </Suspense>
  );
}
