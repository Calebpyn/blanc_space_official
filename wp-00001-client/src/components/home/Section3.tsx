//Description: Section 2, slogan and contact redirect

//Hooks
import { useContext, useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Context
import { DarkMode } from "../../contexts/DarkMode";

//Assets
import bckgrdn_img from "../../assets/home/bg_1_section_3.jpg";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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
        className="w-full lg:h-[90%] h-full bg-cover bg-center flex flex-col justify-between items-center"
      >
        <div className="w-full flex justify-center items-center font-gopherBold lg:text-[60px] sm:text-[50px] text-[40px] text-white sm:pl-20 p-10 sm:p-0">
          <span className="mt-2 lg:-mt-11">{t("about_us_header")}</span>
        </div>
        <div className="h-[50%] lg:w-[60%] w-[70%] lg:flex-row flex flex-col justify-between items-center font-hnLight text-white text-[35px] lg:text-[50px]">
          <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-start lg:items-start justify-between items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div>
              <span>{t("who")}</span>
              <br />
              <span>{t("who_we")}</span>
              <br />
              <span>{t("who_are")}</span>
            </div>
            <span className="group h-[50px] flex items-center lg:w-[200px] lg:hover:w-[300px] cursor-pointer">
              <div className="w-[70px] flex justify-end items-center tr h-[2px] bg-white lg:group-hover:w-[100px] lg:group-hover:tr">
                <MdOutlineArrowForwardIos className="text-[30px] -mr-2" />
              </div>
            </span>
          </div>
          <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-start lg:items-start justify-between items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div>
              <span>{t("what")}</span>
              <br />
              <span>{t("what_we")}</span>
              <br />
              <span>{t("what_do")}</span>
            </div>
            <span className="group h-[50px] flex items-center lg:w-[200px] lg:hover:w-[300px] cursor-pointer">
              <div className="w-[70px] flex justify-end items-center tr h-[2px] bg-white lg:group-hover:w-[100px] lg:group-hover:tr">
                <MdOutlineArrowForwardIos className="text-[30px] -mr-2" />
              </div>
            </span>
          </div>
          <div className="lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-start lg:items-start justify-between items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div>
              <span>{t("contact_us1")}</span>
              <br />
              <span>{t("contact_us2")}</span>
            </div>
            <span className="group h-[50px] flex items-center lg:w-[200px] lg:hover:w-[300px] cursor-pointer">
              <div className="w-[70px] flex justify-end items-center tr h-[2px] bg-white lg:group-hover:w-[100px] lg:group-hover:tr">
                <MdOutlineArrowForwardIos className="text-[30px] -mr-2" />
              </div>
            </span>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Section3;
