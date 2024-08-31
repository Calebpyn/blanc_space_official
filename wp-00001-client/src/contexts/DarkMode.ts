//Hooks
import { createContext } from "react";

//Darkmode Context
interface DarkModeContext {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const DarkMode = createContext<DarkModeContext | undefined>(undefined);
