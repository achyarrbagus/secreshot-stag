const HeroBanner = ({
  title,
  desc,
  bookButton,
  backgroundImage,
  locale,
  cordinates,
}) => {
  //bali city

  const city = [
    "Denpasar",
    "Badung",
    "Buleleng",
    "Gianyar",
    "Jembrana",
    "Karangasem",
    "Klungkung",
    "Tabanan",
    "Denpasar",
  ];
  console.log(city.includes(cordinates.cordinates?.city), "==");

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
            {cordinates === "error" ? (
              locale === "id" ? (
                <h3 className="title">{title} Bali, Jakarta, Bandung</h3>
              ) : (
                <h3 className="title">{title} Bali</h3>
              )
            ) : (
              <h3 className="title">
                {title +
                  " " +
                  (cities.includes(coordinates.coordinates?.city)
                    ? "Bali"
                    : coordinates.coordinates?.city)}
              </h3>
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
