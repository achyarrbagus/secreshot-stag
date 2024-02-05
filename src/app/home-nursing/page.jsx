"use client";
import HomeNursingId from "./page-id";
import { useSelector } from "react-redux";

const HomeNursing = () => {
  const redirectWa = (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const address = document.getElementById("address");

    const service = document.getElementById("service");
    if (name?.value && address?.value && service?.value) {
      const wardingWa = encodeURIComponent(`
Hello CepatSehat.com by Cepat Sehat Clinic, i want a consultation

Name :  ${name.value}
Address : ${address.value} 
Service : ${service.value}
`);

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
  const lang = useSelector((state) => state.lang.value);

  switch (lang) {
    case "ID":
      return (
        <>
          <HomeNursingId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section className="banner-pages" style={{ backgroundImage: "url('assets/img/bg-home-nursing.png')" }}>
              <div className="container">
                <div className="text">
                  <h3>Home Nursing and Wound Care</h3>
                  <p>
                    Receive top-notch nursing and wound care services in the comfort of your villa or hotel, from recovery support
                    to chronic condition management.
                  </p>
                  <a href="#book" className="btn btn-warning fs-14">
                    Book Now
                  </a>
                </div>
              </div>
            </section>

            <section className="faq pt-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <img src="assets/img/plus-vector.svg" width="30px" alt="" />
                  <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">
                    Our comprehensive home nursing and wound care services include :
                  </h3>
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
                        <i className="icon-menu-icon-nursing me-2 fs-32"></i> Wound Care
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
                                Comprehensive healthcare services covering expert wound and ostomy care, advanced wound dressing
                                methods, precise minor surgeries, and thorough post-surgical care for optimal recovery.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Wound and Ostomy Care</h6>
                                  <span>
                                    Specialized care for faster healing, complications prevention, and improved patient
                                    well-being.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Advanced Wound Dressing</h6>
                                  <span>
                                    Accelerates healing, reduces infection risks, and provides optimal conditions for tissue
                                    recovery.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Minor Surgeries</h6>
                                  <span> Efficient and precise treatment, minimizing trauma and ensuring quick recovery. </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Post-Surgical Care</h6>
                                  <span>
                                    Comprehensive care for pain management, infection prevention, and smooth rehabilitation,
                                    promoting a quicker recovery process.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp250.000
                                </div>
                                <div
                                  onClick={() => handleBook("Wound Care")}
                                  id="wound"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now
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
                        <i className="icon-menu-icon-nursing-2 me-2 fs-32"></i> Monitoring and Prevention
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
                                Ensuring patient well-being through continuous vital sign monitoring and implementing preventive
                                measures to curb the risk of infections.
                              </p>
                              <h6 className="title-line">
                                <span> Benefit </span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Vital Sign Monitoring</h6>
                                  <span>
                                    Early intervention through regular monitoring detects health issues promptly, improving
                                    patient outcomes.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Infection Prevention</h6>
                                  <span> Minimized disease transmission, safeguarding patients and healthcare workers. </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp200.000
                                </div>
                                <div
                                  onClick={() => handleBook("Monitoring and Prevention")}
                                  id="monitoring"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now
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
                <h3 className="title-section">Book Now</h3>
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
                        <option value="Wound Care">Wound Care</option>
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
  }
};

export default HomeNursing;
