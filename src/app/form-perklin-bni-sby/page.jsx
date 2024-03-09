"use client";

import React from "react";

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

var perklinBniSby = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: async (values) => {
      Swal.fire({
        html: `<p>Periksa Kembali <br> Apakah  Data yang Anda Masukan <br> Sudah Sesuai?</p>`,
        showCancelButton: true,
        confirmButtonColor: "#ff8a00",
        cancelButtonColor: "#a6a6a6",
        confirmButtonText: "OK",
        cancelButtonText: "BACK"
      }).then( async (result) => {
        if (result.isConfirmed) {
          try {
            const resData = await fetch(`https://cepatsehats.com/api/v3/cs/index.php`, {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: values.name,
                phone: values.phone,
                clinic_name: values.clinic_name,
                clinic_address: values.clinic_address,
                operational_license_number: values.clinic_operation_license_number,
                clinic_fasyankes_code: values.fasyankes_clinic_code
              })
            });
    
            if (resData.ok) {
              const result = await resData.json();
              console.log(result);
          
              if (result.status === "success") {
                window.location.replace('/success-register');
              }
            } else {
              console.error("Request failed with status:", resData.status);
              const errorResponse = await resData.json();
              console.error("Error response:", errorResponse);
            }
          } catch (error) {
            console.error('Error:', error);
          }    
        }
      });
    }
  })

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Form Registrasi</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/pbs/style.css" />
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
            Pendaftaran KUR (Kredit Usaha Rakyat)
            BNI - Cepat Sehat & Perklin
          </span>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="name" className="form-label">Nama PIC Perwakilan</label>
              <input type="text" className="form-control" id="name" aria-describedby=""
                value={values.name}
                onBlur={handleBlur} 
                onChange={handleChange}
              />
              {errors.name && <small  style={{ color: "red" }}>{errors.name}</small>}
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">No Handphone Perwakilan</label>
              <input type="number" pattern="\d*" className="form-control" id="phone" aria-describedby="" 
                value={values.phone}
                onBlur={handleBlur} 
                onChange={handleChange}
              />
              {errors.phone && <small  style={{ color: "red" }}>{errors.phone}</small>}
            </div>
            <div className="mb-3">
              <label for="clinic_name" className="form-label">Nama Klinik</label>
              <input type="text" className="form-control" id="clinic_name" aria-describedby="" 
                value={values.clinic_name}
                onBlur={handleBlur} 
                onChange={handleChange}
              />
              {errors.clinic_name && <small  style={{ color: "red" }}>{errors.clinic_name}</small>}
            </div>
            <div className="mb-3">
              <label for="clinic_address" className="form-label">Alamat Klinik</label>
              <input type="text" className="form-control" id="clinic_address" aria-describedby="" 
                value={values.address}
                onBlur={handleBlur} 
                onChange={handleChange}
              />
              {errors.clinic_address && <small  style={{ color: "red" }}>{errors.clinic_address}</small>}
            </div>
            <div className="mb-3">
              <label for="clinic_operation_license_number" className="form-label">Nomor Izin Operasional Klinik</label>
              <input type="text" className="form-control" id="clinic_operation_license_number" aria-describedby="" 
                value={values.clinic_operation_license_number}
                onBlur={handleBlur} 
                onChange={handleChange}
              />
              {errors.clinic_operation_license_number && <small  style={{ color: "red" }}>{errors.clinic_operation_license_number}</small>}
            </div>
            <div className="mb-3">
              <label for="fasyankes_clinic_code" className="form-label">Kode Fasyankes Klinik</label>
              <input type="text" className="form-control" id="fasyankes_clinic_code" aria-describedby=""
                value={values.fasyankes_clinic_code}
                onBlur={handleBlur} 
                onChange={handleChange}
              />
              {errors.fasyankes_clinic_code && <small  style={{ color: "red" }}>{errors.fasyankes_clinic_code}</small>}
            </div>
            <button type="submit" className="btn btn-yellow w-100 mt-5"> Daftar </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default perklinBniSby;
