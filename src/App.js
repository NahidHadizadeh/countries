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


  return (
    <>
      <NavbarElem handleThemeMode={handleThemeMode} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="parentElem">
              <Container fluid-sm>
                <Row className="pt-4 pb-4 justify-content-between pe-4">
                  <div className="col-md-4 col-sm-5 col-11  px-0 col-of-search ">
                    <InputElem
                      GetNameCountry={GetNameCountry}
                      ThemeMode={ThemeMode}
                    />
                  </div>
                  <div className="col-md-4 col-xl-2 col-sm-6 col-11 pl-0 col-of-search">
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
