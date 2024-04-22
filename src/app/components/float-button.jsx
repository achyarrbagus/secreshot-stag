import React from "react";

import Helper from "../../lib/helper/helper";

function Floatbutton() {
  return (
    <>
      <div
        className="btn-float"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        data-bs-title="Consult with Our Medical Team"
        data-bs-custom-className="custom-tooltip"
      >
        <div className="btn-circle whatsapp">
          <a onClick={redirectWa} className="text-white">
            <i className="fs-24 fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className="btn-circle telegram">
          <a onClick={redirectTele} className="text-white">
            <i className="fs-24 fa-brands fa-telegram"></i>
          </a>
        </div>

        <script type="module" src="/src/main.tsx"></script>
        <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/swiper-bundle.min.js"></script>
        <script src="/assets/js/index.js"></script>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
        ></script>
      </div>
    </>
  );
}

export default Floatbutton;
