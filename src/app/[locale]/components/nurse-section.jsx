import NurseCard from "./card-nurse";
import NrSiti from "../../../../public/assets/img/doctor/nurse-siti.png";
import NrLois from "../../../../public/assets/img/doctor/nurse-loisa.png";
import NrSyarah from "../../../../public/assets/img/doctor/nurse-syarah.png";
import NrAndi from "../../../../public/assets/img/doctor/nurse-andi.png";
import NrMarsiani from "../../../../public/assets/img/doctor/nurse-marsiani.png";
import NrIrfan from "../../../../public/assets/img/doctor/nurse-irfan.png";
import NrDimas from "../../../../public/assets/img/doctor/nurse-dimas.png";
import NrRina from "../../../../public/assets/img/doctor/nurse-rina.webp";
import NrMusdalifa from "../../../../public/assets/img/doctor/nurse-musdalifa.webp";
import NrSelamat from "../../../../public/assets/img/doctor/nurse-selamat.png";
import NrSumarna from "../../../../public/assets/img/doctor/nurse-sumarna.webp";

import { useLocale, useTranslations } from "next-intl";

const NurseSection = () => {
  const locale = useLocale();

  const t = useTranslations("home");
  return (
    <>
      <section className="doctor nurse">
        <div className="container">
          <h3 className="title-section"> {t("our-nurse")} </h3>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              <div className="row g-3 g-md-4 justify-content-center">
                <NurseCard
                  name="Siti Rahma Derlauw"
                  str="3101522234737239"
                  isnurse={true}
                  image={NrSiti}
                />
                <NurseCard
                  name="Loisa Lakamai"
                  str="1701721213519681"
                  isnurse={true}
                  image={NrLois}
                />
                <NurseCard
                  name="Syarah Azzarah"
                  str="2601521224246624"
                  isnurse={true}
                  image={NrSyarah}
                />
                {/* <NurseCard
                  name="Andi Andriansyah S."
                  str="HA00000870437934"
                  isnurse={true}
                  image={NrAndi}
                /> */}
                <NurseCard
                  name="Marsiani Talo"
                  str=" 190172122-4444051"
                  isnurse={true}
                  image={NrMarsiani}
                />
                <NurseCard
                  name="Rina Putri"
                  str="0101521213497319"
                  isnurse={true}
                  image={NrRina}
                />
                <NurseCard
                  name="Musdalifa"
                  str="0501522220-3201328"
                  isnurse={true}
                  image={NrMusdalifa}
                />
                <NurseCard
                  name="Selamat Hartanto"
                  str="TJ00000324384379"
                  isnurse={true}
                  image={NrSelamat}
                />
                {/* STR:  */}
                <NurseCard
                  name="Sumarna"
                  str="UG00000370743415"
                  isnurse={true}
                  image={NrSumarna}
                />
                <NurseCard
                  name="Dimas Catur Nugroho"
                  str="ED00000360053713"
                  isnurse={true}
                  image={NrDimas}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NurseSection;
