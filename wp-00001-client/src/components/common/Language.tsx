//Description: Language switcher

//Hooks
import { useContext } from "react";

//Translation
import { useTranslation } from "react-i18next";

//Darkmode context
import { DarkMode } from "../../contexts/DarkMode";

//Icons
import { IoIosGlobe } from "react-icons/io";

function Language() {
  //Translation
  const { i18n } = useTranslation();

  //Darkmode context
  const darkModeContext = useContext(DarkMode);
  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { darkMode } = darkModeContext;
  return (
    <span
      className={`text-3xl hover:scale-105 tr cursor-pointer relative items-center group flex-col flex ${
        darkMode ? "text-white" : "text-black"
      }`}
      onClick={() => {
        if (i18n.language == "en") {
          i18n.changeLanguage("es");
        } else if (i18n.language == "es") {
          i18n.changeLanguage("en");
        }
      }}
    >
      <IoIosGlobe />
      <span
        className={`absolute translate-y-[100%] select-none p-1 rounded-md tr ${
          darkMode ? "group-hover:text-white" : "group-hover:text-black"
        } text-transparent text-sm`}
      >
        {i18n.language == "en"
          ? "English"
          : i18n.language == "es"
          ? "Español"
          : null}
      </span>
    </span>
  );
}

export default Language;
