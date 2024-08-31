//Description: Section 2, slogan and contact redirect

//Hooks
import { useContext, useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Conetext
import { DarkMode } from "../../contexts/DarkMode";

//Assets
import liquidMetalAsset from "../../assets/common/luquid_metal_asset.png";

function Section2() {
  //Translation
  const { t } = useTranslation();

  //Getting inner height
  const [windowHeight] = useState<number>(window.innerHeight - 100);

  // //Darkmode context
  // const darkModeContext = useContext(DarkMode);
  // if (!darkModeContext) {
  //   throw new Error("DarkModeContext must be used within a DarkModeProvider");
  // }

  // const { darkMode } = darkModeContext;

  return (
    <div
      className="w-full flex justify-center items-center pt-10 overflow-clip"
      style={{ height: `${windowHeight}px` }}
    >
      <div className="w-[90%] h-[80%] bg-custom-radial-lm sm:rounded-[95px] rounded-[30px] flex flex-col justify-between items-center">
        <div className="w-full flex justify-start items-start font-gopherBold lg:text-[60px] sm:text-[50px] text-[40px] text-white sm:pl-20 p-10 sm:p-0">
          <span className="-mt-20">
            {t("your_vision_our")}
            <br />
            {t("innovation")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section2;
