"use client";

const InHomeDiagnosticId = () => {
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
    window.location.href = "https://t.me/InfusionJakarta";
  };

  const handleBook = (serviceSelect) => {
    let serviceOption = document.getElementById("service");
    serviceOption.value = serviceSelect;
    window.location.href = "#book";
  };

  return (
    <>
      <div className="content">
        <section className="banner-pages" style={{ backgroundImage: "url('assets/img/bg-home-diagnostic.png')" }}>
          <div className="container">
            <div className="text">
              <h3>Telemedis Alternatif</h3>
              <p>
                Pemutihan gigi untuk mempercantik penampilan, terapi sekretom untuk perawatan regeneratif, dan terapi ozon untuk
                meningkatkan sistem kekebalan tubuh.
              </p>
              <a href="#book" className="btn btn-warning fs-14">
                {" "}
                Pesan{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="faq pt-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src="assets/img/plus-vector.svg" width="30px" alt="" />
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">Layanan Telemedis Alternatif kami terdiri dari:</h3>
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
                    <i className="icon-menu-icon-alternative01 me-2 fs-32"></i> Pemutihan gigi
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/alternative/img-sub-alternative01.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>Tingkatkan kecerahan senyum Anda dengan layanan pemutihan gigi profesional kami.</p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Peningkatan Estetika</h6>
                              <span>
                                Meningkatkan penampilan gigi dengan mengurangi noda dan perubahan warna, sehingga menghasilkan
                                senyuman yang lebih cerah dan putih.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Meningkatkan Kepercayaan Diri</h6>
                              <span>
                                Gigi yang lebih putih sering kali berkontribusi pada peningkatan kepercayaan diri dan citra diri
                                yang positif.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Penampilan Awet Muda</h6>
                              <span>
                                Senyuman yang lebih cerah dikaitkan dengan penampilan yang lebih muda, karena perubahan warna gigi
                                bisa menjadi tanda penuaan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Peningkatan Kebersihan Mulut</h6>
                              <span>
                                Proses pemutihan gigi sering kali melibatkan pembersihan profesional, sehingga berkontribusi
                                terhadap peningkatan kebersihan mulut secara keseluruhan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Kesan Sosial Positif</h6>
                              <span>
                                Senyum cerah dapat meninggalkan kesan positif dalam situasi sosial dan profesional, menumbuhkan
                                rasa menarik dan ramah.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp889.000
                            </div>
                            <button
                              onClick={() => handleBook("Teeth Whitening")}
                              id="teeth"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan{" "}
                            </button>
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
                    <i className="icon-menu-icon-alternative02 me-2 fs-32"></i> Terapi Sekretom dan Stem Cells
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/alternative/img-sub-alternative02.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Rasakan manfaat peremajaan dari Secretome, terapi mutakhir yang memanfaatkan kekuatan protein
                            regeneratif.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Regenerasi Jaringan</h6>
                              <span>Mempromosikan perbaikan dan regenerasi jaringan yang rusak.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Antiinflamasi</h6>
                              <span>Menunjukkan sifat anti-inflamasi, membantu modulasi kekebalan tubuh.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Mempercepat Penyembuhan</h6>
                              <span>
                                Mempercepat proses penyembuhan alami dengan mendorong pertumbuhan sel dan remodeling jaringan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Perawatan Kondisi Degeneratif</h6>
                              <span>
                                Memiliki potensi untuk mengobati kondisi seperti osteoartritis dan penyakit neurodegeneratif.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Meminimalkan Respon Kekebalan Tubuh</h6>
                              <span>
                                Mengurangi risiko penolakan kekebalan tubuh, menjadikannya cocok untuk transplantasi dan terapi
                                regeneratif.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp2.499.000
                            </div>
                            <button
                              onClick={() => handleBook("Secretome and Stem Cells Therapy")}
                              id="secretome"
                              className="btn btn-warning fs-14 ms-auto"
                            >
                              Pesan{" "}
                            </button>
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
                    <i className="icon-menu-icon-alternative03 me-2 fs-32"></i> Terapi Ozon
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/alternative/img-sub-alternative03.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Manjakan diri Anda dalam khasiat penyembuhan terapi ozon. Temukan pendekatan holistik terhadap
                            kesehatan dengan terapi ozon.
                          </p>
                          <h6 className="title-line">
                            <span>Keuntungan</span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Peningkatan Oksigenasi</h6>
                              <span>
                                Dapat meningkatkan pengiriman oksigen ke jaringan, berpotensi meningkatkan tingkat energi.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Meningkatkan Sistem Kekebalan Tubuh</h6>
                              <span>
                                Diklaim merangsang sistem kekebalan tubuh untuk meningkatkan resistensi terhadap infeksi.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Efek Anti Inflamasi</h6>
                              <span> Memiliki sifat anti-inflamasi.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Dukungan Detoksifikasi</h6>
                              <span>Diadvokasi karena peran potensialnya dalam membantu detoksifikasi.</span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Sifat Antimikroba</h6>
                              <span> Memiliki efek antimikroba yang dapat membantu memerangi infeksi.</span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp3.125.000
                            </div>
                            <a onClick={() => handleBook("Ozone Therapy")} id="ozone" className="btn btn-warning fs-14 ms-auto">
                              Pesan{" "}
                            </a>
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
            <h3 className="title-section"> Pesan </h3>
            <div>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Nama</label>
                  <input type="text" className="form-control" id="name" placeholder="Nama Anda" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Alamat</label>
                  <input type="text" className="form-control" id="address" placeholder="Alamat Anda" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Nama Layanan</label>
                  <select id="service" className="form-select form-control" aria-label="Default select example">
                    <option>Pilihan Layanan</option>
                    <option value="Teeth Whitening">Telemedis Alternatif</option>
                    <option value="Secretome and Stem Cells Therapy">Terapi Sekretom dan Stem Cells</option>
                    <option value="Ozone Therapy">Terapi Ozon</option>
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

export default InHomeDiagnosticId;
