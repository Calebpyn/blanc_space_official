//Description: Navbar component

//Icons
import { IoCloseOutline } from "react-icons/io5";

//Hooks
import React, { useContext, useEffect, useState } from "react";

//Drakmode context
import { DarkMode } from "../../contexts/DarkMode";

//Components
import Switch from "./Switch";

//Translation
import { useTranslation } from "react-i18next";

//Navigation
import { useLocation, useNavigate } from "react-router-dom";
import Language from "./Language";

//Props type
type NavBarProps = {
  scrollToSection: (section: string) => void;
};

const Navbar: React.FC<NavBarProps> = ({ scrollToSection }) => {
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

  //Scroll with navigate logic
  const [scrollTo, setScrollTo] = useState<string>("");
  const { pathname } = useLocation();

  const handleScroll = (section: string) => {
    if (pathname !== "/") {
      navigate("/");
      setScrollTo(section);
    } else {
      scrollToSection(section);
    }
  };

  useEffect(() => {
    if (pathname == "/") {
      setTimeout(() => {
        scrollToSection(scrollTo);
      }, 100);
    }
  }, [pathname]);

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
        <div className="hidden lg:flex">
          <Language />
        </div>
      </div>

      <div className="gap-16 hidden font-hnLight items-center lg:flex ml-5 select-none">
        <span
          className="cursor-pointer hover:scale-105 tr"
          onClick={() => handleScroll("about_us")}
        >
          {t("about_us")}
        </span>
        <span
          className="cursor-pointer hover:scale-105 tr"
          onClick={() => handleScroll("who_we_are")}
        >
          {t("who_we_are")}
        </span>
        <span
          className="cursor-pointer hover:scale-105 tr"
          onClick={() => handleScroll("what_we_do")}
        >
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
        <span
          className="cursor-pointer hover:scale-105 tr"
          onClick={() => handleScroll("contact")}
        >
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
            <span
              onClick={() => {
                navigate("/");
                handleScroll("about_us");
                setIsOpen(false);
              }}
              className="hover:scale-105 tr cursor-pointer"
            >
              {t("about_us")}
            </span>
            <span
              onClick={() => {
                navigate("/");
                handleScroll("who_we_are");
                setIsOpen(false);
              }}
              className="hover:scale-105 tr cursor-pointer"
            >
              {t("who_we_are")}
            </span>
            <span
              onClick={() => {
                navigate("/");
                handleScroll("what_we_do");
                setIsOpen(false);
              }}
              className="hover:scale-105 tr cursor-pointer"
            >
              {t("what_we_do")}
            </span>
            <span
              onClick={() => {
                navigate("/jobs");
                setIsOpen(false);
              }}
              className="hover:scale-105 tr cursor-pointer"
            >
              {t("work_with_us")}
            </span>
            <span
              onClick={() => {
                navigate("/");
                handleScroll("contact");
                setIsOpen(false);
              }}
              className="hover:scale-105 tr cursor-pointer"
            >
              {t("contact")}
            </span>
          </div>
        </div>
        <div className="pb-10 flex items-center justify-start gap-10">
          <Switch />
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
