import Image from "next/image";
const CardArticleSlide = ({ path, item }) => {
  const CutText = (text, isTitle) => {
    let sentences = text.split("");
    let first100Sentences = sentences.slice(0, 30);

    let resultText = first100Sentences.join("");
    return resultText;
  };
  const dateToString = (dateString) => {
    const dt = new Date(dateString);
    const date = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const months = [
      "Januari",
      "February",
      "March",
      "Aprl",
      "Mei",
      "Juni",
      "Juli",
      "Augstus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const monthName = months[month];

    const result = date + " " + monthName + " " + year;

    return result;
  };
  return (
    <>
      <div className="card-slide-article">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingBottom: "calc(7/12 * 100%)" /* Mengatur rasio aspek 12:7 */,
          }}
        >
          <Image
            src={"https://api.cepatsehat.com/uploads/" + path}
            layout="fill"
            objectFit="cover"
            alt="doctor"
          />
        </div>

        <div className="name-article">
          <h6>{CutText(item.title)}...</h6>
          <p>{CutText(item.intro)}...</p>
          <a href="article-detail.html" className="text-muted fs-14">
            <i className="mdi mdi-arrow-right"></i>
          </a>
          <p className="text-end text-capitalize">
            {dateToString(item?.publish_date)}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardArticleSlide;
