"use client";

import Link from "next/link";
import React from "react";

var perklinBniSby = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Form Registrasi</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/pbs/style.css" />
      </head>
      <div className="content bg-home">
        <div className="content-menu">
          <div className="logo">
            <img src="assets/img/perklin-bni-sby/logo.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="text-home">
            <h5>
              FORM REGISTRASI
            </h5>
            <p className="detail-text">
              Kredit usaha rakyat
              oleh <br />
              BNI, Cepat Sehat dan Perklin Surabaya
            </p>
            <p className="fs-16">
              Dapatkan kesempatan untuk mendapatkan KUR BNI & fasilitas Rekam Medis Elektronik dan layanan digital
              lainnya
            </p>
          </div>
          <Link href="/form-perklin-bni-sby" className="btn btn-yellow w-100 mt-5">
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </>
  );
};

export default perklinBniSby;
