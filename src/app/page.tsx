"use client";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeId from "./page-id";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import Articles from "../../public/assets/article/json/article.json";

const Home = () => {
  const CutText = (text: string) => {
    let sentences = text.split("");
    // Mengambil 100 kalimat pertama
    let first100Sentences = sentences.slice(0, 40);
    let resultText = first100Sentences.join("");
    return resultText;
  };

  const redirectWa = (e: any) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement | null;
    const address = document.getElementById("address") as HTMLInputElement | null;

    const service = document.getElementById("service") as HTMLInputElement | null;
    if (name?.value && address?.value && service?.value) {
      if (service.value == "Select Service") {
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
Saya ingin melakukan booking vaksin dengan keterangan 
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

  const redirectTele = () => {
    window.location.replace("https://t.me/InfusionJakarta");
  };

  const lang = useSelector((state: any) => state.lang.value);

  switch (lang) {
    case "ID":
      return (
        <>
          <HomeId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <div className="hero-banner">
              <div className="container">
                <div className="text">
                  <h3 className="title"> Your Trusted Partner in Personalized In-Home Healthcare </h3>
                  <p className="desc">
                    We deliver personalized and compassionate healthcare to your home through our experienced professionals.
                  </p>
                  <a href="#book" className="btn btn-warning">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <section className="service">
              <div className="container">
                <h3 className="title-section"> Our Services </h3>
                <div className="row g-3">
                  <div className="col-4">
                    <Link href="/doctor-home-visit" className="box-service">
                      <i className="icon-menu-doctor-home"></i>
                      <span className="title-service"> Doctor Home Visit </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/home-nursing" className="box-service">
                      <i className="icon-menu-home-nursing"></i>
                      <span className="title-service"> Home Nursing and Wound Care </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/remote-telemedicine" className="box-service">
                      <i className="icon-menu-remote-telemedicine"></i>
                      <span className="title-service"> Remote Telemedicine </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/holistic-alternative" className="box-service">
                      <i className="icon-menu-holistic"></i>
                      <span className="title-service"> Holistic Alternative Therapies </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link href="/inhome-therapy" className="box-service">
                      <i className="icon-menu-in-home-iv"></i>
                      <span className="title-service"> In-Home IV Therapy & More </span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <a href="/alternative-telemedicine" className="box-service">
                      <i className="icon-menu-alternative-telemedicine"></i>
                      <span className="title-service"> Alternative Telemedicine </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="why">
              <div className="container">
                <div className="text">
                  <h3>Why Choose Us?</h3>
                  <div className="list-why">
                    <div className="items-why">
                      <span>More than 5000 patients well treated in 2023</span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img src="assets/img/Protect.png" className="img-list" alt="" />
                      <span>Easy, safe & comfortable service</span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img src="assets/img/Diploma.png" className="img-list" alt="" />
                      <span>Supported by certified & trained health workers</span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img src="assets/img/Last 24 Hours.png" className="img-list" alt="" />
                      <span>24 hours service</span>
                    </div>
                  </div>
                  <div className="list-why">
                    <div className="items-why">
                      <img src="assets/img/Globe Network.png" className="img-list" alt="" />
                      <span>Wide coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="doctor">
              <div className="container">
                <h3 className="title-section"> Our Doctors </h3>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-8">
                    <div className="row g-3 g-md-5 justify-content-center">
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-dewi-f.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Dewi Fransiska, Sp.B</h5>
                            <p>Surgeon</p>
                            <span>STR: 3121101422105406</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Mayapada Hospital Kuningan, Jakarta</li>
                                <li>Eka Hospital, Bekasi</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-dwi-s.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Dwi Suryaning Ayu Aprilizia, Sp.A</h5>
                            <p>Pediatrician</p>
                            <span>STR: 3321201323154360</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Aysha Islamic Hospital, Bogor</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-ayu-a.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Ayu A. Istiana</h5>
                            <p>Aesthetic Doctor</p>
                            <span>STR: 3121100220145699</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic, Jakarta</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-ernita-r.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Ernita Rosyanti Dewi</h5>
                            <p>General Practitioner</p>
                            <span>STR: 3121100220145544</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic, Jakarta</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-irvan-r.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Irvan Rizki Fitri</h5>
                            <p>General Practitioner</p>
                            <span>STR: 3111100321119174</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic, Jakarta</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-4">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/dr-melchisedek-a.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>dr. Melchisedek A.V.P Marbun</h5>
                            <p>General Practitioner</p>
                            <span>STR: 3111100220155405</span>
                            <hr />
                            <div className="text-start">
                              <p>
                                Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                              </p>
                              <ul className="ps-3">
                                <li>Cepat Sehat Clinic, Jakarta</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="doctor nurse">
              <div className="container">
                <h3 className="title-section"> Our Nurses </h3>
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-8">
                    <div className="row g-3 g-md-4 justify-content-center">
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/nurse-siti.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>Siti Rahma Derlauw</h5>
                            <span>STR: 3101522234737239</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/nurse-loisa.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>Loisa Lakamai</h5>
                            <span>STR: 1701721213519681</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/nurse-syarah.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>Syarah Azzarah</h5>
                            <span>STR: 2601521224246624 </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/nurse-andi.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>Andi Andriansyah S.</h5>
                            <span>STR: 1201512214112821</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/nurse-marsiani.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>Marsiani Talo</h5>
                            <span>STR: 190172122-4444051</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3">
                        <div className="items-doctor">
                          <div className="img-doctor">
                            <img src="assets/img/doctor/nurse-irfan.png" alt="" />
                          </div>
                          <div className="name">
                            <h5>Irfan Mustofa</h5>
                            <span>STR: 1401511224517960</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="article">
              <div className="container">
                <h3 className="title-section text-white"> Article </h3>
                <div className="swiper swiper-article mt-5">
                  <div className="swiper-wrapper">
                    <div className="swiper-wrapper">
                      <Swiper
                        loop
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3.5}
                        speed={1000}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        breakpoints={{
                          320: {
                            slidesPerView: 1.5,
                          },
                          480: {
                            slidesPerView: 2.5,
                          },
                          768: {
                            slidesPerView: 3.5,
                          },
                        }}
                      >
                        {Articles &&
                          Articles.map((item: any, index: number) => (
                            <>
                              <SwiperSlide>
                                <Link href={`/article/${index}`}>
                                  <div className="card-slide-article">
                                    <img src={`assets/img/article/article0${index + 1}.jpg`} alt="" />
                                    <div className="name-article">
                                      <h6>{CutText(item.Title)}...</h6>
                                      <p>{CutText(item.DescCard)}...</p>
                                      <a href="article-detail.html" className="text-muted fs-14">
                                        read more <i className="mdi mdi-arrow-right"></i>
                                      </a>
                                    </div>
                                  </div>
                                </Link>
                              </SwiperSlide>
                            </>
                          ))}
                      </Swiper>
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
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Address</label>
                      <input id="address" type="text" className="form-control" placeholder="Your Address" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Service</label>
                      <select id="service" className="form-select form-control" aria-label="Default select example">
                        <option value="Select Service" selected>
                          Select Service
                        </option>
                        <option value="Doctor Home Visit">Doctor Home Visit</option>
                        <option value="Home Nursing and Wound Care">Home Nursing and Wound Care</option>
                        <option value="Remote Telemedicine">Remote Telemedicine</option>
                        <option value="Holistic Alternative Therapies">Holistic Alternative Therapies</option>
                        <option value="In-Home IV Therapy & more">In-Home IV Therapy & more</option>
                        <option value="Alternative Telemedicine">Alternative Telemedicine</option>
                      </select>
                    </div>
                  </div>
                  <div className="row g-3 justify-content-center align-items-stretch">
                    <div className="col-6 col-md-3">
                      <button type="submit" onClick={redirectWa} className="btn btn-whatsapp w-100">
                        <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                        Whatsapp
                      </button>
                    </div>
                    <div className="col-6 col-md-3">
                      <button type="submit" onClick={redirectTele} className="btn btn-telegram w-100">
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
  }
};

export default Home;
