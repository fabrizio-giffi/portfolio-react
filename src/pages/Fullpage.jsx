import ReactFullpage from "@fullpage/react-fullpage";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import ThirdPage from "./ThirdPage";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey="gplv3-license"
    scrollingSpeed={1000} /* Options here */
    navigation="true"
    navigationPosition="left"
    anchors={["about", "work", "contact"]}
    menu="#navMenu"
    sectionsColor={["", "var(--snow)", ""]}
    render={({ state }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <FirstPage />
          </div>
          <div className="section">
            <SecondPage />
          </div>
          <div className="section">
            <ThirdPage />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
