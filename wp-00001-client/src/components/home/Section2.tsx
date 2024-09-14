//Description: Section 2, slogan and contact redirect

//Hooks
import { useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Context
import { DarkMode } from "../../contexts/DarkMode";

//Assets
import liquidMetalAsset from "../../assets/common/luquid_metal_asset.png";

//Icons
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Section2() {
  //Translation
  const { t } = useTranslation();

  //Getting inner height
  const [windowHeight] = useState<number>(window.innerHeight - 100);

  return (
    <div
      className="w-full flex justify-center items-center pt-10 overflow-clip"
      style={{ height: `${windowHeight}px` }}
    >
      <div className="w-[90%] h-[80%] bg-custom-radial-lm sm:rounded-[95px] rounded-[30px] flex flex-col justify-between relative items-center">
        <div className="w-full flex justify-start items-start font-gopherBold lg:text-[60px] sm:text-[50px] text-[40px] text-white sm:pl-14 p-10 sm:p-0">
          <span className="-mt-20">
            {t("your_vision_our")}
            <br />
            {t("innovation")}
          </span>
        </div>

        <div className="w-full">
          <img
            src={liquidMetalAsset}
            className="absolute right-0 sm:top-1/4 top-1/3 sm:-mr-8 sm:w-[700px] min-w-[500px] -mr-14"
          />
        </div>

        <div className="w-full justify-start sm:p-14 p-0 lg:p-20 text-[30px] font-hnLight text-white flex">
          <div className="w-[300px] pl-10 sm:pl-0 text-[20px] sm:text-[30px]">
            <span>{t("contact_us_to_upgrade")}</span>
            <span className="group h-[50px] flex items-center w-[200px] hover:w-[300px] cursor-pointer">
              <div className="w-[100px] flex justify-end items-center tr h-[2px] bg-white group-hover:w-[150px] group-hover:tr">
                <MdOutlineArrowForwardIos className="text-[20px] -mr-2" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
