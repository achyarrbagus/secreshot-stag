"use client";

import { Container, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import NavbarAdmin from "../components/navbar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import axios from "axios";
import * as yup from "yup";
import { Suspense } from "react";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

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
  // const URL_API = "http://127.0.0.1:5500/api/v1/";
  const URL_BANNER = "https://api.cepatsehat.com/uploads/";

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [imgBanner, setImgBanner] = useState();
  const [categories, setCategories] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [article, setArticle] = useState({
    article_title: "",
  });

  const [valueTextEditor, setTextEditor] = useState();

  useEffect(() => {
    FetchArticle();
    FetchCategories();
  }, []);

  const validationsSchema = yup.object().shape({
    article_title: yup.string().min(5).required("Required"),
    source: yup.string().min(5).required("Required"),
    is_active: yup.boolean(),
    intro: yup.string().min(10).required("Required"),
  });

  const onSubmit = async (values) => {
    const { article_title, article_category, source, is_active, intro } =
      values;

    const token = Cookies.get("islogin");
    if (!token) {
      alert("token not found");
      router.push("/admin");
      return;
    }
    const formData = new FormData();
    formData.set("title", article_title);
    formData.set("desc", valueTextEditor);
    formData.set("source", source);
    formData.set("category", article_category);
    formData.set("status", is_active);
    formData.set("intro", intro);
    formData.append("image", imgBanner);

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: "Bearer" + " " + token,
      },
    };

    axios
      .put(`${URL_API}cs/${id}`, formData, config)
      .then(function (response) {
        console.log(response.data.data);
        alert("created article success");
        router.push("/admin/dashboard");
        return;
      })
      .catch(function (error) {
        alert("created article failed");
        console.log(error.response);
        router.push("/admin/dashboard");
      });
  };

  const valueForm = {
    customer_service_name: article?.customer_service_name || "",
    article_category: article?.category_id || "",
    img_banner: article?.image || "",
    source: article?.source || "",
    status: article?.status || "",
    intro: article?.intro || "",
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

  const FetchCategories = async () => {
    const token = Cookies.get("islogin");
    if (!token) {
      alert("token not found");
      router.push("/admin");
      return;
    }
    axios
      .get(`https://api.cepatsehat.com/api/v1/categories`, {
        headers: {
          Authorization: "Bearer" + " " + token,
        },
      })
      .then(function (response) {
        setCategories(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
        setCategories(null);
      });
  };

  const updateArticle = (content, delta, source, editor) => {
    setTextEditor(content);
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
                  id="article_title"
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
              <div className="d-flex w-1/2 gap-2">
                <div className="mb-2">
                  <label htmlFor="article_category" className="form-label">
                    Start Time
                  </label>
                  <select
                    id="article_category"
                    value={formik.values?.article_category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-control ${
                      formik.errors.article_category &&
                      formik.touched.article_category
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <option value="" disabled>
                      Choose Category
                    </option>
                    {categories &&
                      categories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                  {formik.errors.article_category &&
                    formik.touched.article_category && (
                      <p style={{ color: "red" }}>
                        {formik.errors.article_category}
                      </p>
                    )}
                </div>
                <div className="mb-2">
                  <label htmlFor="article_category" className="form-label">
                    Start Time
                  </label>
                  <select
                    id="article_category"
                    value={formik.values?.article_category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`form-control ${
                      formik.errors.article_category &&
                      formik.touched.article_category
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <option value="" disabled>
                      Choose Category
                    </option>
                    {categories &&
                      categories.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                  {formik.errors.article_category &&
                    formik.touched.article_category && (
                      <p style={{ color: "red" }}>
                        {formik.errors.article_category}
                      </p>
                    )}
                </div>
              </div>

              <div className="mb-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="status"
                    name="status"
                    checked={formik.values.status.toString() === "true"}
                    onChange={(e) => {
                      formik.handleChange(e);
                      formik.setFieldValue(
                        "status",
                        e.target.checked ? "true" : "false"
                      );
                    }}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    {formik.values.status.toString() === "true"
                      ? "Active"
                      : "Not Active"}
                  </label>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" type="submit">
                  Update Customer Service
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
