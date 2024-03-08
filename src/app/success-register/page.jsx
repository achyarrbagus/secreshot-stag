"use client";

import Link from "next/link";
import React from "react";

var successRegister = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Form Registrasi</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/pbs/style.css" />
      </head>
      <div className="content bg-thanks">
        <div className="content-menu">
          <div className="logo">
            <img src="assets/img/perklin-bni-sby/logo.png" alt="" />
          </div>
        </div>

        <div className="container">
          <div className="text-home">
            <div className="text-center">
              <img src="assets/img/perklin-bni-sby/icon-check.svg" className="mb-4" alt="" />
              <h5 className="fw-bold fs-24 text-primary">
                Terima Kasih
              </h5>
              <p className="fs-20">
                Telah mendaftar fasilitas <br />
                <b>KUR BNI</b> dan <b>RME Klinik Pintar</b>
              </p>
              <p className="fs-20">
                Bersama
              </p>
              <p className="fs-20 fw-bold">
                “BNI, Cepat Sehat & Perklin <br/> Surabaya”
              </p>
              <p className="text-contact">
                Anda akan dihubungi oleh <br /> pihak <b>BNI</b> dan <b>Cepat Sehat</b> <br /> untuk tahap
                selanjutnya
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default successRegister;
