"use client";

import { Container, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import NavbarAdmin from "../components/navbar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import axios from "axios";
import * as yup from "yup";
import { Suspense } from "react";
import locale from "antd/es/date-picker/locale/en_US";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

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
  const URL_API_V2 = "https://api.cepatsehat.com/api/v2/";
  const URL_API_V1 = "https://api.cepatsehat.com/api/v1/";
  const URL_BANNER = "https://api.cepatsehat.com/uploads/";

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const locale = searchParams.get("locale");

  const [article, setArticle] = useState();
  const [imgBanner, setImgBanner] = useState();
  const [categories, setCategories] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [valueTextEditor, setTextEditor] = useState();

  const languages = [
    { id: 1, value: "en", name: "English" },
    { id: 2, value: "id", name: "Indonesia" },
  ];

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
    formData.set("is_active", is_active);
    formData.set("intro", intro);
    formData.append("image", imgBanner);

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: "Bearer" + " " + token,
      },
    };

    axios
      .put(`${URL_API_V2}article/${article.id}`, formData, config)
      .then(function (response) {
        console.log(response.data.data);
        alert("created article success");
        router.push("/admin/dashboard-v2");
        return;
      })
      .catch(function (error) {
        alert("created article failed");
        console.log(error.response);
        router.push("/admin/dashboard-v2");
      });
  };

  const valueForm = {
    article_title: article?.title || "",
    article_category: article?.category_id || "",
    img_banner: article?.image || "",
    source: article?.source || "",
    is_active: article?.is_active || "",
    intro: article?.intro || "",
    locale: article?.locale || "",
  };

  const initialValues = {
    article_title: "",
    article_category: "",
    source: "",
    is_active: "",
    intro: "",
    locale: "",
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
      .get(`${URL_API_V2}article/${id}?locale=${locale}`)
      .then(function (response) {
        setArticle(response.data.data[0]);
        setTextEditor(response.data.data[0].description);
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
      .get(`${URL_API_V1}categories`, {
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
        <div className="mx-auto" style={{ maxWidth: "840px" }}>
          <div className="pb-4 pt-4">
            <h3 style={{ textAlign: "center" }}>{article?.title}</h3>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="mb-2">
                <label htmlFor="article_title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="article_title"
                  value={formik.values?.article_title || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control ${
                    formik.errors.article_title && formik.touched.article_title
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {formik.errors.article_title &&
                  formik.touched.article_title && (
                    <p style={{ color: "red" }}>
                      {formik.errors.article_title}
                    </p>
                  )}
              </div>
              <div className="mb-2">
                <label htmlFor="article_category" className="form-label">
                  Category
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
                  Language
                </label>
                <select
                  id="locale"
                  value={formik.values?.locale}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control ${
                    formik.errors.locale && formik.touched.locale
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    Change Language
                  </option>
                  {languages &&
                    languages.map((item) => (
                      <option key={item.id} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                </select>
                {formik.errors.locale && formik.touched.locale && (
                  <p style={{ color: "red" }}>{formik.errors.locale}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="img_banner" className="form-label">
                  Cover Banner
                </label>
                <img
                  id="banner-priview"
                  className="img-fluid rounded"
                  style={{
                    display: valueForm.img_banner
                      ? imgBanner
                        ? "block"
                        : "block"
                      : "none",
                  }}
                  height="auto"
                  width="100%"
                  alt="Preview"
                  src={`${URL_BANNER}${valueForm.img_banner}`}
                />
                <br />
                <input
                  type="file"
                  id="img_banner"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setImgBanner)}
                  className={`form-control ${
                    formik.errors.img_banner && formik.touched.img_banner
                      ? "is-invalid"
                      : ""
                  }`}
                />
              </div>
              {/* <div className="mb-2">
                <label htmlFor="alt_img" className="form-label">
                  Alt Image Banner
                </label>
                <input
                  type="text"
                  id="alt_img"
                  value={values.alt_img}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.alt_img && touched.alt_img ? "is-invalid" : ""
                  }`}
                  required
                />
                {errors.alt_img && touched.alt_img && (
                  <p style={{ color: "red" }}>{errors.alt_img}</p>
                )}
              </div> */}
              <div className="mb-2">
                <label htmlFor="source" className="form-label">
                  Source
                </label>
                <input
                  type="text"
                  id="source"
                  value={formik.values.source}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control ${
                    formik.errors.source && formik.touched.source
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                />
                {formik.errors.source && formik.touched.source && (
                  <p style={{ color: "red" }}>{formik.errors.source}</p>
                )}
              </div>
              {/* <div className="mb-2">
                <label htmlFor="date_publish" className="form-label">
                  Publish Date
                </label>
                <input
                  type="date"
                  id="date_publish"
                  name="date_publish"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.date_publish && touched.date_publish
                      ? "is-invalid"
                      : ""
                  }`}
                  style={{ width: "100%" }}
                  required
                />
                {errors.date_publish && touched.date_publish && (
                  <p style={{ color: "red" }}>{errors.date_publish}</p>
                )}
              </div> */}
              <div className="mb-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="is_active"
                    name="is_active"
                    checked={formik.values.is_active === "true"}
                    onChange={(e) => {
                      formik.handleChange(e);
                      formik.setFieldValue(
                        "is_active",
                        e.target.checked ? "true" : "false"
                      );
                    }}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    {formik.values.is_active === "true"
                      ? "Active"
                      : "Not Active"}
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="intro" className="form-label">
                  Intro
                </label>
                <textarea
                  id="intro"
                  rows="5"
                  cols="33"
                  value={formik.values.intro}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`form-control ${
                    formik.errors.intro && formik.touched.intro
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                ></textarea>
                {formik.errors.intro && formik.touched.intro && (
                  <p style={{ color: "red" }}>{formik.errors.intro}</p>
                )}
              </div>
              <div className="mb-2">
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  value={valueTextEditor}
                  onChange={updateArticle}
                />
              </div>
              <div className="d-flex justify-content-end">
                <a
                  className="btn btn-secondary btn-sm"
                  onClick={() => setModalShow(true)}
                >
                  Preview
                </a>
                &nbsp;
                <button className="btn btn-primary btn-sm" type="submit">
                  Upload Article
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
