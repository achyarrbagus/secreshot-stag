import React from "react";

function Navbar() {
  return (
    <>
      <nav className="nav nav-top fixed-top">
        <div className="container">
          <div className="d-flex align-items-center">
            <Link href="/">
              <div style={{ cursor: "pointer" }} className="nav-brand">
                <img src="/assets/img/logo.png" alt="" />
              </div>
            </Link>

            <div className="btn-group ms-auto">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-earth me-2"></i> EN
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" type="button">
                    English
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Indonesia
                  </button>
                </li>
              </ul>
            </div>
          </div>
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
      </nav>
    </>
  );
}

export default Navbar;
