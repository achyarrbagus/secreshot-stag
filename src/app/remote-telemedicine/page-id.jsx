"use client";

import { useSelector } from "react-redux";

const RemoteTelemedicId = () => {
  const redirectWa = (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const address = document.getElementById("address");

    const service = document.getElementById("service");
    if (name?.value && address?.value && service?.value) {
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

  const redirectTele = () => {
    window.location.replace("https://t.me/InfusionJakarta");
  };

  const handleBook = (serviceSelect) => {
    let serviceOption = document.getElementById("service");
    serviceOption.value = serviceSelect;
    window.location.href = "#book";
  };

  return (
    <>
      <div className="content">
        <section className="banner-pages" style={{ backgroundImage: "url('assets/img/bg-remote.png')" }}>
          <div className="container">
            <div className="text">
              <h3>Telemedis jarak jauh</h3>
              <p>Akses konsultasi medis tanpa melangkah keluar, melalui platform online komprehensif kami.</p>
              <a href="#book" className="btn btn-warning fs-14">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </section>

        <section className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">Layanan telemedicine jarak jauh kami meliputi:</h3>
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
                    <i className="icon-menu-icon-remotetelemedicine01 me-2 fs-32"></i> Konsultasi Online Dokter Umum
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/remote-telemedicine/img-sub-remotetelemedicine01.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Akses perawatan kesehatan melalui konsultasi online yang nyaman, diagnosis, perawatan, dan tindak
                            lanjut secara fleksibel dari rumah Anda sendiri.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Kenyamanan</h6>
                              <span>
                                Memungkinkan pasien untuk berkonsultasi dengan profesional kesehatan dari rumah mereka sendiri,
                                menghemat waktu dan perjalanan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Aksesibilitas</h6>
                              <span>
                                Memberikan akses saran dan resep medis untuk penyakit umum tanpa perlu kunjungan langsung.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Perawatan Tepat Waktu</h6>
                              <span>
                                Memungkinkan konsultasi cepat untuk penyakit ringan atau masalah kesehatan tanpa menunggu janji
                                temu.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Hemat Biaya</h6>
                              <span>
                                Memungkinkan lebih hemat biaya dibandingkan dengan kunjungan langsung, mempertimbangkan biaya
                                perjalanan dan waktu.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Bimbingan Preventif</h6>
                              <span>
                                Menawarkan cara yang nyaman untuk membahas perawatan preventif, gaya hidup, dan nasihat kesehatan
                                umum dengan profesional kesehatan.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp20.000
                            </div>
                            <div
                              onClick={() => handleBook("General Practitioner Online Consultation")}
                              id="general"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan Sekarang{" "}
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
                    <i className="icon-menu-icon-remotetelemedicine02 me-2 fs-32"></i> Medical Doctor Online Consultation
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/remote-telemedicine/img-sub-remotetelemedicine02.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Connect with specialized medical expertise remotely, eliminating the need for physical travel through
                            our online platform
                          </p>
                          <h6 className="title-line">
                            <span>Benefit</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Pediatrician</h6>
                              <span>
                                consult with doctor specializing in the medical care of infants, children, and adolescents,
                                focusing on their physical, emotional, and behavioral well-being.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Surgeon</h6>
                              <span>
                                consult with medical professional skilled in performing surgical procedures, addressing a wide
                                range of conditions through operative techniques.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Aesthetic Doctor</h6>
                              <span>
                                consult with medical practitioner with expertise in aesthetic or cosmetic medicine, knowing about
                                non-surgical procedures to enhance a person's appearance.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp40.000
                            </div>

                            <div
                              onClick={() => handleBook("Medical Doctor Online Consultation")}
                              id="medical"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan Sekarang{" "}
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
                    <i className="icon-menu-icon-remotetelemedicine03 me-2 fs-32"></i> Online Medical Prescription
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/remote-telemedicine/img-sub-remotetelemedicine03.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Online medical prescriptions enable patients to receive medications remotely through virtual
                            consultations.
                          </p>
                          <h6 className="title-line">
                            <span>Benefit</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Convenience</h6>
                              <span>
                                Enables patients to receive prescriptions without visiting a physical clinic, saving time and
                                effort.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Accessibility</h6>
                              <span>
                                Improves access to necessary medications for individuals in remote areas or with limited mobility.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Time Efficiency</h6>
                              <span>Reduces the time spent on travel and waiting in queues at traditional pharmacies.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Privacy</h6>
                              <span>
                                Offers a discreet way for individuals to obtain prescription medications without face-to-face
                                interactions.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Continuity of Care</h6>
                              <span>
                                Supports ongoing and consistent management of chronic conditions through timely prescription
                                refills and adjustments.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp40.000
                            </div>

                            <div
                              onClick={() => handleBook("Online Medical Prescription")}
                              id="prescription"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan Sekarang{" "}
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
                    <i className="icon-menu-icon-remotetelemedicine04 me-2 fs-32"></i>Online Medical Certificate
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/remote-telemedicine/img-sub-remotetelemedicine04.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Online medical certificates enables individuals to consult with healthcare professionals remotely to
                            obtain the necessary certificates through digital platforms or websites.
                          </p>
                          <h6 className="title-line">
                            <span>Benefit</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Convenience</h6>
                              <span>
                                Allows individuals to obtain medical certificates from the comfort of their own homes, reducing
                                the need for in-person visits.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Time Savings</h6>
                              <span>
                                Streamlines the process, saving time compared to traditional methods of obtaining a medical
                                certificate.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Accessibility</h6>
                              <span>
                                Provides access to medical certificates for individuals in remote locations or those with limited
                                mobility.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Efficiency</h6>
                              <span>
                                Facilitates a quicker turnaround in obtaining necessary documentation for work or other purposes.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Reduced Exposure</h6>
                              <span>
                                Minimizes the risk of exposure to contagious illnesses by avoiding unnecessary visits to
                                healthcare facilities.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp75.000
                            </div>

                            <div
                              onClick={() => handleBook("Online Medical Certificate")}
                              id="certificate"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan Sekarang{" "}
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
            <h3 className="title-section"> Pesan Sekarang </h3>
            <div>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Your Address" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Service Name</label>
                  <select id="service" className="form-select form-control" aria-label="Default select example">
                    <option>Select Service</option>
                    <option value="General Practitioner Online Consultation">General Practitioner Online Consultation</option>
                    <option value="Medical Doctor Online Consultation">Medical Doctor Online Consultation</option>
                    <option value="Online Medical Prescription">Online Medical Prescription</option>
                    <option value="Online Medical Certificate">Online Medical Certificate</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
                <div className="col-6 col-md-3">
                  <button onClick={redirectWa} className="btn btn-whatsapp w-100">
                    <i className="mdi mdi-whatsapp fs-18 me-2"></i>
                    Whatsapp
                  </button>
                </div>
                <div className="col-6 col-md-3">
                  <button onClick={redirectTele} className="btn btn-telegram w-100">
                    <i className="fa-brands fa-telegram fs-18 me-2"></i>
                    Telegram
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

export default RemoteTelemedicId;
