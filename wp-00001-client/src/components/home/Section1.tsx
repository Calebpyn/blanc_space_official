//Description: Section 1, logo and main section

//Hooks
import { useContext, useState } from "react";

//Assets
import main_bg from "../../assets/home/bg_1_section_1.jpg";

//Translation
import { useTranslation } from "react-i18next";

//Conetext
import { DarkMode } from "../../contexts/DarkMode";

function Section1() {
  //Translation
  const { t } = useTranslation();

  //Getting inner height
  const [windowHeight] = useState<number>(window.innerHeight - 100);

  //Darkmode context
  const darkModeContext = useContext(DarkMode);
  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { darkMode } = darkModeContext;

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: `${windowHeight}px` }}
    >
      <div
        style={{ backgroundImage: `url(${main_bg})` }}
        className="lg:w-[95%] w-full lg:h-[90%] h-full lg:rounded-[15px] bg-center bg-cover relative flex justify-center items-center flex-col lg:pb-0 pb-20"
      >
        <div className="absolute top-0 left-0 pl-3">
          <span className="font-gopherRegular text-[10px] text-white">
            e404_jpg 2024 ©
          </span>
        </div>
        <div
          className={`lg:w-[900px] sm:w-[80%] w-[90%] lg:h-[600px] sm:h-[400px] h-[280px] bg-gradient-to-b tr rounded-[50%] flex justify-center items-center ${
            darkMode
              ? "text-white from-black to-[#999999]"
              : "from-[#999999] to-white text-black"
          }`}
        >
          <div className="w-[75%]">
            <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end items-center sm:text-[80px] text-[60px] font-gopherBold">
              <span>BLANC</span>
              <div
                className={`w-[90px] hidden lg:flex tr h-[10px] mb-8 ${
                  darkMode ? "bg-white" : "bg-black"
                }`}
              ></div>
              <span>SPACE</span>
            </div>
            <div className="font-gopherRegular justify-between items-center w-full -mt-3 hidden lg:flex">
              <span className="">
                {t("sass_provider")}
                <br />
                {t("and_custom_sw")}
              </span>
              <span className="text-right">
                <br />
                blancspace 2024 ©
              </span>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden w-full justify-between font-gopherRegular items-center absolute bottom-0 p-8 text-[12px] text-white">
          <span className="">
            {t("sass_provider")}
            <br />
            {t("and_custom_sw")}
          </span>
          <span className="text-right">
            <br />
            blancspace 2024 ©
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section1;
