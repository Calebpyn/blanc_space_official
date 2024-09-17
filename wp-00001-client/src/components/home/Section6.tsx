//Description: Contact us section

//Hooks
import { useState, useContext } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Icons
import { MdOutlineArrowForwardIos } from "react-icons/md";

//Drakmode context
import { DarkMode } from "../../contexts/DarkMode";

//Assets
import mainAsset from "../../assets/common/luquid_metal_asset_2.png";

//EmailJS
import emailjs from "emailjs-com";

//Components
import { CircularProgress } from "@mui/material";
import Success from "../common/Success";
import Unsuccess from "../common/Unsucces";

function Section6() {
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

  // EmailJS credentials
  const serviceID = import.meta.env.VITE_RECACT_APP_EMAILJS_SERVICE_ID_INFO;
  const templateID = import.meta.env.VITE_RECACT_APP_EMAILJS_TEMPLATE_ID_INFO;
  const userID = import.meta.env.VITE_RECACT_APP_EMAILJS_USER_ID;

  //Email params
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  //Is loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //Success
  const [success, setSuccess] = useState<boolean>(false);
  //Unsuccess
  const [unsuccess, setUnsuccess] = useState<boolean>(false);

  //Time out function
  const timeout = (ms: number) => {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    );
  };

  const handleUpload = async () => {
    if (name == "" || email == "") {
      alert("Please, fill the form...");
    } else {
      setIsLoading(true);

      // Prepare the email data
      const templateParams = {
        name,
        email,
        message,
        company,
      };

      try {
        // Race between the email send and the timeout
        await Promise.race([
          emailjs.send(serviceID, templateID, templateParams, userID),
          timeout(10000), // Timeout after 10 seconds
        ]);

        // If the email was successfully sent
        setIsLoading(false);
        setSuccess(true);
      } catch (error) {
        console.error("EmailJS error or timeout:", error);

        // If there's an error or a timeout
        setIsLoading(false);
        setUnsuccess(true);
      }
    }
  };

  return (
    <div
      style={{ height: `${windowHeight}px` }}
      className="w-full p-5 overflow-clip"
    >
      <div className="w-full flex h-full justify-end relative">
        <div className="lg:w-full w-[30%] pointer-events-none absolute h-full left-0 flex justify-center items-center lg:pl-16 md:pl-5 -ml-2 sm:-ml-0">
          <div className="w-full lg:h-[80%] h-full pointer-events-none flex flex-col lg:justify-center justify-end lg:pb-32 relative">
            <div className="">
              <img
                src={mainAsset}
                className="lg:-ml-5 md:-ml-10 lg:w-[55%] contact-us-bp:min-w-[500px]
                md:min-w-[450px] min-w-[480px] -translate-x-[10%] md:-translate-x-0 md:translate-y-0 translate-y-[35%]"
              />
            </div>
            <div
              className={`absolute pointer-events-none w-full md:text-5xl text-[40px] leading-10 md:leading-0 lg:h-[70%] h-full flex flex-col justify-between items-start ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <div className="font-gopherBold">{t("upgrade_your_brand")}</div>
              <div className="font-gopherBold">{t("contact_us")}</div>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full h-full flex justify-center items-center">
          {success ? (
            <div
              className={`w-full lg:h-[85%] h-[75%] lg:mb-0 mb-16 rounded-[10px] flex justify-center items-center gap-5 flex-col tr ${
                darkMode
                  ? "bg-black text-white"
                  : "bg-secondary-gray text-black"
              }`}
            >
              <Success message="success_message_info" />
            </div>
          ) : unsuccess ? (
            <div
              className={`w-full lg:h-[85%] h-[75%] lg:mb-0 mb-16 rounded-[10px] flex justify-center items-center gap-5 flex-col tr ${
                darkMode
                  ? "bg-black text-white"
                  : "bg-secondary-gray text-black"
              }`}
            >
              <Unsuccess message="unsuccess_info_info" />
            </div>
          ) : isLoading ? (
            <div
              className={`w-full lg:h-[85%] h-[75%] lg:mb-0 mb-16 rounded-[10px] flex justify-center items-center gap-5 flex-col tr ${
                darkMode
                  ? "bg-black text-white"
                  : "bg-secondary-gray text-black"
              }`}
            >
              <CircularProgress color="inherit" />
            </div>
          ) : (
            <div
              className={`w-full lg:h-[85%] h-[75%] lg:mb-0 mb-16 rounded-[10px] flex justify-center items-center gap-5 flex-col tr ${
                darkMode
                  ? "bg-black text-white"
                  : "bg-secondary-gray text-black"
              }`}
            >
              <div className="flex flex-col w-full items-center">
                <span className="sm:w-[70%] w-[90%] flex items-end flex-col font-hnLight">
                  <span>{t("name")}</span>
                  <input
                    className={`w-full sm:py-5 py-3 px-5 outline-none ${
                      darkMode ? "bg-dm-bg" : "bg-lm-bg"
                    }`}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
                <span className="sm:w-[70%] w-[90%] flex items-end flex-col font-hnLight">
                  <span>{t("email")}</span>
                  <input
                    className={`w-full sm:py-5 py-3 px-5 outline-none ${
                      darkMode ? "bg-dm-bg" : "bg-lm-bg"
                    }`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
                <span className="sm:w-[70%] w-[90%] flex items-end flex-col font-hnLight">
                  <span>{t("company")}</span>
                  <input
                    className={`w-full sm:py-5 py-3 px-5 outline-none ${
                      darkMode ? "bg-dm-bg" : "bg-lm-bg"
                    }`}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </span>
                <span className="sm:w-[70%] w-[90%] flex items-end flex-col font-hnLight">
                  <span>{t("message")}</span>
                  <textarea
                    className={`w-full sm:py-5 py-3 px-5 outline-none ${
                      darkMode ? "bg-dm-bg" : "bg-lm-bg"
                    }`}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </span>
              </div>
              <div className="sm:w-[70%] w-[90%] flex md:justify-end justify-start">
                <button
                  className={`group flex justify-between md:w-[230px] w-[200px] items-center tr py-2 px-5 border-[1px] rounded-[10px] ${
                    darkMode
                      ? "border-white hover:bg-white"
                      : "border-black hover:bg-black "
                  }`}
                  onClick={() => handleUpload()}
                >
                  <span
                    className={`tr font-hnLight text-[20px] ${
                      darkMode
                        ? "group-hover:text-black"
                        : "group-hover:text-white"
                    }`}
                  >
                    {t("send")}
                  </span>
                  <div
                    className={`w-[70px] flex justify-end items-center tr h-[2px] group-hover:w-[100px] ${
                      darkMode
                        ? "group-hover:bg-black group-hover:text-black bg-white"
                        : "group-hover:bg-white group-hover:text-white bg-black "
                    }`}
                  >
                    <MdOutlineArrowForwardIos className="text-[20px] -mr-2" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section6;
