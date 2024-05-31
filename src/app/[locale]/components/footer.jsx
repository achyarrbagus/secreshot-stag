import React from "react";
import { useSelector } from "react-redux";

function MyFooter() {
  const lang = useSelector((state) => state.lang.value);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="d-flex align-items-center">
            <a href="index.html">
              <img src="/assets/img/logo-white.png" className="logo" alt="" />
            </a>
            <a href="https://atensi.or.id/" className="ms-auto">
              <img
                src="/assets/img/logo-atensi.png"
                className="logo-atensi"
                alt=""
              />
            </a>
          </div>
          <div className="row mt-4">
            <div className="col-md-8 text-white">
              <h4 className="fs-16">Klinik Cepat Sehat Indonesia</h4>
              <p>Registered Number 04102100035090001</p>

              <h4 className="fs-14">Seminyak Address</h4>
              <a
                href="https://maps.app.goo.gl/DxnKepuw5bjJTZhY8"
                className="d-flex gap-2 text-white"
              >
                <img
                  src="/assets/img/maps.png"
                  className="img-fluid"
                  alt=""
                  width={20}
                  height={5}
                />
                Jl. Legian No.369 X, Legian, Kuta, Badung Regency, Bali 80361
              </a>
              <h4 className="fs-14"> Jimbaran Address</h4>
              <a
                href="https://maps.app.goo.gl/f9WxZoFb382M9Lrb7"
                className="d-flex gap-2 text-white"
              >
                <img
                  src="/assets/img/maps.png"
                  className="img-fluid"
                  alt=""
                  width={20}
                  height={5}
                />
                Jl. Puri Gading, Jimbaran, South Kuta, Badung Regency, Bali
                80361
              </a>
              <h4 className="fs-14">Jakarta Address</h4>

              <a
                href="https://maps.app.goo.gl/vg2pST3uctFJmAMs7"
                className="d-flex gap-2 text-white"
              >
                <img
                  src="/assets/img/maps.png"
                  className="img-fluid"
                  alt=""
                  width={20}
                  height={5}
                />
                Jalan Peternakan No. 13, Kel. Tengah, Kec. Kramatjati, Kota Adm.
                Jakarta Timur, Provinsi DKI Jakarta 13510
              </a>
            </div>
            <div className="col-md-12">
              <div className="d-flex align-items-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285212500030&text&type=phone_number&app_absent=0"
                  className="phone text-white fs-14 d-flex align-items-center"
                >
                  <i className="mdi mdi-phone me-2 fs-24"></i> 6285212500030
                </a>
                <div className="sosmed list-inline ms-auto">
                  <a href="#" className="list-inline-item text-white">
                    <i className="mdi mdi-web fs-24"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/klinikcepatsehat"
                    className="list-inline-item text-white"
                  >
                    <i className="mdi mdi-facebook fs-24"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/klinikcepatsehat/"
                    className="list-inline-item text-white"
                  >
                    <i className="mdi mdi-instagram fs-24"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          Copyright © 2024 Cepat Sehat. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default MyFooter;
