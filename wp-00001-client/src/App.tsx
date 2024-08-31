//Components
import Navbar from "./components/common/Navbar";

//Hooks
import { useState } from "react";

//Context
import { DarkMode } from "./contexts/DarkMode";

//Routes
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  //Context state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <HashRouter>
        <div
          className={`w-full h-screen relative tr ${
            darkMode ? "bg-dm-bg" : "bg-lm-bg"
          }`}
        >
          <Navbar />
          <div className="h-screen pt-[100px] overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </DarkMode.Provider>
  );
}

export default App;
