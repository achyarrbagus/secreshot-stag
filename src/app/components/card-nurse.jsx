const NurseCard = ({ name, image, str }) => {
  return (
    <>
      <div className="col-6 col-md-3">
        <div className="items-doctor">
          <div className="img-doctor">
            <img src={image} alt="" />
          </div>
          <div className="name">
            <h5>{name}</h5>
            <span>STR: {str}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NurseCard;
