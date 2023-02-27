import "./input.css";
import { InputGroup, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function InputElem({ GetNameCountry, ThemeMode }) {
  function handleCountryNameInput(e) {
    if (e.target.value && e.target.tagName === "input") {
      let SearchValue = `${
        e.target.value[0]?.toUpperCase() +
        e.target.value?.toLowerCase().slice(1)
      }`;
      GetNameCountry(SearchValue);
      // click on search icon
    } else if (
      e.target.tagName !== "input" &&
      document.querySelector(".form-control").value
    ) {
      let SearchValue = `${
        document.querySelector(".form-control").value[0]?.toUpperCase() +
        document.querySelector(".form-control").value?.toLowerCase().slice(1)
      }`;
      GetNameCountry(SearchValue);
      // if input was empty,send "" not undefined
    } else {
      GetNameCountry("");
    }
  }

  return (
    <>
      <InputGroup className={ThemeMode + " mb-3 px-3 "}>
        <BsSearch
          className="m-auto search-icon"
          onClick={handleCountryNameInput}
        />
        <Form.Control
          className={ThemeMode}
          placeholder="search for a country"
          onChange={handleCountryNameInput}
        />
      </InputGroup>{" "}
    </>
  );
}

export default InputElem;
