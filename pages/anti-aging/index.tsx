import React from "react";
import { NextPage } from "next";

const Index: NextPage = () => {
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
Hello Admin,
I want to book service with
following information :

Name : ${name.value}
Address : ${address.value}
Service Name : ${service.value}
----------------------------------------------------------------------     
Halo Admin,
Saya ingin melakukan booking service dengan keterangan 
berikut:

Nama : ${name.value}
Alamat : ${address.value} 
Service Name : ${service.value}`);
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
            backgroundImage: "url('assets/img/antiaging/banner-antiaging.png')",
          }}
        >
          <div className="container">
            <div className="text">
              <p>
                Seeking groundbreaking solutions to defy the signs of aging?
              </p>
              <h3>Anti Aging?</h3>
              <a href="#book" className="btn btn-warning fs-14">
                {" "}
                Book Now{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="desc">
          <div className="container">
            <h3>Revealing the Future of Anti-Aging</h3>
            <p>
              Aging is a natural process that can result in visible changes to
              one`s skin, appearance, and overall well-being.
            </p>
          </div>
        </section>

        <section className="detail-pages">
          <div className="container">
            <div className="d-flex align-items-center mb-4">
              <img src="assets/img/icon_lamp.svg" className="me-3" alt="" />
              <h6 className="title-line">
                <span>How it works?</span>
              </h6>
            </div>
            <div className="row align-items-center gy-4">
              <div className="col-md-6">
                <img
                  src="assets/img/antiaging/antiaging01.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <p className="text-center fs-20 text-dark fw-semibold mb-0 py-4">
                  Discover how cutting-edge secretome/stem cell technologies are
                  reshaping the landscape of anti-aging solutions and
                  rejuvenation.
                </p>
              </div>
            </div>
            <div className="row align-items-stretch align-items-center g-0 mt-4">
              <div className="col-md-6">
                <img
                  src="assets/img/antiaging/antiaging02.png"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-6 order-last order-md-first">
                <div className="rate">
                  <div className="file">
                    <img src="assets/img/icon_pdf.svg" alt="" />
                    <div className="name-file">
                      <h5>Stem Cells for Anti aging Doc.PDF</h5>
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
                    <option value="Acne">Acne</option>
                    <option value="Hair Loss">Hair Loss</option>
                    <option selected value="Anti Aging">
                      Anti Aging
                    </option>
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

export default Index;
