//Hooks
import { useContext } from "react";

//Drakmode context
import { DarkMode } from "../../contexts/DarkMode";

function Switch() {
  //Darkmode context
  const darkModeContext = useContext(DarkMode);
  if (!darkModeContext) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  const { darkMode, setDarkMode } = darkModeContext;


  return (
    <div className={`${darkMode ? "bg-white justify-end" : "bg-black justify-start"} w-[70px] h-[30px] rounded-full flex items-center px-1 cursor-pointer`} onClick={() => {
        setDarkMode(!darkMode)
    }}>
      <div className={`${darkMode ? "bg-black" : "bg-white"} h-[22px] w-[22px] rounded-full`}></div>
    </div>
  );
}

export default Switch;
