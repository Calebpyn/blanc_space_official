//Decription: Unsuccessfull request

//Hooks
import { useContext } from "react";

//Icons
import { MdOutlineSick } from "react-icons/md";

//DarkMode
import { DarkMode } from "../../contexts/DarkMode";

//Translation
import { useTranslation } from "react-i18next";

//Props type
type UnsuccessProps = {
  message: string;
};

const Unsuccess: React.FC<UnsuccessProps> = ({ message }) => {
  //Translation
  const { t } = useTranslation();

  //Darkmode
  const darkModeContext = useContext(DarkMode);
  if (!darkModeContext)
    throw new Error("DarkModeContext must be used within a DarkModeProvider");

  const { darkMode } = darkModeContext;
  return (
    <div className="w-full h-full flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center tr">
        <span className={`text-9xl ${darkMode ? "text-white" : "text-black"}`}>
          <MdOutlineSick />
        </span>
        <span
          className={`text-2xl font-hnLight ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {t("unsuccess_message")}
        </span>
        <span className="mt-3 text-sm">{t(`${message}`)}</span>
      </div>
    </div>
  );
};

export default Unsuccess;
