import ReactFullpage from "@fullpage/react-fullpage";
import SecondPage from "./SecondPage";
import FirstPage from "./FirstPage";

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey="gplv3-license"
    scrollingSpeed={1000} /* Options here */
    navigation="true"
    navigationPosition="left"
    anchors={["about", "work", "contact"]}
    menu="#navMenu"
    sectionsColor={[
      "linear-gradient(39deg, var(--pine) 24%, var(--blue) 84%);",
      "linear-gradient(39deg, rgba(255,164,93,1) 24%, rgba(225,106,61,1) 84%)",
      "#7BAABE",
      "whitesmoke",
    ]}
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
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
