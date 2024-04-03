const HeroBanner = ({ title, desc }) => {
  return (
    <>
      <div className="hero-banner">
        <div className="container">
          <div className="text">
            <h3 className="title">{title} </h3>
            <p className="desc fw-semibold" style={{ color: "#FAFF03" }}>
              {desc}
            </p>
            <a href="#book" className="btn btn-warning">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
