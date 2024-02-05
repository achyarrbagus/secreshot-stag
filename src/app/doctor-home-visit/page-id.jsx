"use client";
import { useState } from "react";

const DoctorHomeVisitId = () => {
  const redirectWa = (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const address = document.getElementById("address");

    const service = document.getElementById("service");
    console.log(service?.value);
    console.log(name?.value);
    console.log(address?.value);
    if (name?.value && address?.value && service?.value) {
      const wardingWa = encodeURIComponent(`
Hallo CepatSehat.com by Klinik Cepat Sehat, saya ingin konsultasi

Nama : ${name.value}
Alamat : ${address.value} 
Layanan : ${service.value}`);

      let url = `https://api.whatsapp.com/send/?phone=6282211189009&text=${wardingWa}&type=phone_number&app_absent=0`;
      window.location.href = url;

      return;
    } else {
      alert("please fill form with correctly");
    }
  };
  const redirectTele = () => {
    window.location.href = "https://t.me/InfusionJakarta";
  };

  const [service, setService] = useState();

  const handleBook = (serviceSelect) => {
    let serviceOption = document.getElementById("service");
    serviceOption.value = serviceSelect;
    window.location.href = "#book";
  };

  return (
    <>
      <div className="content">
        <section className="banner-pages" style={{ backgroundImage: "url('assets/img/bg-home-visit.png')" }}>
          <div className="container">
            <div className="text">
              <h3>Kunjungan Dokter ke Rumah</h3>
              <p>Rasakan kemudahan konsultasi dengan dokter langsung di rumah Anda. Dengan jaminan klinik.</p>
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
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">Keutamaan kunjungan dokter ke rumah anda meliputi :</h3>
            </div>
            <div className="accordion accordion-custom row" id="accordionExample">
              <div className="accordion-item col-md-6">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i className="icon-menu-icon-homevisit01 me-2 fs-32"></i> Kunjungan Dokter ke Rumah
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/homevisit/img-sub-homevisit01.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Kunjungan dokter ke rumah menghadirkan fasilitas perawatan medis ke rumah anda, memungkinkan pasien
                            menerima pemeriksaan, diagnosis, resep, dan menerima konsultasi dalam kenyamanan rumah mereka sendiri.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Kenyamanan</h6>
                              <span>Layanan kesehatan dikirimkan ke rumah Anda untuk menghemat waktu dan kemudahan.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Perawatan Pribadi</h6>
                              <span>
                                Rencana perawatan yang disesuaikan dengan mempertimbangkan lingkungan rumah dan gaya hidup.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Intervensi Tepat Waktu</h6>
                              <span>Deteksi dini dan tindakan untuk mencegah komplikasi.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Peningkatan Hubungan </h6>
                              <span>Kunjungan ke rumah menumbuhkan komunikasi dan kepercayaan yang lebih baik.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Aksesibilitas </h6>
                              <span>
                                Akses mudah bagi kelompok rentan seperti lansia dan mereka yang memiliki masalah mobilitas.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp250.000
                            </div>
                            <div
                              onClick={() => handleBook("Kunjungan Dokter ke Rumah")}
                              id="doctor-visit"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item col-md-6">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <i className="icon-menu-icon-homevisit02 me-2 fs-32"></i> Kunjungan Perawat ke Rumah
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/homevisit/img-sub-homevisit02.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Kunjungan Perawat ke rumah menawarkan layanan yang dipersonalisasi ke rumah seperti pengecekan,
                            perawatan, dan penyuluhan kesehatan.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Kenyamanan</h6>
                              <span>Layanan kesehatan dikirimkan ke rumah Anda untuk menghemat waktu dan kemudahan.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Perawatan Pribadi</h6>
                              <span>
                                Rencana perawatan yang disesuaikan dengan mempertimbangkan lingkungan rumah dan gaya hidup.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Intervensi Tepat Waktu </h6>
                              <span>Deteksi dini dan tindakan untuk mencegah komplikasi.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Peningkatan Hubungan </h6>
                              <span>Kunjungan ke rumah menumbuhkan komunikasi dan kepercayaan yang lebih baik.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Aksesibilitas </h6>
                              <span>
                                Akses mudah bagi kelompok rentan seperti lansia dan mereka yang memiliki masalah mobilitas.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp200.000
                            </div>
                            <div
                              onClick={() => handleBook("Kunjungan Perawat ke Rumah")}
                              id="nurse-visit"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item col-md-6">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    <i className="icon-menu-icon-homevisit03 me-2 fs-32"></i>Vaksinasi anak
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/homevisit/img-sub-homevisit03.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Vaksinasi Anak adalah pemberian vaksin untuk melindungi anak dari penyakit seperti campak, gondongan,
                            rubella, dan polio.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan </span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Perlindungan Kesehatan</h6>
                              <span>Vaksin melindungi anak-anak dari penyakit serius.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Pertahanan Nasional </h6>
                              <span>Vaksinasi membantu mencegah penyebaran penyakit di masyarakat.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Hemat Biaya Kesehatan</h6>
                              <span>Vaksinasi menghemat biaya pengobatan dengan mencegah penyakit parah.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Akses Sekolah </h6>
                              <span>
                                Vaksinasi yang diwajibkan menjamin akses terhadap pendidikan di lingkungan yang lebih aman.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Kesehatan Global </h6>
                              <span>Program vaksinasi berkontribusi pada upaya global melawan penyakit menular.</span>
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
                  </div>
                </div>
              </div>
              <div className="accordion-item col-md-6">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    <i className="icon-menu-icon-homevisit04 me-2 fs-32"></i> Pemeriksaan Kesehatan
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/homevisit/img-sub-homevisit04.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Pemeriksaan kesehatan adalah pertemuan rutin dengan ahli kesehatan untuk menilai kesehatan secara
                            keseluruhan melalui pengukuran tanda vital, pemeriksaan fisik, dan jika perlu, pemeriksaan atau tes
                            tambahan.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan </span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Tes Kadar Glukosa Darah</h6>
                              <span>Periksa kadar gula darah untuk mendiagnosis dan mengelola diabetes dan hipoglikemia.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Tes Kolesterol</h6>
                              <span>Menilai kadar LDL, HDL, dan trigliserida untuk mengukur risiko kardiovaskular.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Tes Asam Urat </h6>
                              <span>
                                Mengukur kadar asam urat untuk evaluasi fungsi ginjal dan mendiagnosis kondisi seperti asam urat.
                                *Pengukuran Tekanan Darah Evaluasi tekanan darah arteri sebagai indikator penting kesehatan
                                kardiovaskular.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Pengukuran Tekanan Darah </h6>
                              <span>
                                Pengukuran Tekanan Darah Evaluasi tekanan darah arteri sebagai indikator penting kesehatan
                                kardiovaskular.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Tes Kadar Zat Besi </h6>
                              <span>Mengukur jumlah zat besi dalam darah dan mendiagnosis kondisi seperti anemia.</span>
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
                              Pesan{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section">Pesan </h3>
            <div>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Nama</label>
                  <input type="text" className="form-control" id="name" placeholder="Nama anda" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Alamat</label>
                  <input type="text" className="form-control" id="address" placeholder="Alamat anda" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Layanan</label>
                  <select id="service" className="form-select form-control" aria-label="Default select example">
                    <option>Pilih Layanan</option>
                    <option value="Kunjungan Dokter ke Rumah">Kunjungan Dokter ke Rumah</option>
                    <option value="Kunjungan Perawat ke Rumah">Kunjungan Perawat ke Rumah</option>
                    <option value="Vaksinasi anak">Vaksinasi anak</option>
                    <option value="Pemeriksaan Kesehatan">Pemeriksaan Kesehatan</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <button onClick={redirectWa} className="btn btn-whatsapp w-100">
                    <i className="mdi mdi-whatsapp fs-18 me-2"></i> Whatsapp
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button onClick={redirectTele} className="btn btn-telegram w-100">
                    <i className="fa-brands fa-telegram fs-18 me-2"></i> Telegram
                  </button>
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
