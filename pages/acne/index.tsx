import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { useSelector } from "react-redux";

const Acne: NextPage = () => {
  const isMobile = useSelector((state: any) => state.isMobile.value);

  const redirectWa = (e: any) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement | null;
    const address = document.getElementById(
      "address"
    ) as HTMLInputElement | null;

    const service = document.getElementById(
      "service"
    ) as HTMLInputElement | null;

    if (name?.value && address?.value && service?.value) {
      if (service?.value == "Select Service") {
        return alert("please fill form correcly");
      }
      const wardingWa = encodeURIComponent(`
Hello CepatSehat.com by Cepat Sehat Clinic, i want a consultation 

Name : ${name.value}
Address : ${address.value} 
Service : ${service.value}`);
      let url = `https://api.whatsapp.com/send/?phone=6282211189009&text=${wardingWa}&type=phone_number&app_absent=0`;
      window.location.href = url;

      return;
    } else {
      alert("please fill form with correctly");
    }
  };

  const redirectTele = (e: any) => {
    e.preventDefault();

    window.location.replace("https://t.me/InfusionJakarta");
  };

  return (
    <>
      <div className="content">
        <section
          className="banner-pages"
          style={{
            backgroundImage: "url('/assets/img/acne/banner-acne.png')",
          }}
        >
          <div className="container">
            <div className="text">
              <p>Are you struggling to find effective remedies for</p>
              <h3>Acne?</h3>
              <a href="#book" className="btn btn-warning fs-14">
                {" "}
                Book Now{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="desc">
          <div className="container">
            <h3>Revealing the Future of Acne Treatment</h3>
            <p>
              Acne is a common skin condition that affects many people, causing
              blemishes and discomfort on the face and other body areas.
            </p>
          </div>
        </section>

        <section className="detail-pages">
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <img src="/assets/img/icon_lamp.svg" className="me-3" alt="" />
              <h6 className="title-line">
                <span>How it works?</span>
              </h6>
            </div>
            <div className="row align-items-center gy-4">
              <div className="col-md-6">
                <img
                  src="assets/img/acne/acne01.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p className="text-center fs-20 text-dark fw-semibold mb-0 py-4">
                  Discover how cutting-edge treatments and skincare innovations
                  are transforming the battle against acne.
                </p>
              </div>
            </div>
            <div className="row align-items-stretch align-items-center g-0 mt-4">
              <div className="col-md-6">
                <img
                  src="assets/img/acne/acne02.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6 order-last order-md-first">
                <div className="rate">
                  <div className="file">
                    <img src="assets/img/icon_pdf.svg" alt="" />
                    <div className="name-file">
                      <h5>Stem Cells for Acne Doc.PDF</h5>
                      <Link
                        style={isMobile ? { display: "none" } : {}}
                        href={"/viewer-pdf?pdf=acne.pdf"}
                        target="_blank"
                        className="me-4"
                      >
                        <i className="mdi mdi-eye me-1"></i> View
                      </Link>

                      <a className="" href={"/assets/pdf/acne.pdf"} download>
                        <i className="mdi mdi-download me-1"></i> Download
                      </a>
                    </div>
                  </div>
                  <div className="price">
                    Start from: <b> Rp 1.500.000 </b> <small>/Treatment</small>
                  </div>
                  <div className="desc">
                    <p>Treatment Procedure :</p>
                    <ul>
                      <li>Need 4 times treatment in a month</li>
                    </ul>
                    <p>Benefit :</p>
                    <ul>
                      <li>Improve pigmentation (dullness, spots)</li>
                      <li>
                        Improves collagen (large pores, wrinkle lines, acne
                        scars)
                      </li>
                      <li>Moisturizes skin</li>
                      <li>Skin looks younger and brighter.</li>
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
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Your Address"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Service Name</label>
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                    id="service"
                  >
                    <option>Select Service</option>
                    <option selected value="Acne">
                      Acne
                    </option>
                    <option value="Hair Loss">Hair Loss</option>
                    <option value="Anti Aging">Anti Aging</option>
                    <option value="Scars">Scars</option>
                    <option value="Arthritis">Arthritis</option>
                    <option value="Auto Immune">Auto Immune</option>
                    <option value="Covid-19">Covid-19</option>
                    <option value="Stroke">Stroke</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <button
                    type="submit"
                    onClick={redirectWa}
                    className="btn btn-whatsapp w-100"
                  >
                    <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                    Whatsapp
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button
                    type="submit"
                    onClick={redirectTele}
                    className="btn btn-telegram w-100"
                  >
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

export default Acne;
