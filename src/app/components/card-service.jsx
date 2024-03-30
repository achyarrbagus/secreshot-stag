import Link from "next/link";
const CardService = ({ icon, link, titleService }) => {
  return (
    <>
      <div className="col-4">
        <Link href={link} className="box-service">
          <i className={icon}></i>
          <span className="title-service">{titleService}</span>
        </Link>
      </div>
    </>
  );
};

export default CardService;
