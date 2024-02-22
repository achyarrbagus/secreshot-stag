"use client";

import DoctorHomeVisitId from "./page-id";
import { useSelector,useDispatch } from "react-redux";
import { useState,Suspense,useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { setLang } from "../../../lib/redux/slices/langSlice/langSlice";


const DoctorHomeVisit = () => {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
   useEffect(()=>{
    const lang = searchParams.get("lang")
    if(lang === "en"){
      dispatch(setLang("EN"))
    }

  
  },[])
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

  const [service, setService] = useState();
  const [book, setBook] = useState("Book a visit at your place now");

  const handleBook = (serviceSelect) => {
    switch (serviceSelect) {
      case "Doctor Home Visit":
        setBook("Book a doctor visit now");
        break;
      case "Nurse Home Visit":
        setBook("Book a nurse visit now");
        break;
      case "Medical Check Up":
        setBook("Book for medical check up now");
        break;
    }

    let serviceOption = document.getElementById("service");
    serviceOption.value = serviceSelect;
    window.location.href = "#book";
  };

  const lang = useSelector((state) => state.lang.value);
  switch (lang) {
    case "ID":
      return (
        <>
          <DoctorHomeVisitId />
        </>
      );
    default:
      return (
        <>
          <div className="content">
            <section className="banner-pages" style={{ backgroundImage: "url('assets/img/bg-home-visit.png')" }}>
              <div className="container">
                <div className="text">
                  <h3>Doctor Home Visit</h3>
                  <p>
                    Experience the convenience of consultations with doctors right in your place. With a guarantee of a clinic.
                  </p>
                  <a href="#book" className="btn btn-warning fs-14">
                    {" "}
                    Book Now{" "}
                  </a>
                </div>
              </div>
              {/* <!-- <div className="img-bg">
                <img src="assets/img/img-homeVisit.png" alt="">
            </div> --> */}
            </section>

            <section className="faq pt-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <img src="assets/img/plus-vector.svg" width="30px" alt="" />
                  <h3 className="text-primary fs-20 fw-bold ms-3 mb-0">Our Primary physician home visits include :</h3>
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
                        <i className="icon-menu-icon-homevisit01 me-2 fs-32"></i> Doctor Home Visit
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
                                A Doctor Home Visit brings medical care to your doorstep, allowing patients to receive
                                examinations, diagnoses, prescriptions, and advice in the comfort of their own homes.
                              </p>
                              <h6 className="title-line">
                                <span>Benefit</span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Convenience</h6>
                                  <span>Healthcare delivered to your doorstep for time-saving and ease.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Personalized Care</h6>
                                  <span>Tailored treatment plans considering home environment and lifestyle.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Timely Intervention</h6>
                                  <span>Early detection and action to prevent complications.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Enhanced Relationship</h6>
                                  <span>In-home visits foster better communication and trust.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Accessibility</h6>
                                  <span>
                                    Easy access for vulnerable populations like the elderly and those with mobility issues.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp250.000
                                </div>
                                <div
                                  onClick={() => handleBook("Doctor Home Visit")}
                                  id="doctor-visit"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now{" "}
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
                        <i className="icon-menu-icon-homevisit02 me-2 fs-32"></i> Nurse Home Visit
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
                                A Nurse Home Visit brings healthcare to your door, offering personalized services like
                                assessments, treatments, and health education.
                              </p>
                              <h6 className="title-line">
                                <span>Benefit</span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Convenience</h6>
                                  <span>Healthcare delivered to your doorstep for time-saving and ease.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Personalized Care</h6>
                                  <span>Tailored treatment plans considering home environment and lifestyle.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Timely Intervention</h6>
                                  <span>Early detection and action to prevent complications.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Enhanced Relationship</h6>
                                  <span>In-home visits foster better communication and trust.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Accessibility</h6>
                                  <span>
                                    Easy access for vulnerable populations like the elderly and those with mobility issues.
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp200.000
                                </div>
                                <div
                                  onClick={() => handleBook("Nurse Home Visit")}
                                  id="nurse-visit"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="accordion-item col-md-6">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        <i className="icon-menu-icon-homevisit03 me-2 fs-32"></i>Child Vaccination
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
                                Child Vaccination is the administration of vaccines to protect children from diseases like
                                measles, mumps, rubella, and polio.
                              </p>
                              <h6 className="title-line">
                                <span>Benefit</span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Health Protection</h6>
                                  <span>Vaccines safeguard children from serious illnesses.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Community Defense</h6>
                                  <span>Vaccination aids in preventing disease spread in communities.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Cost-Effective Health</h6>
                                  <span>Vaccinations save on medical costs by preventing severe illnesses.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">School Access</h6>
                                  <span>Required vaccines ensure access to education in a safer environment.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Global Health</h6>
                                  <span>Vaccination programs contribute to global efforts against infectious diseases.</span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp300.000
                                </div>
                                <div
                                  onClick={() => handleBook("Child Vaccination")}
                                  id="child"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
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
                        <i className="icon-menu-icon-homevisit04 me-2 fs-32"></i> Medical Check Up
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
                                A medical check-up is a routine appointment with a healthcare professional to assess overall
                                health through vital sign measurements, a physical examination, and, if necessary, additional
                                screenings or tests.
                              </p>
                              <h6 className="title-line">
                                <span>Benefit</span>
                              </h6>
                              <ul className="ps-3">
                                <li className="mb-2">
                                  <h6 className="mb-1">Blood Glucose Level Tests</h6>
                                  <span>Check blood sugar levels to diagnose and manage diabetes and hypoglycemia.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Cholesterol Testing</h6>
                                  <span>Assess LDL, HDL, and triglyceride levels to gauge cardiovascular risk.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Uric Acid Test</h6>
                                  <span>
                                    Measure uric acid levels for kidney function evaluation and diagnosing conditions like gout.
                                  </span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Blood Pressure Measurement</h6>
                                  <span>Evaluate arterial blood pressure as a crucial indicator of cardiovascular health.</span>
                                </li>
                                <li className="mb-2">
                                  <h6 className="mb-1">Iron Level Tests</h6>
                                  <span>
                                    Measure the amount of iron in the blood and diagnosing conditions like iron deficiency anemia
                                  </span>
                                </li>
                              </ul>
                              <div className="price">
                                <div className="value-price">
                                  <b>Start from:</b> Rp150.000
                                </div>
                                <div
                                  onClick={() => handleBook("Medical Check Up")}
                                  id="medical"
                                  className="btn btn-warning fs-14 ms-auto"
                                >
                                  Book Now{" "}
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
                <h3 className="title-section"> {book} </h3>
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
                        <option value="Doctor Home Visit">Doctor Home Visit</option>
                        <option value="Nurse Home Visit">Nurse Home Visit</option>
                        <option value="Child Vaccination">Child Vaccination</option>
                        <option value="Medical Check Up">Medical Check Up</option>
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
                                            <p>Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i></p>
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
                                            <p>Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i></p>
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
                                            <p>Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i></p>
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
                                            <p>Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i></p>
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
                                            <p>Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i></p>
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
                                            <p>Practice Location <i className="mdi mdi-map-marker fs-18 ms-2"></i></p>
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
  }
};




export default function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <DoctorHomeVisit />
    </Suspense>
  );
}