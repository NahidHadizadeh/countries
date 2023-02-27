import { useLocation, Link } from "react-router-dom";
import "./details.css";
import { BsArrowLeft } from "react-icons/bs";
import { Row, Container, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function Details({ ThemeMode }) {
  const location = useLocation();
  const country = location.state;
  let NativeNameKey = Object.keys(country.name.nativeName);
  const currenciesKey = Object.keys(country.currencies);

  const [CountryBorders, setCountryBorders] = useState([]);
  const CountryBordersCioc = country.borders;

  useEffect(() => {
    function getBorderCountrysData(keshvar) {
      for (let i = 0; i < CountryBordersCioc.length; i++) {
        if (keshvar.cioc && keshvar.cioc === CountryBordersCioc[i]) {
          return keshvar;
        } else if (keshvar.cca3 && keshvar.cca3 === CountryBordersCioc[i]) {
          return keshvar;
        }
      }
      return false;
    }
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        if (CountryBordersCioc) {
          let counrtys = data?.filter(getBorderCountrysData);

          setCountryBorders(counrtys);
        }
      });
  }, [CountryBordersCioc]);

  const [
    url,
    titleName,
    nameCountry,
    population,
    region,
    subRegion,
    capital,
    domain,
    currencies,
    lang,
  ] = [
    country.flags.png,
    country.name.common,
    country.name.nativeName[NativeNameKey[0]]
      ? country.name.nativeName[NativeNameKey[0]].common
      : "",
    country.population,
    country.region,
    country.subregion,
    country.capital[0],
    country.tld,
    country.currencies ? country.currencies[currenciesKey[0]].name : " ",
    country.languages ? country.languages[NativeNameKey[0]] : " ",
  ];

  return (
    <>
      <Container fluid>
        <Row className="pt-4 pb-4 justify-content-between ml-1">
          <Link to="/" className={ThemeMode + " btn back-btn mt-4 "}>
            <BsArrowLeft className="back-arrow" /> Back
          </Link>
        </Row>
        <Row className="rowOfCards mt-4">
          <Col xs="12" md="6" className="flag-box pe-md-5">
            <img src={url} alt="flag country" />
          </Col>
          <Col xs="12" md="6" className=" pl-md-5 py-3">
            <p className="title">{titleName}</p>
            <Row className="details">
              <Col xs="12" sm="6" className="details-col">
                <p className="item-sub">
                  Native name: <span>{nameCountry}</span>
                </p>

                <p className="item-sub">
                  Population: <span>{population}</span>
                </p>

                <p className="item-sub">
                  Region: <span>{region}</span>
                </p>

                <p className="item-sub">
                  Sub Region: <span>{subRegion}</span>
                </p>

                <p className="item-sub">
                  Capital: <span>{capital}</span>
                </p>
              </Col>
              <Col xs="12" sm="6" className="details-col">
                <p className="item-sub">
                  Top Level Domain: <span>{domain}</span>
                </p>

                <p className="item-sub">
                  Currencies: <span>{currencies}</span>
                </p>

                <p className="item-sub">
                  Languages: <span>{lang}</span>
                </p>
              </Col>
              <Row>
                <p>
                  <span className="item-sub "> Border Countries: </span>
                  {CountryBorders?.map((country, index) => {
                    return (
                      <button
                        key={index}
                        className={ThemeMode + " border-counrty mx-2 mb-2"}
                      >
                        {country.name.common}
                      </button>
                    );
                  })}
                </p>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;
