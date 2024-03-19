"use client";

import { Form, Container, Image } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Cookies from "js-cookie";
import NavbarAdmin from "../components/navbar";
import { useRouter } from "next/navigation";

const Page = () => {
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setForm({
      ...form,
      [name]: type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
    console.log(form);
  };

  useEffect(() => {}, []);

  const handlerSubmit = (e) => {
    e.preventDefault();

    const token = Cookies.get("islogin");
    if (!token) {
      alert("token not found");
      router.push("/admin");
      return;
    }
    const formData = new FormData();
    formData.set("title", form.title);
    formData.set("desc", value);
    formData.set("image", form.image[0]);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: "Bearer" + " " + token,
      },
    };

    axios
      .post("http://localhost:5500/api/v1/article", formData, config)
      .then(function (response) {
        console.log(response);
        alert("created article success");
        setForm({
          title: "",
          description: "",
          image: [],
        });
        setValue("");
        router.push("/admin/dashboard");
      })
      .catch(function (error) {
        console.log(error);
        alert("created article failed");
        setForm({
          title: "",
          description: "",
          image: [],
        });
        setValue("");
        router.push("/admin/dashboard");
      });
  };

  return (
    <>
      <NavbarAdmin />
      <Container
        fluid
        className="d-flex justify-content-center text-black"
        style={{ overflow: "auto", color: "black" }}
      >
        <Container className="px-5" style={{ height: "100vh" }}>
          <Form onSubmit={(e) => handlerSubmit(e)}>
            <h1 className="fs-3">Create Article</h1>
            <Container className="d-flex gap-3 overflow-hidden">
              <div className="gap-2 w-75">
                <Form.Group className="">
                  <Form.Label className="">Title Article</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={handleChange}
                    placeholder="Title"
                    name="title"
                    value={form.title}
                    style={{
                      backgroundColor: "rgba(210, 210, 210, 0.25)",
                      border: "solid 2px #D2D2D2",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formFile">
                  <Form.Label className="">Image Article</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    style={{
                      backgroundColor: "rgba(210, 210, 210, 0.25)",
                      border: "solid 2px #D2D2D2",
                    }}
                    name="image"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div
                className="w-25 bg-black"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <Image
                  src={preview}
                  rounded
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Container>

            <Form.Group className="my-3" controlId="formBasicFullName">
              <Form.Label className="">Desc Article</Form.Label>

              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </Form.Group>

            <Container className=" d-flex justify-content-end mt-3">
              <Button
                style={{ backgroundColor: "green" }}
                variant="success"
                size="lg"
                disabled={isLoading}
                type="submit"
              >
                create article
              </Button>
            </Container>
          </Form>
        </Container>
        <Modal
          show={isLoading}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Button disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </Modal>
      </Container>
    </>
  );
};

export default Page;
