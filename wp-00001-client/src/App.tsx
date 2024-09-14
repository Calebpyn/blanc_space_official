//Components
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import BSJobs from "./components/pages/BSJobs";

//Hooks
import { useState } from "react";

//Context
import { DarkMode } from "./contexts/DarkMode";

//Routes
import { HashRouter, Route, Routes } from "react-router-dom";

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
              <Route path="/jobs" element={<BSJobs />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </DarkMode.Provider>
  );
}

export default App;
