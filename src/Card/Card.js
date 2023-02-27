import { Card, Col } from "react-bootstrap";
import "./card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardElem({ RegionName, CountryName, ThemeMode }) {
  const [listCountry, setListCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setListCountry(data);
        if (RegionName) {
          let counrtys = data?.filter(
            (country) => country.region === RegionName
          );

          setListCountry(counrtys);
        }
        if (CountryName) {
          let counrtys = data?.filter((country) =>
            country?.name.common.includes(CountryName)
          );

          setListCountry(counrtys);
        }
        if (RegionName && CountryName) {
          let counrtys = data?.filter(
            (country) =>
              country?.name.common.includes(CountryName) &&
              country.region === RegionName
          );

          setListCountry(counrtys);
        }
      });
  }, [RegionName, CountryName]);

  return listCountry.length ? (
    listCountry?.map((country, index) => {
      return (
        <Col key={index} xs="12" lg="3" sm="6" md="4" className="mb-5 col">
          <Link to={`/details/${country.name.common}`} state={country}>
            <Card className={ThemeMode}>
              <Card.Img variant="top" src={country.flags.png} />
              <Card.Body>
                <Card.Title>{country.name.common}</Card.Title>
                <Card.Text className="titleOfItem">
                  Populotion:<span>{country.population}</span>
                </Card.Text>
                <Card.Text className="titleOfItem">
                  Populotion:<span>{country.region}</span>
                </Card.Text>
                <Card.Text className="titleOfItem">
                  Populotion:<span>{country.capital}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
          {/* </a> */}
        </Col>
      );
    })
  ) : CountryName ? (
    <strong className="m-3">Nothing found...</strong>
  ) : (
    <p className="m-3">Loading....</p>
  );
  // }
}

export default CardElem;
