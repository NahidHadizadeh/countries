import { Container, Navbar } from "react-bootstrap";
import { Sun, Moon } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavbarElem({ handleThemeMode }) {
  function changeMode(
    BGColor, // = "hsl(207, 26%, 17%)", //hsl(0, 0%, 98%)
    textColor, //= "hsl(0, 0%, 100%)", //hsl(200, 15%, 8%)
    BGColorElem, // = " hsl(209, 23%, 22%)" //hsl(0, 0%, 100%)
    textSpanMode
  ) {
    const spanModeText = document.querySelector(".modeBox span");
    spanModeText.textContent = textSpanMode;
    document.querySelector(".modeBox").style.color = textColor;

    document.body.style.backgroundColor = BGColor;
    document.body.style.color = textColor;
    document.querySelector(".navbar").style.backgroundColor = BGColorElem;
    document.querySelector(".navbar a").style.color = textColor;
  }
  function handelMode() {
    const sunModeElem = document.querySelector(".sunMode");
    const moonModeElem = document.querySelector(".moonMode");
    sunModeElem.style.color = "hsl(0, 0%, 100%)";
    // moonModeElem.
    sunModeElem.classList.toggle("dis-none");
    moonModeElem.classList.toggle("dis-none");
    if (sunModeElem.classList.contains("dis-none")) {
      // mode is light
      handleThemeMode("");

      // func
      changeMode(
        "hsl(0, 0%, 98%)",
        "hsl(200, 15%, 8%)",
        "hsl(0, 0%, 100%)",
        "Dark Mode"
      );
    }
    if (moonModeElem.classList.contains("dis-none")) {
      // mode is dark
      handleThemeMode("dark-text-color dark-bg-elem");

      // func
      changeMode(
        "hsl(207, 26%, 17%)",
        "hsl(0, 0%, 100%)",
        "hsl(209, 23%, 22%)",
        "Light Mode"
      );
    }
  }
  return (
    <Navbar>
      <Container fluid>
        {/* <Navbar.Brand href="#">Where in the world?</Navbar.Brand> */}
        <Link className="navbar-brand" to={"/"}>
          Where in the world?
        </Link>

        <div className="modeBox " onClick={handelMode}>
          <Sun className="mx-2 dis-none sunMode" style={{ color: "black" }} />
          <Moon className="mx-2 moonMode" />
          <span>Dark Mode</span>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarElem;
