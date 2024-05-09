import Image from "next/image";

const DoctorCard = ({
  image,
  name,
  str,
  job,
  practiceLocation,
  isnurse,
  titlelocation,
  lang,
}) => {
  return (
    <>
      <div className="col-6 col-md-4">
        <div className="items-doctor">
          <div className="img-doctor">
            <Image src={image} className="img" alt="doctor-img" />
          </div>
          <div className="name">
            <h5>{name}</h5>
            <p>{job}</p>
            <span>STR: {str}</span>

            <hr />
            <div className="text-start">
              <p>
                {titlelocation}
                <i className="mdi mdi-map-marker fs-18 ms-2"></i>
              </p>
              <ul className="ps-3">
                {practiceLocation.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
