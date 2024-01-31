"use client";

const HomeNursingId = () => {
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
        <section className="banner-pages" style={{ backgroundImage: "url('assets/img/bg-home-nursing.png')" }}>
          <div className="container">
            <div className="text">
              <h3>Perawatan di Rumah & Perawatan Luka</h3>
              <p>
                Dapatkan layanan keperawatan dan perawatan luka terbaik dalam kenyamanan hunian Anda, mulai dari dukungan
                pemulihan hingga manajemen kondisi kronis.
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
              <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">Layanan perawatan rumah & perawatan luka kami meliputi :</h3>
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
                    <i className="icon-menu-icon-nursing me-2 fs-32"></i> Perawatan luka
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/home-nursing/img-home-nursing-sub01.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Layanan kesehatan komprehensif yang mencakup ahli perawatan luka dan ostomi, metode pembalutan luka
                            canggih, operasi kecil yang tepat, dan perawatan pasca bedah menyeluruh untuk pemulihan optimal.
                          </p>
                          <h6 className="title-line">
                            <span> Keuntungan </span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Perawatan Luka dan Ostomi</h6>
                              <span>
                                Perawatan khusus untuk penyembuhan lebih cepat, pencegahan komplikasi, dan peningkatan kondisi
                                pasien.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Pembalutan Luka Tingkat Lanjut</h6>
                              <span>
                                Mempercepat penyembuhan, mengurangi risiko infeksi, dan memberikan kondisi optimal untuk pemulihan
                                jaringan.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Operasi Kecil</h6>
                              <span>
                                Perawatan yang efisien dan tepat, meminimalkan pasca-trauma dan memastikan pemulihan yang cepat.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Perawatan Pasca Bedah</h6>
                              <span>
                                Perawatan komprehensif untuk manajemen nyeri, pencegahan infeksi, dan mendorong proses pemulihan
                                yang lebih cepat.
                              </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp250.000
                            </div>
                            <div onClick={() => handleBook("Wound Care")} id="wound" className="btn btn-warning fs-14 ms-auto">
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
                    <i className="icon-menu-icon-nursing-2 me-2 fs-32"></i> Pemantauan & Pencegahan
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="list-data-faq">
                      <div className="row gy-3">
                        <div className="col-12">
                          <img src="assets/img/home-nursing/img-home-nursing-sub02.png" className="w-100" alt="" />
                        </div>
                        <div className="col-12">
                          <p>
                            Memastikan kondisi pasien melalui pemantauan tanda-tanda vital secara terus menerus dan menerapkan
                            tindakan pencegahan untuk mengurangi risiko infeksi.
                          </p>
                          <h6 className="title-line">
                            <span> Keuntungan </span>
                          </h6>
                          <ul className="ps-3">
                            <li className="mb-2">
                              <h6 className="mb-1">Pemantauan Tanda Vital</h6>
                              <span>
                                Intervensi dini melalui pemantauan rutin dapat mendeteksi masalah kesehatan dengan cepat, sehingga
                                meningkatkan kondisi pasien.
                              </span>
                            </li>
                            <li className="mb-2">
                              <h6 className="mb-1">Pencegahan Infeksi</h6>
                              <span>Meminimalkan penularan penyakit, melindungi pasien dan petugas kesehatan. </span>
                            </li>
                          </ul>
                          <div className="price">
                            <div className="value-price">
                              <b>Mulai dari:</b> Rp200.000
                            </div>
                            <div
                              onClick={() => handleBook("Monitoring and Prevention")}
                              id="monitoring"
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
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section">Pesan</h3>
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
                  <label className="form-label">Layanan</label>
                  <select id="service" className="form-select form-control" aria-label="Default select example">
                    <option>Pilih Layanan</option>
                    <option value="Perawatan luka">Perawatan luka</option>
                    <option value="Monitoring and Prevention">Monitoring and Prevention</option>
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

export default HomeNursingId;
