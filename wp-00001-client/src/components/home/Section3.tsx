//Description: About us section

//Hooks
import { useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Assets
import bckgrdn_img from "../../assets/home/bg_1_section_3.jpg";

function Section3() {
  //Translation
  const { t } = useTranslation();

  //Getting inner height
  const [windowHeight] = useState<number>(window.innerHeight - 100);

  return (
    <div
      className="w-full flex justify-center items-center overflow-clip"
      style={{ height: `${windowHeight}px` }}
    >
      <div
        style={{ backgroundImage: `url(${bckgrdn_img})` }}
        className="w-full h-full bg-cover bg-center flex flex-col justify-between items-center relative lg:p-10 p-5"
      >
        <div className="w-full flex justify-center items-center font-gopherBold lg:text-[60px] sm:text-[50px] text-[40px] text-white text-center">
          <span className="">{t("about_us_header")}</span>
        </div>
        <div className="absolute top-0 left-0 pl-3">
          <span className="font-gopherRegular text-[10px] text-white">
            e404_jpg 2024 ©
          </span>
        </div>
        <div className="text-white flex justify-start items-end h-full">
          <span className="lg:w-[70%] w-full flex flex-col gap-10 lg:text-[20px] font-hnLight sm:text-[16px] text-[14px]">
            <span>{t("about_us_p1")}</span>
            <span>{t("about_us_p2")}</span>
          </span>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Section3;
