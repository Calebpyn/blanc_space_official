//Description: Home page

//Components
import Section1 from "../home/Section1";
import Section2 from "../home/Section2";
import Section4 from "../home/Section4";

function Home() {
  return (
    <div className="w-full flex flex-col">
      <Section1 />
      <Section2 />

      <Section4 />
    </div>
  );
}

export default Home;
