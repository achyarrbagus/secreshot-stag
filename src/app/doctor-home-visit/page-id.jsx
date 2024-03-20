"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Helper from "../../../lib/helper/helper";

const DoctorHomeVisitId = () => {
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
    helper.RedirectToWa(formData, lang, true);
  };
  const redirectTele = () => {
    const helper = new Helper();
    helper.redirectTele();
  };

  const [book, setBook] = useState("Pesan kunjungan sekarang");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Kunjungan Dokter ke Rumah":
        setBook("Pesan kunjungan dokter sekarang");
        break;
      case "Kunjungan Perawat ke Rumah":
        setBook("Pesan kunjungan perawat sekarang");
        break;
      case "Vaksinasi anak":
        window.location.href = "https://www.vaksindirumah.cepatsehat.com/";
        setBook("Pesan vaksin anak sekarang");
        break;
      case "Pemeriksaan Kesehatan":
        setBook("Pesan pemeriksaan kesehatan sekarang");
        break;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      service: serviceSelect,
    }));
    window.location.href = "#book";
  };

  return (
    <>
      <div className="content">
        <section
          className="banner-pages"
          style={{ backgroundImage: "url('assets/img/bg-home-visit.png')" }}
        >
          <div className="container">
            <div className="text">
              <h3>Kunjungan Dokter ke Rumah</h3>
              <p>
                Rasakan kemudahan konsultasi dengan dokter langsung di rumah
                Anda. Dengan jaminan klinik.
              </p>
              <a href="#book" className="btn btn-warning fs-14">
                Pesan
              </a>
            </div>
          </div>
        </section>

        <section className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                Keutamaan kunjungan dokter ke rumah anda meliputi :
              </h3>
            </div>

            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-homevisit01 me-2 fs-32"></i>{" "}
                  Kunjungan Dokter ke Rumah
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="assets/img/homevisit/img-sub-homevisit01.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>
                          Kunjungan dokter ke rumah menghadirkan fasilitas
                          perawatan medis ke rumah anda, memungkinkan pasien
                          menerima pemeriksaan, diagnosis, resep, dan menerima
                          konsultasi dalam kenyamanan rumah mereka sendiri.
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Kenyamanan</h6>
                            <span>
                              Layanan kesehatan dikirimkan ke rumah Anda untuk
                              menghemat waktu dan kemudahan.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Pribadi</h6>
                            <span>
                              Rencana perawatan yang disesuaikan dengan
                              mempertimbangkan lingkungan rumah dan gaya hidup.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Intervensi Tepat Waktu</h6>
                            <span>
                              Deteksi dini dan tindakan untuk mencegah
                              komplikasi.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Hubungan </h6>
                            <span>
                              Kunjungan ke rumah menumbuhkan komunikasi dan
                              kepercayaan yang lebih baik.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Aksesibilitas </h6>
                            <span>
                              Akses mudah bagi kelompok rentan seperti lansia
                              dan mereka yang memiliki masalah mobilitas.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp250.000
                          </div>
                          <div
                            onClick={() =>
                              handleBook("Kunjungan Dokter ke Rumah")
                            }
                            id="doctor-visit"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="2">
                <Accordion.Header>
                  <i className="icon-menu-icon-homevisit02 me-2 fs-32"></i>{" "}
                  Kunjungan Perawat ke Rumah
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="assets/img/homevisit/img-sub-homevisit02.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>
                          Kunjungan Perawat ke rumah menawarkan layanan yang
                          dipersonalisasi ke rumah seperti pengecekan,
                          perawatan, dan penyuluhan kesehatan.
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan</span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Kenyamanan</h6>
                            <span>
                              Layanan kesehatan dikirimkan ke rumah Anda untuk
                              menghemat waktu dan kemudahan.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Pribadi</h6>
                            <span>
                              Rencana perawatan yang disesuaikan dengan
                              mempertimbangkan lingkungan rumah dan gaya hidup.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Intervensi Tepat Waktu </h6>
                            <span>
                              Deteksi dini dan tindakan untuk mencegah
                              komplikasi.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Peningkatan Hubungan </h6>
                            <span>
                              Kunjungan ke rumah menumbuhkan komunikasi dan
                              kepercayaan yang lebih baik.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Aksesibilitas </h6>
                            <span>
                              Akses mudah bagi kelompok rentan seperti lansia
                              dan mereka yang memiliki masalah mobilitas.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp200.000
                          </div>
                          <div
                            onClick={() =>
                              handleBook("Kunjungan Perawat ke Rumah")
                            }
                            id="nurse-visit"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="3">
                <Accordion.Header>
                  {" "}
                  <i className="icon-menu-icon-homevisit03 me-2 fs-32"></i>{" "}
                  Vaksinasi anak
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="assets/img/homevisit/img-sub-homevisit03.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>
                          Vaksinasi Anak adalah pemberian vaksin untuk
                          melindungi anak dari penyakit seperti campak,
                          gondongan, rubella, dan polio.
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Perlindungan Kesehatan</h6>
                            <span>
                              Vaksin melindungi anak-anak dari penyakit serius.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Pertahanan Nasional </h6>
                            <span>
                              Vaksinasi membantu mencegah penyebaran penyakit di
                              masyarakat.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Hemat Biaya Kesehatan</h6>
                            <span>
                              Vaksinasi menghemat biaya pengobatan dengan
                              mencegah penyakit parah.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Akses Sekolah </h6>
                            <span>
                              Vaksinasi yang diwajibkan menjamin akses terhadap
                              pendidikan di lingkungan yang lebih aman.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Kesehatan Global </h6>
                            <span>
                              Program vaksinasi berkontribusi pada upaya global
                              melawan penyakit menular.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp300.000
                          </div>
                          <div
                            onClick={() => handleBook("Vaksinasi anak")}
                            id="child"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion-item col-md-6" eventKey="4">
                <Accordion.Header>
                  {" "}
                  <i className="icon-menu-icon-homevisit04 me-2 fs-32"></i>{" "}
                  Pemeriksaan Kesehatan
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="assets/img/homevisit/img-sub-homevisit04.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>
                          Pemeriksaan kesehatan adalah pertemuan rutin dengan
                          ahli kesehatan untuk menilai kesehatan secara
                          keseluruhan melalui pengukuran tanda vital,
                          pemeriksaan fisik, dan jika perlu, pemeriksaan atau
                          tes tambahan.
                        </p>
                        <h6 className="title-line">
                          <span>Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Tes Kadar Glukosa Darah</h6>
                            <span>
                              Periksa kadar gula darah untuk mendiagnosis dan
                              mengelola diabetes dan hipoglikemia.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Tes Kolesterol</h6>
                            <span>
                              Menilai kadar LDL, HDL, dan trigliserida untuk
                              mengukur risiko kardiovaskular.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Tes Asam Urat </h6>
                            <span>
                              Mengukur kadar asam urat untuk evaluasi fungsi
                              ginjal dan mendiagnosis kondisi seperti asam urat.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Pengukuran Tekanan Darah </h6>
                            <span>
                              Pengukuran Tekanan Darah Evaluasi tekanan darah
                              arteri sebagai indikator penting kesehatan
                              kardiovaskular.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Tes Kadar Zat Besi </h6>
                            <span>
                              Mengukur jumlah zat besi dalam darah dan
                              mendiagnosis kondisi seperti anemia.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp150.000
                          </div>
                          <div
                            onClick={() => handleBook("Pemeriksaan Kesehatan")}
                            id="medical"
                            className="btn btn-warning fs-14 ms-auto"
                          >
                            Pesan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section">{book}</h3>
            <div>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nama anda"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Alamat</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Alamat anda"
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
                    <option>Pilih Layanan</option>
                    <option value="Kunjungan Dokter ke Rumah">
                      Kunjungan Dokter ke Rumah
                    </option>
                    <option value="Kunjungan Perawat ke Rumah">
                      Kunjungan Perawat ke Rumah
                    </option>
                    <option value="Vaksinasi anak">Vaksinasi anak</option>
                    <option value="Pemeriksaan Kesehatan">
                      Pemeriksaan Kesehatan
                    </option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <button
                    onClick={redirectWa}
                    className="btn btn-whatsapp w-100"
                  >
                    <i className="mdi mdi-whatsapp fs-18 me-2"></i> Whatsapp
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button
                    onClick={redirectTele}
                    className="btn btn-telegram w-100"
                  >
                    <i className="fa-brands fa-telegram fs-18 me-2"></i>{" "}
                    Telegram
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="doctor">
          <div className="container">
            <h3 className="title-section"> Dokter Kami</h3>
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
                            Lokasi Praktik
                            <i className="mdi mdi-map-marker fs-18 ms-2"></i>
                          </p>
                          <ul className="ps-3">
                            <li>RS Mayapada </li>
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
            <h3 className="title-section"> Perawat Kami</h3>
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
                        <img src="assets/img/doctor/nurse-andi.png" alt=" " />
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
                  <div className="col-6 col-md-3">
                    <div className="items-doctor">
                      <div className="img-doctor">
                        <img src="assets/img/doctor/nurse-dimas.png" alt="" />
                      </div>
                      <div className="name">
                        <h5>Dimas Catur Nugroho</h5>
                        <span>STR: ED00000360053713</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DoctorHomeVisitId;
