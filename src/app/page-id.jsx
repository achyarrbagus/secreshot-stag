"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Helper from "../../lib/helper/helper";
import CardArticleSlide from "./components/card-article-slide";
import DoctorCard from "./components/card-doctor";
import NurseCard from "./components/card-nurse";
import useSWR from "swr";
import axios from "axios";
import HeroBanner from "./components/hero-banner";
import Image from "next/image";
const fetcher = (url) => axios.get(url).then((res) => res.data.data);
const HomeId = () => {
  const { data: articles, error: articlesError } = useSWR(
    `https://api.cepatsehat.com/api/v2/articles?locale=id`,
    fetcher
  );

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    service: "Select Service",
  });

  const handleChange = (e) => {
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
        <HeroBanner
          title={
            "Mitra Terpercaya Anda untuk Layanan Kesehatan Homecare di Bali, Jakarta, Surabaya & Bandung"
          }
          desc={
            " Kami memberikan perawatan kesehatan personal ke rumah Anda melalui para profesional berpengalaman kami"
          }
        />

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
                  <DoctorCard
                    image={`assets/img/doctor/dr-dewi-f.png`}
                    name="dr. Dewi Fransiska, Sp.B"
                    job="Dokter Bedah"
                    str="3121101422105406"
                    practiceLocation={["RS Mayapada", "RS Eka"]}
                    lang="id"
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-dwi-s.png`}
                    name="dr. Dwi Suryaning Ayu Aprilizia, Sp.A"
                    job="Dokter Anak"
                    str="3321201323154360"
                    lang="id"
                    practiceLocation={["RS Islam Aysha"]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-ayu-a.png`}
                    name="dr. Ayu A. Istiana"
                    job="Dokter Estetika"
                    str="3121100220145699"
                    lang="id"
                    practiceLocation={["Klinik Cepat Sehat"]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-ernita-r.png`}
                    name="dr. Ernita Rosyanti Dewi"
                    job="Dokter Umum"
                    lang="id"
                    str="3121100220145544"
                    practiceLocation={["Klinik Cepat Sehat"]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-irvan-r.png`}
                    name="dr. Irvan Rizki Fitri"
                    job="Dokter Umum"
                    str="3111100321119174"
                    practiceLocation={["Klinik Cepat Sehat"]}
                  />
                  <DoctorCard
                    image={`assets/img/doctor/dr-melchisedek-a.png`}
                    name="dr. Melchisedek A.V.P Marbun"
                    job="Dokter Umum"
                    str="3111100220155405"
                    practiceLocation={["Klinik Cepat Sehat"]}
                  />
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
                  <NurseCard
                    name="Siti Rahma Derlauw"
                    str="3101522234737239"
                    isnurse={true}
                    image="assets/img/doctor/nurse-siti.png"
                  />
                  <NurseCard
                    name="Loisa Lakamai"
                    str="1701721213519681"
                    isnurse={true}
                    image="assets/img/doctor/nurse-loisa.png"
                  />
                  <NurseCard
                    name="Syarah Azzarah"
                    str="2601521224246624"
                    isnurse={true}
                    image="assets/img/doctor/nurse-syarah.png"
                  />
                  <NurseCard
                    name="Andi Andriansyah S."
                    str="1201512214112821"
                    isnurse={true}
                    image="assets/img/doctor/nurse-andi.png"
                  />
                  <NurseCard
                    name="Marsiani Talo"
                    str=" 190172122-4444051"
                    isnurse={true}
                    image="assets/img/doctor/nurse-marsiani.png"
                  />
                  <NurseCard
                    name="Irfan Mustofa"
                    str="1401511224517960"
                    isnurse={true}
                    image="assets/img/doctor/nurse-irfan.png"
                  />
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
                    {articles &&
                      articles.map((item, index) => (
                        <SwiperSlide key={item.id}>
                          <Link
                            href={`/article?id=${item.article_id_v2}&locale=${item.locale}`}
                            scroll={true}
                          >
                            <div className="card-slide-article">
                              <CardArticleSlide item={item} path={item.image} />
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))}
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

// {Articles &&
//   Articles.sort((a, b) => b.Id - a.Id).map(
//     (item, index) => (
//       <SwiperSlide key={item.Id}>
//         <Link href={`/article?id=${item.Id - 1}`}>
//           <div className="card-slide-article">
//             <img src={item.PathImg} alt="" />
//             <div className="name-article">
//               <h6>{CutText(item.Title)}...</h6>
//               <p>{CutText(item.DescCard)}...</p>
//               <a
//                 href="article-detail.html"
//                 className="text-muted fs-14"
//               >
//                 read more{" "}
//                 <i className="mdi mdi-arrow-right"></i>
//               </a>
//               <p className="text-end text-capitalize">
//                 {item.created_at}
//               </p>
//             </div>
//           </div>
//         </Link>
//       </SwiperSlide>
//     )
//   )}

export default HomeId;
