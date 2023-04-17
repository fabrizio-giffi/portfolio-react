import ReactFullpage from "@fullpage/react-fullpage";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";
import ThirdPage from "./ThirdPage";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey="gplv3-license"
    scrollingSpeed={1000}
    navigation="true"
    navigationPosition="left"
    anchors={["about", "work", "contact"]}
    menu="#navMenu"
    render={({ state }) => {
      return (
        <ReactFullpage.Wrapper>
          <div id="first" className="section">
            <FirstPage />
          </div>
          <div id="second" className="section">
            <SecondPage />
          </div>
          <div id="third" className="section">
            <ThirdPage />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
