//Description: Success on job application

//Hooks
import { useContext } from "react";

//Icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

//DarkMode
import { DarkMode } from "../../contexts/DarkMode";

//Translation
import { useTranslation } from "react-i18next";

//Props type
type SuccessProps = {
  message: string;
};

const Success: React.FC<SuccessProps> = ({ message }) => {
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
          <IoIosCheckmarkCircleOutline />
        </span>
        <span
          className={`text-2xl font-hnLight ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {t(`${message}`)}
        </span>
      </div>
    </div>
  );
};

export default Success;
