//Description: What we do section

//Hooks
import { useState } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Assets
import mainImg from "../../assets/home/bg_1_section_5.png";

function Section5() {
  //Translation
  const { t } = useTranslation();

  //Getting inner height
  const [windowHeight] = useState<number>(window.innerHeight - 100);

  return (
    <div
      style={{ height: `${windowHeight}px` }}
      className="w-full flex justify-center items-center pt-10 overflow-clip"
    >
      <div className="md:w-[95%] w-[90%] h-[85%] bg-custom-radial-lm md:rounded-[95px] rounded-[30px] flex flex-col justify-between relative items-center">
        <div className="w-full h-full flex md:justify-center justify-end items-center relative">
          <div className="md:h-[90%] sm:h-[80%] h-[70%] md:self-end lg:w-[350px] sm:w-[300px] w-[250px] bg-black bg-opacity-40 backdrop-blur-lg rounded-[10px] md:-translate-x-[100px] translate-y-[30px] md:mr-0 mr-6"></div>
          <div className="absolute w-full h-full flex justify-between items-center">
            <div className="md:w-1/2 h-full flex justify-center items-start">
              <div
                className="md:h-[90%] sm:h-[80%] h-[70%] lg:w-[350px] sm:w-[300px] w-[250px] rounded-[10px] bg-center bg-cover -translate-y-[30px] flex flex-col md:justify-end items-start p-5 ml-6"
                style={{ backgroundImage: `url(${mainImg})` }}
              >
                <span className="font-gopherRegular text-[10px] text-white">
                  e404_jpg 2024 ©
                </span>
              </div>
            </div>
            <div className="md:w-1/2 w-full absolute md:static h-full text-white flex flex-col justify-between sm:pb-14 md:pr-14 pb-5">
              <span className="lg:text-[50px] md:text-[40px] text-[38px] font-gopherBold md:-translate-y-[50%] -translate-y-[140%] self-center">
                {t("what_we_do_title")}
              </span>
              <div className="md:px-0 sm:px-14 px-5">
                <p className="lg:text-2xl md:text-xl text-base font-hnLight md:text-left text-right">
                  {t("what_we_do_content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
