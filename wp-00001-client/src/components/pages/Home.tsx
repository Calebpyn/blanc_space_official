//Description: Home page

//Hooks
import { useEffect } from "react";

//Components
import Section1 from "../home/Section1";
import Section2 from "../home/Section2";
import Section3 from "../home/Section3";
import Section4 from "../home/Section4";
import Section5 from "../home/Section5";
import Section6 from "../home/Section6";
import Footer from "../common/Footer";

//Props type
type HomeProps = {
  section1Ref: React.RefObject<HTMLDivElement>;
  section2Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  section4Ref: React.RefObject<HTMLDivElement>;
  section5Ref: React.RefObject<HTMLDivElement>;
  section6Ref: React.RefObject<HTMLDivElement>;
};

const Home: React.FC<HomeProps> = ({
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
  section5Ref,
  section6Ref,
}) => {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full" ref={section1Ref}>
        <Section1 />
      </div>
      <div className="w-full" ref={section2Ref}>
        <Section2 />
      </div>
      <div className="w-full" ref={section3Ref}>
        <Section3 />
      </div>
      <div className="w-full" ref={section4Ref}>
        <Section4 />
      </div>
      <div className="w-full" ref={section5Ref}>
        <Section5 />
      </div>
      <div className="w-full" ref={section6Ref}>
        <Section6 />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
