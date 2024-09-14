//Description: This is the who we are section

//Hooks
import { useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Assets
import bg1 from "../../assets/home/bg_1_section_4.png";
import pp1 from "../../assets/common/caleb_pp.png";
import pp2 from "../../assets/common/zod_pp.jpg";

function Section4() {
  //Translation
  const { t } = useTranslation();

  //Getting inner height
  const [windowHeight] = useState<number>(window.innerHeight - 100);

  return (
    <div
      style={{ height: `${windowHeight}px` }}
      className="flex justify-center items-center"
    >
      <div className="w-[95%] sm:w-[90%] sm:h-[70%] h-[90%] flex sm:flex-row flex-col justify-between items-center">
        <div
          className="w-full sm:w-[50%] h-full rounded-[10px] flex flex-col justify-between"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="w-full flex justify-center items-center">
            <span className="font-gopherBold text-white md:text-[50px] -mt-[40px] sm:text-[40px] text-[45px]">
              {t("who_we_are_title")}
            </span>
          </div>
          <div className="w-full flex items-start p-5 text-white font-hnLight text-[20px] flex-col">
            <span className="sm:w-[70%] w-[90%]">{t("section4_content")}</span>
            <span className="font-gopherRegular text-[10px] text-white mt-5">
              e404_jpg 2024 ©
            </span>
          </div>
        </div>
        <div className="sm:w-[50%] w-full h-full sm:pl-5 mt-[10px] sm:mt-0">
          <div className="h-[50%] w-full pb-[5px] sm:pb-[10px]">
            <div
              style={{ backgroundImage: `url(${pp1})` }}
              className="rounded-[10px] bg-cover w-full h-full flex justify-start items-end p-3"
            >
              <span className="text-white font-hnLight sm:w-[40%] w-[60%]">
                {t("caleb_content")}
              </span>
            </div>
          </div>

          <div className="h-[50%] w-full pt-[5px] sm:pt-[10px]">
            <div
              style={{ backgroundImage: `url(${pp2})` }}
              className="rounded-[10px] bg-cover w-full h-full flex justify-start items-end p-3"
            >
              <span className="text-white font-hnLight sm:w-[40%] w-[60%]">
                {t("adrian_content")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
