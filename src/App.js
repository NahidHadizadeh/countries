import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import { Container, Row } from "react-bootstrap";
import CardElem from "./Card/Card.js";
import NavbarElem from "./Header/Navbar.js";
import InputElem from "./Input/InputElem";
import SelectRegionElem from "./SelectRegionElem/SelectRegionElem.js";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./Details/Details";

function App() {
  const [RegionName, setRegionName] = useState("");
  const [CountryName, setCountryName] = useState("");
  const [ThemeMode, setThemeMode] = useState("");

  function GetRegionName(e) {
    setRegionName(e);
  }
  function GetNameCountry(e) {
    setCountryName(e);
  }
  function handleThemeMode(e) {
    if (e === "sunMood") {
    } else {
    }
    setThemeMode(e);
  }
  // function ShowAndHiddRegionsList(RegionSelect) {
  //   setTargetClickForShowUL(RegionSelect);
  // }
  // function ShowAndHide(e) {
  //   console.log(e.target);
  //   const ulElem = document.querySelector("ul");
  //   // console.log("targetClickForShowUL", targetClickForShowUL);
  //   // if (targetClickForShowUL === "") {
  //   //   console.log("=");
  //   //   setTargetClickForShowUL("");
  //   // } else {
  //   console.log("!=");
  //   if (ulElem.classList[0].includes("dis-block")) {
  //     console.log("ul block");
  //     ulElem.classList.remove("dis-block");
  //     ulElem.classList.add("dis-none");
  //     document.querySelector(".arrow-down").classList.toggle("dis-none");
  //     document.querySelector(".arrow-up").classList.toggle("dis-none");
  //   }
  //   // }
  //   // console.log(document.querySelector("ul").classList[0]);
  // }

  return (
    <>
      <NavbarElem handleThemeMode={handleThemeMode} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="parentElem">
              <Container fluid>
                <Row className="pt-4 pb-4 justify-content-between">
                  <div className="col-md-4 col-sm-5 col-12  px-0 ">
                    <InputElem
                      GetNameCountry={GetNameCountry}
                      ThemeMode={ThemeMode}
                    />
                  </div>
                  <div className="col-md-4 col-xl-2 col-sm-6 col-12 pl-0 ">
                    <SelectRegionElem
                      GetRegionName={GetRegionName}
                      ThemeMode={ThemeMode}
                      // ShowAndHiddRegionsList={ShowAndHiddRegionsList}
                    />
                  </div>
                </Row>
                <Row className="rowOfCards">
                  <CardElem
                    RegionName={RegionName}
                    CountryName={CountryName}
                    ThemeMode={ThemeMode}
                  />
                </Row>
              </Container>
            </div>
          }
        />

        <Route
          path="/details/:country"
          element={<Details ThemeMode={ThemeMode} />}
        />
      </Routes>
    </>
  );
}

export default App;
