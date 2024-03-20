"use client";

import { Container } from "react-bootstrap";
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

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isLoading, setIsLoading] = useState(false);
  const [imgBanner, setImgBanner] = useState();
  const [article, setArticle] = useState({
    title: "",
    category: "",
    source: "",
  });
  useEffect(() => {
    FetchArticle();
  }, []);

  const [valueTextEditor, setTextEditor] = useState();
  const [initialValues, setInitialValues] = useState({
    article_title: "",
    article_category: "",
    source: "",
    // alt_img: "",
    // date_publish: "",
    // is_active: false,
    // intro: "",
  });

  const validationsSchema = yup.object().shape({
    // article_title: yup.string().min(5).required("Required"),
    // article_category: yup.string().required("Required"),
    // source: yup.string().min(10).required("Required"),
    // alt_img: yup.string().required("Required"),
    // date_publish: yup.string().required("Required"),
    // is_active: yup.boolean(),
    // intro: yup.string().min(10).required("Required"),
  });

  const onSubmit = async (values) => {
    const {
      article_title,
      article_category,
      alt_img,
      date_publish,
      source,
      is_active,
      intro,
    } = values;

    // const bodyJson = JSON.stringify({
    //   title: article_title,
    //   category: article_category,
    //   alt_img: alt_img,
    //   date_publish: date_publish,
    //   source: source,
    //   is_active: is_active,
    //   intro: intro,
    //   img_banner: imgBanner,
    //   contents: valueTextEditor,
    // });

    const token = Cookies.get("islogin");
    if (!token) {
      alert("token not found");
      router.push("/admin");
      return;
    }
    const formData = new FormData();
    formData.set("title", article_title);
    formData.set("desc", valueTextEditor);
    formData.set("image", imgBanner);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: "Bearer" + " " + token,
      },
    };

    axios
      .put(`https://api.cepatsehat.com/api/v1/article/${id}`, formData, config)
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

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        article_title: "",
        article_category: "",
      },
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
        setter(reader.result);
        const imgPreview = document.getElementById("banner-priview");
        imgPreview.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  const FetchArticle = async () => {
    axios
      .get(`https://api.cepatsehat.com/api/v1/article/${id}`)
      .then(function (response) {
        console.log(response.data.data);
        setArticle(response.data.data);
        setInitialValues({
          article_title: response.data.data.title,
        });
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
        <div style={{ marginTop: "0.5rem", display: "flex" }}>
          <div className="pb-4">
            <h3>Update {article?.title}</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-2">
                <label for="article_title" class="form-label">
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
                />
                {errors.article_title && touched.article_title && (
                  <p style={{ color: "red" }}>{errors.article_title}</p>
                )}
              </div>
              <div className="mb-2">
                <label for="article_category" className="form-label">
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
                >
                  <option value="" disabled>
                    Choose Category
                  </option>
                  <option value="Kesehatan">Kesehatan</option>
                  <option values="Makanan">Makanan</option>
                </select>
                {errors.article_category && touched.article_category && (
                  <p style={{ color: "red" }}>{errors.article_category}</p>
                )}
              </div>
              <div className="mb-2">
                <label for="img_banner" class="form-label">
                  Cover Banner
                </label>
                <img
                  id="banner-priview"
                  className="img-fluid"
                  style={{ display: imgBanner ? "block" : "none" }}
                  height="auto"
                  width="450px"
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
                />
              </div>
              {/* <div className="mb-2">
                <label for="alt_img" class="form-label">
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
                <label for="source" class="form-label">
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
              {/* <div className="mb-2">
                <label for="date_publish" class="form-label">
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
              {/* <div className="mb-2">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_active"
                    name="is_active"
                    checked={values.is_active}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Active
                  </label>
                </div>
              </div> */}
              {/* <div className="mb-2">
                <label for="intro" class="form-label">
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
              </div> */}
              <div className="mb-2">
                <QuillEditor
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  value={valueTextEditor}
                  onChange={setTextEditor}
                />
              </div>

              <button type="submit">Upload Article</button>
            </form>
          </div>
          {/* <div className="col-lg-8">
            <div style={{ paddingLeft: "30px", marginTop: "70px" }}></div>
          </div> */}
        </div>
      </Container>
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
