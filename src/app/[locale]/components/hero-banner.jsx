"use client";
import axios from "axios";
const fetcher = (url) => axios.get(url).then((res) => res.data);
import useSWR from "swr";

const HeroBanner = ({ title, desc, bookButton, backgroundImage, locale }) => {
  const { data, error } = useSWR(
    `https://api.cepatsehat.com/api/v1/get-city`,
    fetcher
  );

  console.log(data);

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
        className="hero-banner"
      >
        <div className="container">
          <div className="text">
            {error ? (
              locale === "id" ? (
                <h3 className="title">
                  {title} Bali, Jakarta, Surabaya & Bandung
                </h3>
              ) : (
                <h3 className="title">{title} Bali</h3>
              )
            ) : (
              <h3 className="title">{title + (data && data.city)}</h3>
            )}
            <p className="desc fw-semibold" style={{ color: "#FAFF03" }}>
              {desc}
            </p>
            <a href="#book" className="btn btn-warning">
              {bookButton}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
