//Components
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import BSJobs from "./components/pages/BSJobs";

//Hooks
import { useRef, useState } from "react";

//Context
import { DarkMode } from "./contexts/DarkMode";

//Routes
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  //Context state
  const [darkMode, setDarkMode] = useState<boolean>(false);

  //Scroll function
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);
  const section4Ref = useRef<HTMLDivElement | null>(null);
  const section5Ref = useRef<HTMLDivElement | null>(null);
  const section6Ref = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    let topPosition = 0;

    if (section === "home") {
      topPosition =
        section1Ref.current!.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "slogan") {
      topPosition =
        section2Ref.current!.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "about_us") {
      topPosition =
        section3Ref.current!.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "who_we_are") {
      topPosition =
        section4Ref.current!.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "what_we_do") {
      topPosition =
        section5Ref.current!.getBoundingClientRect().top + window.scrollY - 100;
    } else if (section === "contact") {
      topPosition =
        section6Ref.current!.getBoundingClientRect().top + window.scrollY - 100;
    }

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <HashRouter>
        <div
          className={`w-full relative tr ${darkMode ? "bg-dm-bg" : "bg-lm-bg"}`}
        >
          <Navbar scrollToSection={scrollToSection} />
          <div className="pt-[100px]">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    section1Ref={section1Ref}
                    section2Ref={section2Ref}
                    section3Ref={section3Ref}
                    section4Ref={section4Ref}
                    section5Ref={section5Ref}
                    section6Ref={section6Ref}
                  />
                }
              />
              <Route path="/jobs" element={<BSJobs />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </DarkMode.Provider>
  );
}

export default App;
