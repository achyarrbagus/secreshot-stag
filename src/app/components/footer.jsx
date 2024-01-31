"use client";

import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link href="/">
              <img src="/assets/img/logo-white.png" className="logo" alt="" />
            </Link>
            <img src="/assets/img/logo-atensi.png" className="logo-atensi ms-auto" alt="" />
          </div>
          <div className="row mt-4">
            <div className="col-md-8 text-white">
              <h4 className="fs-14">PT Cepat Sehat Indonesia</h4>
              <p>
                Jalan Peternakan No. 13, Kel. Tengah, Kec. Kramat jati, Kota Adm. Jakarta Timur, Provinsi DKI Jakarta 13510 <br />
                sehatcepat.com
              </p>
            </div>
            <div className="col-md-12">
              <div className="d-flex align-items-center">
                <Link
                  href="https://api.whatsapp.com/send/?phone=6282211189009&text&type=phone_number&app_absent=0"
                  className="phone text-white fs-14 d-flex align-items-center"
                >
                  <i className="mdi mdi-phone me-2 fs-24"></i> 0822 1118 9009
                </Link>
                <div className="sosmed list-inline ms-auto">
                  <Link href="#" className="list-inline-item text-white">
                    <i className="mdi mdi-web fs-24"></i>
                  </Link>
                  <Link href="https://www.facebook.com/klinikcepatsehat" className="list-inline-item text-white">
                    <i className="mdi mdi-facebook fs-24"></i>
                  </Link>
                  <Link href="https://www.instagram.com/sehatcepat.mobi/ " className="list-inline-item text-white">
                    <i className="mdi mdi-instagram fs-24"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">Copyright © 2024 Cepat Sehat. All Rights Reserved.</div>

        <script type="module" src="/src/main.tsx"></script>
        <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/swiper-bundle.min.js"></script>
        <script src="/assets/js/index.js"></script>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
      </footer>
    </>
  );
}

export default Footer;
