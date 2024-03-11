"use client";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Articles from "../../public/assets/article/json/article-id.json";
import Helper from "../../lib/helper/helper";

const HomeId = () => {
  const CutText = (text: string) => {
    let sentences = text?.split("");
    // Mengambil 100 kalimat pertama
    let first100Sentences = sentences?.slice(0, 40);
    let resultText = first100Sentences?.join("");
    return resultText;
  };
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    service: "Select Service",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const redirectWa = () => {
    const helper = new Helper();
    helper.RedirectToWa(formData, "ID", true);
  };

  const redirectTele = () => {
    window.location.href = "https://t.me/cepat_sehat";
  };

  return (
    <>
      <div className="content">
        <div className="hero-banner">
          <div className="container">
            <div className="text">
              <h3 className="title">
                Mitra Terpercaya Anda untuk Layanan Kesehatan Homecare di Bali,
                Jakarta, Surabaya & Bandung
              </h3>
              <p className="desc fw-semibold" style={{ color: "#FAFF03" }}>
                Kami memberikan perawatan kesehatan personal ke rumah Anda
                melalui para profesional berpengalaman kami.
              </p>
              <a href="#book" className="btn btn-warning">
                Pesan
              </a>
            </div>
          </div>
        </div>

        <section className="service">
          <div className="container">
            <h3 className="title-section"> Layanan Kami </h3>
            <div className="row g-3">
              <div className="col-4">
                <Link href="/doctor-home-visit" className="box-service">
                  <i className="icon-menu-doctor-home"></i>
                  <span className="title-service">
                    {" "}
                    Kunjungan Dokter ke Rumah{" "}
                  </span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/home-nursing" className="box-service">
                  <i className="icon-menu-home-nursing"></i>
                  <span className="title-service">
                    {" "}
                    Perawatan di Rumah & Perawatan Luka{" "}
                  </span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/remote-telemedicine" className="box-service">
                  <i className="icon-menu-remote-telemedicine"></i>
                  <span className="title-service"> Telemedis Jarak Jauh </span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/holistic-alternative" className="box-service">
                  <i className="icon-menu-holistic"></i>
                  <span className="title-service">
                    {" "}
                    Terapi Alternatif Holistik{" "}
                  </span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/inhome-therapy" className="box-service">
                  <i className="icon-menu-in-home-iv"></i>
                  <span className="title-service">
                    {" "}
                    Terapi IV di Rumah & Lainnya{" "}
                  </span>
                </Link>
              </div>
              <div className="col-4">
                <Link href="/alternative-telemedicine" className="box-service">
                  <i className="icon-menu-alternative-telemedicine"></i>
                  <span className="title-service"> Layanan Alternatif </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="why">
          <div className="container">
            <div className="text">
              <h3>Mengapa Memilih Kami?</h3>
              <div className="list-why">
                <div className="items-why">
                  <span>Sudah menangani 5000 pasien lebih di tahun 2023</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="assets/img/Protect.png"
                    className="img-list"
                    alt=""
                  />
                  <span>Layanan yang mudah, aman, dan nyaman</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="assets/img/Diploma.png"
                    className="img-list"
                    alt=""
                  />
                  <span>
                    Didukung oleh tenaga kesehatan bersertifikat dan terlatih
                  </span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="assets/img/Last 24 Hours.png"
                    className="img-list"
                    alt=""
                  />
                  <span>Layanan 24 jam</span>
                </div>
              </div>
              <div className="list-why">
                <div className="items-why">
                  <img
                    src="assets/img/Globe Network.png"
                    className="img-list"
                    alt=""
                  />
                  <span>Cakupan yang luas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="doctor">
          <div className="container">
            <h3 className="title-section"> Dokter Kami </h3>
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
                        <p>Dokter Bedah</p>
                        <span>STR: 3121101422105406</span>
                        <hr />
                        <div className="text-start">
                          <p>
                            Lokasi Praktik{" "}
                            <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                          </p>
                          <ul className="ps-3">
                            <li>RS Mayapada</li>
                            <li>RS Eka</li>
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
                        <p>Dokter Anak</p>
                        <span>STR: 3321201323154360</span>
                        <hr />
                        <div className="text-start">
                          <p>
                            Lokasi Praktik{" "}
                            <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                          </p>
                          <ul className="ps-3">
                            <li>RS Islam Aysha</li>
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
                        <p>Dokter Estetika</p>
                        <span>STR: 3121100220145699</span>
                        <hr />
                        <div className="text-start">
                          <p>
                            Lokasi Praktik{" "}
                            <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                          </p>
                          <ul className="ps-3">
                            <li>Klinik Cepat Sehat</li>
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
                        <p>Dokter Umum</p>
                        <span>STR: 3121100220145544</span>
                        <hr />
                        <div className="text-start">
                          <p>
                            Lokasi Praktik{" "}
                            <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                          </p>
                          <ul className="ps-3">
                            <li>Klinik Cepat Sehat</li>
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
                        <p>Dokter Umum</p>
                        <span>STR: 3111100321119174</span>
                        <hr />
                        <div className="text-start">
                          <p>
                            Lokasi Praktik{" "}
                            <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                          </p>
                          <ul className="ps-3">
                            <li>Klinik Cepat Sehat</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="items-doctor">
                      <div className="img-doctor">
                        <img
                          src="assets/img/doctor/dr-melchisedek-a.png"
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <h5>dr. Melchisedek A.V.P Marbun</h5>
                        <p>Dokter Umum</p>
                        <span>STR: 3111100220155405</span>
                        <hr />
                        <div className="text-start">
                          <p>
                            Lokasi Praktik{" "}
                            <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                          </p>
                          <ul className="ps-3">
                            <li>Klinik Cepat Sehat</li>
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
            <h3 className="title-section"> Perawat Kami </h3>
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
                        <img
                          src="assets/img/doctor/nurse-marsiani.png"
                          alt=""
                        />
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
            <h3 className="title-section text-white">Artikel</h3>
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
                      Articles.sort((a, b) => b.Id - a.Id).map(
                        (item, index) => (
                          <SwiperSlide key={index}>
                            <Link href={`/article?id=${index}`}>
                              <div className="card-slide-article">
                                <img
                                  src={`/assets/img/article/article0${item.Id}.jpg`}
                                  alt=""
                                />
                                <div className="name-article">
                                  <h6>{CutText(item.Title)}...</h6>
                                  <p>{CutText(item.DescCard)}...</p>
                                  <a
                                    href="article-detail.html"
                                    className="text-muted fs-14"
                                  >
                                    read more{" "}
                                    <i className="mdi mdi-arrow-right"></i>
                                  </a>
                                  <p className="text-end text-capitalize">
                                    {item.created_at}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        )
                      )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> Pesan kunjungan sekarang </h3>
            <div className="row mb-3 g-3">
              <div className="col-md-4">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Alamat</label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  placeholder="Alamat Anda"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Layanan</label>
                <select
                  id="service"
                  className="form-select form-control"
                  aria-label="Default select example"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Select Service" selected>
                    Pilih Layanan
                  </option>
                  <option value="Kunjungan Dokter ke Rumah">
                    {" "}
                    Kunjungan Dokter ke Rumah
                  </option>
                  <option value="Perawatan di Rumah dan Perawatan Luka">
                    {" "}
                    Perawatan di Rumah dan Perawatan Luka
                  </option>
                  <option value="Telemedis Jarak Jauh">
                    Telemedis Jarak Jauh
                  </option>
                  <option value="Terapi Alternatif Holistik">
                    Terapi Alternatif Holistik
                  </option>
                  <option value="Terapi IV di Rumah & Lainnya">
                    Terapi IV di Rumah & Lainnya
                  </option>
                  <option value="Layanan Alternatif">Layanan Alternatif</option>
                </select>
              </div>
            </div>
            <div className="row g-3 justify-content-center align-items-stretch">
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
                  onClick={redirectTele}
                  className="btn btn-telegram w-100"
                >
                  <i className="fa-brands fa-telegram fs-18 me-2"></i>
                  Telegram
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeId;
