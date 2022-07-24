import React from "react";
import { SizeMe } from "react-sizeme";

import { TopSection } from "./components/topSection";
import { World } from "./components/globe";
import { Technologies } from "./components/techSection";
import { Projects } from "./components/carouselSection"


function App() {
  return (
    <>
      <div id="firstRow" className="container">
        <div className="row">
          <div className="col-md-4">
            <TopSection />
          </div>
          <div id="worldcontainer" className="col-md-8">
            <SizeMe>{({ size: { width } }) => (
              <World width={width} height={width} />
            )}</SizeMe>
          </div>
        </div>
      </div>
      <Technologies />
      <Projects />
      <br />
    </>
  );
}

export default App;
