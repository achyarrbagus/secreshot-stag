import React from "react";
import Link from "next/link";

function MyNavbar({ lang, dispatch, setLang }) {
  return (
    <>
      <nav className="nav nav-top fixed-top">
        <div className="container">
          <div className="d-flex align-items-center gap-3">
            <Link
              href={`/?${
                lang == "EN" ? "lang=en&locale=en" : "lang=idn&locale=id"
              }`}
            >
              <div style={{ cursor: "pointer" }} className="nav-brand">
                <img src="/assets/img/logo.png" alt="" />
              </div>
            </Link>

            <div className="btn-group ms-auto">
              {(() => {
                switch (lang) {
                  case "ID":
                    return (
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-earth me-2"></i> ID
                      </button>
                    );
                  default:
                    return (
                      <button
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-earth me-2"></i> EN
                      </button>
                    );
                }
              })()}

              <ul className="dropdown-menu dropdown-menu-end">
                <li className="">
                  <button
                    onClick={() => dispatch(setLang("EN"))}
                    className="dropdown-item d-flex gap-1"
                    type="button"
                  >
                    <img
                      src="assets/img/flag/EN Flag_new.png"
                      alt=""
                      className="mt-1"
                      width={25}
                    />
                    English
                  </button>
                </li>
                <li className="">
                  <button
                    onClick={() => dispatch(setLang("ID"))}
                    className="dropdown-item d-flex gap-1"
                    type="button"
                  >
                    <img
                      src="assets/img/flag/ID Flag_new.png"
                      alt=""
                      className="mt-1"
                      width={25}
                    />
                    Indonesia
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;

{
  /* <nav className="nav nav-top fixed-top">
<div className="container">
  <div className="d-flex align-items-center gap-3">
    <Link
      href={`/?${
        lang == "EN" ? "lang=en&locale=en" : "lang=idn&locale=id"
      }`}
    >
      <div style={{ cursor: "pointer" }} className="nav-brand">
        <img src="/assets/img/logo.png" alt="" />
      </div>
    </Link>

    <div className="btn-group ms-auto">
      {(() => {
        switch (lang) {
          case "ID":
            return (
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-earth me-2"></i> ID
              </button>
            );
          default:
            return (
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-earth me-2"></i> EN
              </button>
            );
        }
      })()}

      <ul className="dropdown-menu dropdown-menu-end">
        <li className="">
          <button
            onClick={() => dispatch(setLang("EN"))}
            className="dropdown-item d-flex gap-1"
            type="button"
          >
            <img
              src="assets/img/flag/EN Flag_new.png"
              alt=""
              className="mt-1"
              width={25}
            />
            English
          </button>
        </li>
        <li className="">
          <button
            onClick={() => dispatch(setLang("ID"))}
            className="dropdown-item d-flex gap-1"
            type="button"
          >
            <img
              src="assets/img/flag/ID Flag_new.png"
              alt=""
              className="mt-1"
              width={25}
            />
            Indonesia
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav> */
}
