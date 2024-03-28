import React from "react";

function MyFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="d-flex align-items-center">
            <a href="index.html">
              <img src="assets/img/logo-white.png" className="logo" alt="" />
            </a>
            <a href="https://atensi.or.id/" className="ms-auto">
              <img
                src="assets/img/logo-atensi.png"
                className="logo-atensi"
                alt=""
              />
            </a>
          </div>
          <div className="row mt-4">
            <div className="col-md-8 text-white">
              <h4 className="fs-14">Klinik Cepat Sehat Indonesia</h4>
              <p>Registered Number 04102100035090001</p>
              <p>
                Jalan Peternakan No. 13, Kel. Tengah, Kec. Kramat jati, Kota
                Adm. Jakarta Timur, Provinsi DKI Jakarta 13510
              </p>
            </div>
            <div className="col-md-12">
              <div className="d-flex align-items-center">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285212500030&text&type=phone_number&app_absent=0"
                  className="phone text-white fs-14 d-flex align-items-center"
                >
                  <i className="mdi mdi-phone me-2 fs-24"></i> 0822 1118 9009
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
                    href="https://www.instagram.com/sehatcepat.mobi/ "
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
