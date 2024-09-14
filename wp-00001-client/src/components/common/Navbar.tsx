//Description: Navbar component

//Icons
import { IoCloseOutline } from "react-icons/io5";

//Hooks
import { useContext, useState } from "react";

//Drakmode context
import { DarkMode } from "../../contexts/DarkMode";

//Components
import Switch from "./Switch";

//Translation
import { useTranslation } from "react-i18next";

//Navigation
import { useNavigate } from "react-router-dom";

function Navbar() {
  //Translation
  const { t } = useTranslation();

  //Darkmode context
  const darkModeContext = useContext(DarkMode);
  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { darkMode } = darkModeContext;

  //SideBar state
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  //Navigate
  const navigate = useNavigate();

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } w-full h-[100px] flex justify-between items-center pl-6 lg:px-12 z-[999] fixed top-0 tr`}
    >
      <div className="gap-9 flex items-center">
        <span
          className="font-gopherBold text-3xl select-none cursor-pointer"
          onClick={() => navigate("/")}
        >
          BLANC_SPACE
        </span>
        <div className="hidden lg:flex">
          <Switch />
        </div>
      </div>

      <div className="gap-16 hidden font-hnLight items-center lg:flex ml-5 select-none">
        <span className="cursor-pointer hover:scale-105 tr">
          {t("about_us")}
        </span>
        <span className="cursor-pointer hover:scale-105 tr">
          {t("who_we_are")}
        </span>
        <span className="cursor-pointer hover:scale-105 tr">
          {t("what_we_do")}
        </span>
        <span
          onClick={() => {
            navigate("/jobs");
          }}
          className="cursor-pointer hover:scale-105 tr"
        >
          {t("work_with_us")}
        </span>
        <span className="cursor-pointer hover:scale-105 tr">
          {t("contact")}
        </span>
      </div>

      <div
        className="flex flex-col gap-2 mr-6 lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-[30px] h-[1px] ${darkMode ? "bg-white" : "bg-black"}`}
        ></div>
        <div
          className={`w-[30px] h-[1px] ${darkMode ? "bg-white" : "bg-black"}`}
        ></div>
        <div
          className={`w-[30px] h-[1px] ${darkMode ? "bg-white" : "bg-black"}`}
        ></div>
      </div>

      <div
        className={`fixed right-0 h-screen top-0 w-[50%] z-[9999]  backdrop-blur-sm flex-col flex tr justify-between px-5 ${
          darkMode
            ? "text-white bg-black bg-opacity-60"
            : "bg-white bg-opacity-60 text-black"
        } ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        <div>
          <div className="h-[100px] flex justify-start items-center">
            <IoCloseOutline
              className="text-5xl cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          <div className="flex-col font-hnLight flex gap-10">
            <span>{t("about_us")}</span>
            <span>{t("who_we_are")}</span>
            <span>{t("what_we_do")}</span>
            <span>{t("work_with_us")}</span>
            <span>{t("contact")}</span>
          </div>
        </div>
        <div className="pb-10">
          <Switch />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
