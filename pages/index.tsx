"use client";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const redirectWa = (e: any) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement | null;
    const address = document.getElementById(
      "address"
    ) as HTMLInputElement | null;

    const service = document.getElementById(
      "service"
    ) as HTMLInputElement | null;

    if (name?.value && address?.value && service?.value) {
      if (service.value == "Select Service") {
        return alert("please fill form correcly");
      }
      const wardingWa = encodeURIComponent(`
Hello Admin,
I want to book service with
following information :

Name : ${name.value}
Address : ${address.value}
Service Name : ${service.value}
----------------------------------------------------------------------     
Halo Admin,
Saya ingin melakukan booking vaksin dengan keterangan 
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

  const redirectTele = (e: any) => {
    e.preventDefault();

    window.location.replace("https://t.me/InfusionJakarta");
  };

  return (
    <>
      <div className="content">
        <section className="banner-pages homepage">
          <div className="container">
            <div className="text">
              <h3>
                <span className="fw-normal"> Boost Your Body With </span> Stem
                Cells Theraphy
              </h3>
            </div>
          </div>
        </section>

        <section className="banner-consult">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="text">
                <h3>
                  <span className="fw-normal">
                    Consult For Free With Our Medical Team
                  </span>
                </h3>
                <a href="#book" className="btn btn-primary fs-14 w-75">
                  Book Now
                </a>
                <h3 className="line">
                  <span>Or</span>
                </h3>
                <h3 className="mt-3">I Experience one of those Symptoms</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="menus">
          <div className="container">
            <h3 className="title-line blue">
              <span> Aesthetic </span>
            </h3>
            <div className="row g-3">
              <div className="col-6">
                <Link href="/acne" className="button-menu blue">
                  <Image src="assets/img/icon/icon-acne.svg" alt="" />
                  <h5>Acne</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/anti-aging" className="button-menu blue">
                  <Image src="assets/img/icon/icon-antiaging.svg" alt="" />
                  <h5>Anti Aging</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/hair-loss" className="button-menu blue">
                  <Image src="assets/img/icon/icon-hairloss.svg" alt="" />
                  <h5>Hair Loss</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/scars" className="button-menu blue">
                  <Image src="assets/img/icon/icon-scars.svg" alt="" />
                  <h5>Scars</h5>
                </Link>
              </div>
            </div>

            <h3 className="title-line warning">
              <span> Fast Recovery </span>
            </h3>
            <div className="row g-3">
              <div className="col-6">
                <Link href="/arthritis" className="button-menu warning">
                  <Image src="assets/img/icon/icon-arthritis.svg" alt="" />
                  <h5>Arthritis</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/auto-immune" className="button-menu warning">
                  <Image src="assets/img/icon/icon-autoimmune.svg" alt="" />
                  <h5>Auto Immune</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/covid-19" className="button-menu warning">
                  <Image src="assets/img/icon/icon-covid.svg" alt="" />
                  <h5>Covid-19</h5>
                </Link>
              </div>
              <div className="col-6">
                <Link href="/stroke" className="button-menu warning">
                  <Image src="assets/img/icon/icon-stroke.svg" alt="" />
                  <h5>Stroke</h5>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="potential bg-soft">
          <div className="container">
            <h3 className="title-section">
              <span className="fw-normal">Potential Uses of</span> <br />
              <span className="text-primary">Secretome and Stem Cells</span>
            </h3>
            <Image
              src="assets/img/img-potential.png"
              className="w-100"
              alt=""
            />
          </div>
        </section>

        <section className="potential">
          <div className="container">
            <h3 className="title-section">Stem Cells Review From Experts</h3>
            <div className="row g-3">
              <a
                href="https://www.youtube.com/embed/Ve2CL-eRlao?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <Image
                  alt="img"
                  src="https://img.youtube.com/vi/Ve2CL-eRlao/hqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <Image src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/embed/SM3cH7FU3Q8?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <Image
                  alt="img"
                  src="https://i1.ytimg.com/vi/SM3cH7FU3Q8/mqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <Image src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/embed/GIZp_DS2WvE?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <Image
                  alt="img"
                  src="https://i1.ytimg.com/vi/GIZp_DS2WvE/mqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <Image src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/embed/t9kWCxu7MR4?si=H4PDxfD_rhfWBTgQ"
                data-toggle="lightbox"
                data-gallery="youtubevideos"
                className="col-6 gallery-video"
              >
                <Image
                  alt="img"
                  src="https://i1.ytimg.com/vi/t9kWCxu7MR4/mqdefault.jpg"
                  className="thumbnail-yt"
                />
                <div className="play-button">
                  <Image src="assets/img/circle-play.png" alt="" />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="container">
            <h3 className="title-section"> Book Now </h3>
            <form>
              <div className="row mb-3 g-3">
                <div className="col-md-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Your Address"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Service</label>
                  <select
                    id="service"
                    className="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Select Service</option>
                    <option value="Acne">Acne</option>
                    <option value="Hair Loss">Hair Loss</option>
                    <option value="Anti Aging">Anti Aging</option>
                    <option value="Scars">Scars</option>
                    <option value="Arthritis">Arthritis</option>
                    <option value="Auto Immune">Auto Immune</option>
                    <option value="Covid-19">Covid-19</option>
                    <option value="Stroke">Stroke</option>
                  </select>
                </div>
              </div>
              <div className="row g-3 justify-content-center">
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
                    type="submit"
                    onClick={redirectTele}
                    className="btn btn-telegram w-100"
                  >
                    <i className="fa-brands fa-telegram fs-18 me-2"></i>
                    Telegram
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
