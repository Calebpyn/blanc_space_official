//Description: Home page

//Hooks
import { useEffect } from "react";

//Components
import Section1 from "../home/Section1";
import Section2 from "../home/Section2";
import Section4 from "../home/Section4";
import Section5 from "../home/Section5";
import Section6 from "../home/Section6";
import Footer from "../common/Footer";

function Home() {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col">
      <Section1 />
      <Section2 />

      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default Home;
