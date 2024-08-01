import NurseCard from "./card-nurse";
import DoctorCard from "./card-doctor";
import DrDewi from "../../../../public/assets/img/doctor/dr-dewi-f.png";
import DrDwi from "../../../../public/assets/img/doctor/dr-dwi-s.png";
import DrAyu from "../../../../public/assets/img/doctor/dr-ayu-a.png";
import DrErnita from "../../../../public/assets/img/doctor/dr-ernita-r.png";
import DrIrvan from "../../../../public/assets/img/doctor/dr-irvan-r.png";
import DrMel from "../../../../public/assets/img/doctor/dr-melchisedek-a.png";
import DrCut from "../../../../public/assets/img/doctor/dr-cut.png";
import DrYahya from "../../../../public/assets/img/doctor/dr-yahya.png";

import { useLocale, useTranslations } from "next-intl";

const DoctorSection = () => {
  const locale = useLocale();

  const t = useTranslations("home");
  return (
    <>
      <section className="doctor">
        <div className="container">
          <h3 className="title-section">{t("our-doctors")} </h3>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              <div className="row g-3 g-md-5 justify-content-center">
                {/* <DoctorCard
                  image={DrDewi}
                  name="dr. Dewi Fransiska, Sp.B"
                  job={t("dr-surgeon")}
                  str="3121101422105406"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("mayapada"), t("eka")]}
                /> */}
                <DoctorCard
                  // image={`/assets/img/doctor/dr-dwi-s.png`}
                  image={DrDwi}
                  name="dr. Dwi Suryaning Ayu Aprilizia, Sp.A"
                  job={t("dr-pediatrician")}
                  str="3321201323154360"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("aysha-bogor")]}
                />
                <DoctorCard
                  // image={`/assets/img/doctor/dr-ayu-a.png`}
                  name="dr. Ayu A. Istiana"
                  image={DrAyu}
                  job={t("dr-asthetic")}
                  str="3321201323154360"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("cepat-sehat-jakarta")]}
                />
                <DoctorCard
                  name="dr. Ernita Rosyanti Dewi"
                  image={DrErnita}
                  job={t("dr-general")}
                  str="3121100220145544"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("cepat-sehat-jakarta")]}
                />
                <DoctorCard
                  name="dr. Cut Fadmala Corry Amelia"
                  image={DrCut}
                  job={t("dr-general")}
                  str="VC00000389023553"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("cepat-sehat-bali")]}
                />
                <DoctorCard
                  // image={`/assets/img/doctor/dr-irvan-r.png`}
                  name="dr. Irvan Rizki Fitri"
                  image={DrIrvan}
                  job={t("dr-general")}
                  str="3121100220145544"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("cepat-sehat-jakarta")]}
                />
                <DoctorCard
                  // image={`/assets/img/doctor/dr-melchisedek-a.png`}
                  name="dr. Melchisedek A.V.P Marbun"
                  image={DrMel}
                  job={t("dr-general")}
                  str="3111100220155405"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("cepat-sehat-jakarta")]}
                />{" "}
                <DoctorCard
                  // image={`/assets/img/doctor/dr-melchisedek-a.png`}
                  name="dr. Yahya Albar, Sp. KKLP"
                  image={DrYahya}
                  job={t("dr-general")}
                  str="9811809221170965"
                  titlelocation={t("practice-location")}
                  practiceLocation={[t("cepat-sehat-lombok")]}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorSection;
