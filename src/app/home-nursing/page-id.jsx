"use client";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const HomeNursingId = () => {
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
    const helper = new Helper();
    helper.RedirectToTele(formData);
  };

  const [book, setBook] = useState("Pesan kunjungan sekarang");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Perawatan luka":
        setBook("Pesan perawatan luka sekarang");
        break;
      case "Pemantauan & Pencegahan":
        setBook("Pesan pemantauan dan pencegahan sekarang");
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
          style={{ backgroundImage: "url('assets/img/bg-home-nursing.png')" }}
        >
          <div className="container">
            <div className="text">
              <h3>Perawatan di Rumah & Perawatan Luka</h3>
              <p>
                Dapatkan layanan keperawatan dan perawatan luka terbaik dalam
                kenyamanan hunian Anda, mulai dari dukungan pemulihan hingga
                manajemen kondisi kronis.
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
                Layanan perawatan rumah & perawatan luka kami meliputi :
              </h3>
            </div>
            <Accordion className="accordion accordion-custom row">
              <Accordion.Item className="accordion-item col-md-6" eventKey="1">
                <Accordion.Header>
                  <i className="icon-menu-icon-nursing me-2 fs-32"></i>
                  Perawatan luka
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="assets/img/home-nursing/img-home-nursing-sub01.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>
                          Layanan kesehatan komprehensif yang mencakup ahli
                          perawatan luka dan ostomi, metode pembalutan luka
                          canggih, operasi kecil yang tepat, dan perawatan pasca
                          bedah menyeluruh untuk pemulihan optimal.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Luka dan Ostomi</h6>
                            <span>
                              Perawatan khusus untuk penyembuhan lebih cepat,
                              pencegahan komplikasi, dan peningkatan kondisi
                              pasien.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              Pembalutan Luka Tingkat Lanjut
                            </h6>
                            <span>
                              Mempercepat penyembuhan, mengurangi risiko
                              infeksi, dan memberikan kondisi optimal untuk
                              pemulihan jaringan.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Operasi Kecil</h6>
                            <span>
                              Perawatan yang efisien dan tepat, meminimalkan
                              pasca-trauma dan memastikan pemulihan yang cepat.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Pasca Bedah</h6>
                            <span>
                              Perawatan komprehensif untuk manajemen nyeri,
                              pencegahan infeksi, dan mendorong proses pemulihan
                              yang lebih cepat.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp250.000
                          </div>
                          <div
                            onClick={() => handleBook("Perawatan luka")}
                            id="wound"
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
                  <i className="icon-menu-icon-nursing-2 me-2 fs-32"></i>{" "}
                  Pemantauan & Pencegahan
                </Accordion.Header>
                <Accordion.Body>
                  <div className="list-data-faq">
                    <div className="row gy-3">
                      <div className="col-12">
                        <img
                          src="assets/img/home-nursing/img-home-nursing-sub01.png"
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12">
                        <p>
                          Layanan kesehatan komprehensif yang mencakup ahli
                          perawatan luka dan ostomi, metode pembalutan luka
                          canggih, operasi kecil yang tepat, dan perawatan pasca
                          bedah menyeluruh untuk pemulihan optimal.
                        </p>
                        <h6 className="title-line">
                          <span> Keuntungan </span>
                        </h6>
                        <ul className="ps-3">
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Luka dan Ostomi</h6>
                            <span>
                              Perawatan khusus untuk penyembuhan lebih cepat,
                              pencegahan komplikasi, dan peningkatan kondisi
                              pasien.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">
                              Pembalutan Luka Tingkat Lanjut
                            </h6>
                            <span>
                              Mempercepat penyembuhan, mengurangi risiko
                              infeksi, dan memberikan kondisi optimal untuk
                              pemulihan jaringan.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Operasi Kecil</h6>
                            <span>
                              Perawatan yang efisien dan tepat, meminimalkan
                              pasca-trauma dan memastikan pemulihan yang cepat.
                            </span>
                          </li>
                          <li className="mb-2">
                            <h6 className="mb-1">Perawatan Pasca Bedah</h6>
                            <span>
                              Perawatan komprehensif untuk manajemen nyeri,
                              pencegahan infeksi, dan mendorong proses pemulihan
                              yang lebih cepat.
                            </span>
                          </li>
                        </ul>
                        <div className="price">
                          <div className="value-price">
                            <b>Mulai dari:</b> Rp250.000
                          </div>
                          <div
                            onClick={() => handleBook("Perawatan luka")}
                            id="wound"
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
                    placeholder="Nama Anda"
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
                    placeholder="Your service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Pilih Layanan</option>
                    <option value="Perawatan luka">Perawatan luka</option>
                    <option value="Pemantauan & Pencegahan">
                      Pemantauan & Pencegahan
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
                        <img src="assets/img/doctor/nurse-andi.png" alt=" " />
                      </div>
                      <div className="name">
                        <h5>Andi Andriansyah S.</h5>
                        <span>STR: HA00000870437934</span>
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
      </div>
    </>
  );
};

export default HomeNursingId;
