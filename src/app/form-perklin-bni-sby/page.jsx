"use client";

import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import { validation } from "./validation";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  phone: "",
  clinic_name: "",
  clinic_address: "",
  clinic_operation_license_number: "",
  fasyankes_clinic_code: "",
};

const perklinBniSby = () => {
  const [formStep, setFormStep] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const [ktpPengurus, setKtpPengurus] = useState(null);
  const [npwpPerusahaan, setNpwpPerusahaan] = useState(null);
  const [izinOperasional, setIzinOperasional] = useState(null);

  const [fileName1, ktpInput] = useState("");
  const [fileName2, npwpInput] = useState("");
  const [fileName3, ioInput] = useState("");

  const [submitLoad, setSubmitLoading] = useState(false);

  useEffect(() => {
    setIsValid(false);
  }, []);

  const handleFileChange = (ev, setter, setFileName) => {
    const file = ev.target.files && ev.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        Swal.fire({
          icon: "error",
          title: "Ukuran File Terlampaui",
          text: "Pilih file yang lebih kecil dari 10MB.",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setter(reader.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validation,
      onSubmit: async (values) => {
        Swal.fire({
          html: `<p>Periksa Kembali <br> Apakah  Data yang Anda Masukan <br> Sudah Sesuai?</p>`,
          showCancelButton: true,
          confirmButtonColor: "#ff8a00",
          cancelButtonColor: "#a6a6a6",
          confirmButtonText: "OK",
          cancelButtonText: "BACK",
        }).then(async (result) => {
          if (result.isConfirmed) {
            setSubmitLoading(true);
            try {
              const resData = await fetch(
                `https://cepatsehats.com/api/v3/cs/index.php`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: values.name,
                    phone: values.phone,
                    clinic_name: values.clinic_name,
                    clinic_address: values.clinic_address,
                    operational_license_number:
                      values.clinic_operation_license_number,
                    clinic_fasyankes_code: values.fasyankes_clinic_code,
                    ktp_pengurus: ktpPengurus,
                    npwp_perusahaan: npwpPerusahaan,
                    izin_operasional: izinOperasional,
                  }),
                }
              );

              if (resData.ok) {
                const result = await resData.json();
                console.log(result);

                if (result.status === "success") {
                  window.location.replace("/success-register");
                }
              } else {
                console.error("Request failed with status:", resData.status);
                const errorResponse = await resData.json();
                console.error("Error response:", errorResponse);
              }
            } catch (error) {
              console.error("Error:", error);
            } finally {
              setSubmitLoading(false);
            }
          }
        });
      },
    });

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  useEffect(() => {
    setIsValid(
      Object.keys(errors).length === 0 && Object.keys(touched).length > 0
    );
  }, [values, errors, touched]);

  const renderButton = () => {
    const isFilesSelected = ktpPengurus && npwpPerusahaan && izinOperasional;
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <button
          type="submit"
          className={`btn btn-yellow w-100 mt-5 ${submitLoad ? 'disabled' : ''}`}
          disabled={!isFilesSelected}
        >
          {submitLoad ? 'Memuat...' : 'Daftar'}
        </button>
      );
    } else {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="btn btn-yellow w-100 mt-5"
          disabled={!isValid}
        >
          Selanjutnya
        </button>
      );
    }
  };

  const handlePhoneChange = (e) => {
    const { id, value } = e.target;

    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue)) {
      handleChange(e);
    } else {
      formik.setFieldError(id, "Masukan nomor dengan benar");
    }
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Form Registrasi</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/pbs/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <div className="content">
        <div className="content-menu">
          <div className="logo">
            <img src="assets/img/perklin-bni-sby/logo.png" alt="" />
          </div>
        </div>
        <div className="title-kur">
          <img src="assets/img/perklin-bni-sby/icon-regis.svg" alt="" />
          <span>
            Pendaftaran KUR (Kredit Usaha Rakyat) BNI - Cepat Sehat & Perklin
          </span>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            {formStep === 0 && (
              <section>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Nama PIC Perwakilan
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby=""
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <small style={{ color: "red" }}>{errors.name}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">
                    No Handphone PIC
                  </label>
                  <input
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    className="form-control"
                    id="phone"
                    aria-describedby=""
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handlePhoneChange}
                  />
                  {errors.phone && (
                    <small style={{ color: "red" }}>{errors.phone}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label for="clinic_name" className="form-label">
                    Nama Klinik
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinic_name"
                    aria-describedby=""
                    value={values.clinic_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.clinic_name && (
                    <small style={{ color: "red" }}>{errors.clinic_name}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label for="clinic_address" className="form-label">
                    Alamat Klinik
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinic_address"
                    aria-describedby=""
                    value={values.address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.clinic_address && (
                    <small style={{ color: "red" }}>
                      {errors.clinic_address}
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    for="clinic_operation_license_number"
                    className="form-label"
                  >
                    Nomor Izin Operasional Klinik
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinic_operation_license_number"
                    aria-describedby=""
                    value={values.clinic_operation_license_number}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.clinic_operation_license_number && (
                    <small style={{ color: "red" }}>
                      {errors.clinic_operation_license_number}
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label for="fasyankes_clinic_code" className="form-label">
                    Kode Fasyankes Klinik
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fasyankes_clinic_code"
                    aria-describedby=""
                    value={values.fasyankes_clinic_code}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.fasyankes_clinic_code && (
                    <small style={{ color: "red" }}>
                      {errors.fasyankes_clinic_code}
                    </small>
                  )}
                </div>
              </section>
            )}

            {formStep === 1 && (
              <section>
                <div className="mb-3">
                  <label htmlFor="ktp_pengurus" className="form-label">
                    Upload KTP Pengurus Klinik
                  </label>
                  <div class="input-group custom-file-button">
                    <label className="input-group-text" for="ktp_pengurus">
                      <i className="fa-solid fa-upload"></i>&nbsp;Upload File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="ktp_pengurus"
                      accept="image/*,.pdf"
                      onChange={(e) =>
                        handleFileChange(e, setKtpPengurus, ktpInput)
                      }
                      required
                    />
                  </div>
                  <p className="">{fileName1}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="npwp_perusahaan" className="form-label">
                    Upload NPWP Perusahaan
                  </label>
                  <div class="input-group custom-file-button">
                    <label className="input-group-text" for="npwp_perusahaan">
                      <i className="fa-solid fa-upload"></i>&nbsp;Upload File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="npwp_perusahaan"
                      accept="image/*,.pdf"
                      onChange={(e) =>
                        handleFileChange(e, setNpwpPerusahaan, npwpInput)
                      }
                      required
                    />
                  </div>
                  <p className="">{fileName2}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="izin_operasional" className="form-label">
                    Upload Izin Operasional Klinik
                  </label>
                  <div class="input-group custom-file-button">
                    <label className="input-group-text" for="izin_operasional">
                      <i className="fa-solid fa-upload"></i>&nbsp;Upload File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="izin_operasional"
                      accept="image/*,.pdf"
                      onChange={(e) =>
                        handleFileChange(e, setIzinOperasional, ioInput)
                      }
                      required
                      placeholder="qr32r32"
                    />
                  </div>
                  <p className="">{fileName3}</p>
                </div>
              </section>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </>
  );
};

export default perklinBniSby;
