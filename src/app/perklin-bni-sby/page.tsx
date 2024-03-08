"use strict";

import React from "react";
import "../../../public/assets/css/pbs/style.css";

var perklinBniSby = async () => {
  return (
    <div className="content bg-home">
      <div className="content-menu">
        <div className="logo">
          <img src="../../../public/assets/img/perklin-bni-sby/logo.png" />
        </div>
      </div>
      <div className="container">
        <div className="text-home">
          <h5>FORM REGISTRASI</h5>
          <p className="detail-text">
            Kredit usaha rakyat oleh BNI, Cepat Sehat dan Perklin Surabaya
          </p>
          <p className="fs-16">
            Dapatkan kesempatan untuk mendapatkan KUR BNI & fasilitas Rekam
            Medis Elektronik dan layanan digital lainnya
          </p>
        </div>
        <a className="btn btn-yellow w-100 mt-5"> Daftar Sekarang </a>
      </div>
    </div>
  );
};

export default perklinBniSby;
