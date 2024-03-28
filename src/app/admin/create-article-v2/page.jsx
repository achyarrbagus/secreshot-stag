"use client";

import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import NavbarAdmin from "../components/navbar";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import axios from "axios";
import * as yup from "yup";
import { Suspense } from "react";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const Page = () => {
  const URL_API_V2 = "https://api.cepatsehat.com/api/v2/";
  const URL_API_V1 = "https://api.cepatsehat.com/api/v1/";

  const searchParams = useSearchParams();
  const articleIdV2 = searchParams.get("articleIdV2") ?? null;
  const locale = searchParams.get("locale") ?? null;

  let actionURL = articleIdV2 !== null ? "article-language" : "article";

  const [imgBanner, setImgBanner] = useState();
  const [valueTextEditor, setTextEditor] = useState();
  const [categories, setCategories] = useState();
  const router = useRouter();

  const intialvalues = {
    article_title: "",
    article_category: "",
    source: "",
    alt_img: "",
    date_publish: "",
    is_active: false,
    intro: "",
    locale: "",
  };

  useEffect(() => {
    FetchCategories();
  }, []);

  const validationsSchema = yup.object().shape({
    article_title: yup.string().min(5).required("Required"),
    article_category: yup.string().required("Required"),
    source: yup.string().min(10).required("Required"),
    date_publish: yup.string().required("Required"),
    is_active: yup.boolean(),
    intro: yup.string().min(10).required("Required"),
  });

  const onSubmit = async (values) => {
    const {
      article_title,
      article_category,
      date_publish,
      source,
      is_active,
      intro,
    } = values;

    const token = Cookies.get("islogin");
    if (!token) {
      alert("token not found");
      router.push("/admin");
      return;
    }

    const formData = new FormData();
    formData.set("title", article_title);
    formData.set("desc", valueTextEditor);
    formData.append("image", imgBanner);
    formData.set("category", article_category);
    formData.set("source", source);
    formData.set("date_publish", date_publish);
    formData.set("is_active", is_active);
    formData.set("intro", intro);
    formData.set("locale", values.locale);

    articleIdV2 !== null && formData.set("article_id", articleIdV2);

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: "Bearer" + " " + token,
      },
    };

    axios
      .post(`${URL_API_V2}${actionURL}`, formData, config)
      .then(function (response) {
        console.log(response);
        alert("created article success");
        router.push("/admin/dashboard-v2");
      })
      .catch(function (error) {
        console.log(error);
        alert("created article failed");
        router.push("/admin/dashboard-v2");
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

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: intialvalues,
      validationSchema: validationsSchema,
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
            <h3>New Article v2</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-2">
                <label htmlFor="article_title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  id="article_title"
                  value={values.article_title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.article_title && touched.article_title
                      ? "is-invalid"
                      : ""
                  }`}
                  required
                />
                {errors.article_title && touched.article_title && (
                  <p style={{ color: "red" }}>{errors.article_title}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="article_category" className="form-label">
                  Category
                </label>
                <select
                  id="article_category"
                  value={values.article_category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.article_category && touched.article_category
                      ? "is-invalid"
                      : ""
                  }`}
                  required
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
                {errors.article_category && touched.article_category && (
                  <p style={{ color: "red" }}>{errors.article_category}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="locale" className="form-label">
                  Lang
                </label>
                <select
                  id="locale"
                  value={values.locale}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.locale && touched.locale ? "is-invalid" : ""
                  }`}
                  required
                >
                  <option value="" disabled>
                    Choose Language
                  </option>
                  <option value="en" disabled={locale === "en" ? true : false}>
                    English
                  </option>
                  <option value="id" disabled={locale === "id" ? true : false}>
                    Indonesia
                  </option>
                </select>
                {errors.locale && touched.locale && (
                  <p style={{ color: "red" }}>{errors.locale}</p>
                )}
              </div>
              <div className="mb-2">
                <label htmlFor="img_banner" className="form-label">
                  Cover Banner
                </label>
                <img
                  id="banner-priview"
                  className="img-fluid rounded"
                  style={{ display: imgBanner ? "block" : "none" }}
                  height="auto"
                  width="55%"
                  alt="Preview"
                />
                <br />
                <input
                  type="file"
                  id="img_banner"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setImgBanner)}
                  className={`form-control ${
                    errors.img_banner && touched.img_banner ? "is-invalid" : ""
                  }`}
                  required
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
                  value={values.source}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.source && touched.source ? "is-invalid" : ""
                  }`}
                  required
                />
                {errors.source && touched.source && (
                  <p style={{ color: "red" }}>{errors.source}</p>
                )}
              </div>
              <div className="mb-2">
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
              </div>
              <div className="mb-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="is_active"
                    name="is_active"
                    checked={values.is_active}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Active
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
                  value={values.intro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.intro && touched.intro ? "is-invalid" : ""
                  }`}
                  required
                ></textarea>
                {errors.intro && touched.intro && (
                  <p style={{ color: "red" }}>{errors.intro}</p>
                )}
              </div>
              <div className="mb-2">
                <QuillEditor
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  value={valueTextEditor}
                  onChange={setTextEditor}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary btn-sm" type="submit">
                  Upload Article
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default function CreateArticle() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}
