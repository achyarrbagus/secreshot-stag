import React from "react";
import { NextPage } from "next";
import Image from "next/image";

const Index: NextPage = () => {
  return (
    <>
      <div className="content">
        <section
          className="banner-pages"
          style={{
            backgroundImage: "url('/assets/img/stroke/banner-stroke.png')",
          }}
        >
          <div className="container">
            <div className="text">
              <p>
                Are you seeking innovative answers to address the aftermath of a
              </p>
              <h3>Stroke?</h3>
              <a href="#book" className="btn btn-warning fs-14">
                {" "}
                Book Now{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="desc">
          <div className="container">
            <h3>Revealing the Future of Stroke Rehabilitation</h3>
            <p>
              Stroke consequences can pose substantial hurdles, impacting both
              physical and cognitive functions, demanding effective
              rehabilitation methods.
            </p>
          </div>
        </section>

        <section className="detail-pages">
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <Image src="assets/img/icon_lamp.svg" className="me-3" alt="" />
              <h6 className="title-line">
                <span>How it works?</span>
              </h6>
            </div>
            <div className="row align-items-center gy-4">
              <div className="col-md-6">
                <Image
                  src="assets/img/stroke/stroke01.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p className="text-center fs-20 text-dark fw-semibold mb-0 py-4">
                  Discover how the revolutionary potential of secretome and stem
                  cells is reshaping the domain of stroke recovery, providing
                  fresh possibilities for rehabilitation, neural rejuvenation,
                  and enhanced quality of life.
                </p>
              </div>
            </div>
            <div className="row align-items-stretch align-items-center g-0 mt-4">
              <div className="col-md-6">
                <Image
                  src="assets/img/stroke/stroke02.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6 order-last order-md-first">
                <div className="rate">
                  <div className="file">
                    <Image src="assets/img/icon_pdf.svg" alt="" />
                    <div className="name-file">
                      <h5>Stem Cells for Stroke Doc.PDF</h5>
                      <a href="#" className="me-4">
                        <i className="mdi mdi-eye me-1"></i> View
                      </a>
                      <a href="#" className="">
                        <i className="mdi mdi-download me-1"></i> Download
                      </a>
                    </div>
                  </div>
                  <div className="price">
                    Start from: <b> Rp 5.400.000 </b> <small>/Package</small>
                  </div>
                  <div className="desc">
                    <p>Treatment Procedure :</p>
                    <ul>
                      <li>Need 3 times treatment in a month</li>
                      <li>Dosage : 2 vial per treatment</li>
                    </ul>
                  </div>
                  <div className="w-100 d-flex justify-content-center">
                    <a href="#book" className="btn btn-warning mt-4">
                      {" "}
                      Book Now{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> Book Now </h3>
            <form action="#">
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Your Address"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Service Name</label>
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option>Select Service</option>
                    <option value="acne">Acne</option>
                    <option value="hairloss">Hair Loss</option>
                    <option value="antiaging">Anti Aging</option>
                    <option value="scars">Scars</option>
                    <option value="arthritis">Arthritis</option>
                    <option value="autoimmune">Auto Immune</option>
                    <option value="covid">Covid-19</option>
                    <option selected value="stroke">
                      Stroke
                    </option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <button type="submit" className="btn btn-whatsapp w-100">
                    <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                    Whatsapp
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button type="submit" className="btn btn-telegram w-100">
                    <i className="fa-brands fa-telegram fs-18 me-2"></i>
                    Telegram
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
