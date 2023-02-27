import "./SelectRegionElem.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; //IoIosArrowUp
import { useState } from "react";

function SelectRegionElem({
  GetRegionName,
  ThemeMode,
  // ShowAndHiddRegionsList,
}) {
  const [DisplayOfListRegion, setDisplayOfListRegion] = useState(
    ThemeMode + " dis-none"
  );
  function handelShowAndHiddenRegions() {
    setDisplayOfListRegion(
      DisplayOfListRegion.includes("dis-none") ? " dis-block " : " dis-none"
    );

    //charkheshe icon select elem
    document.querySelector(".arrow-down").classList.toggle("dis-none");
    document.querySelector(".arrow-up").classList.toggle("dis-none");

    // برای هندل کردن کلیک روی باکس ریجن سلکت
    // ShowAndHiddRegionsList("RegionSelect");
  }

  function handelRegionName(e) {
    let regionName = e.target.innerHTML;
    setDisplayOfListRegion("dis-none");
    document.querySelector(".filteringBox span").textContent = regionName;
    if (regionName !== "All Country") {
      GetRegionName(e.target.innerHTML);
    } else {
      GetRegionName("");
    }
  }

  return (
    <>
      <div
        className={ThemeMode + " selectBox"}
        onClick={handelShowAndHiddenRegions}
      >
        <div className="filteringBox">
          <span className="filteringBox-title">Filter by Region ... </span>
          <IoIosArrowDown className="filteringBox-icon arrow-down" />
          <IoIosArrowUp className="filteringBox-icon arrow-up dis-none" />
        </div>
        <ul className={" " + DisplayOfListRegion + " " + ThemeMode}>
          <li key="Africa" onClick={handelRegionName}>
            Africa
          </li>
          <li key="Americas" onClick={handelRegionName}>
            Americas
          </li>
          <li key="Asia" onClick={handelRegionName}>
            Asia
          </li>
          <li key="Europe" onClick={handelRegionName}>
            Europe
          </li>
          <li key="Oceania" onClick={handelRegionName}>
            Oceania
          </li>
          <li key="All country" onClick={handelRegionName}>
            All Country
          </li>
        </ul>
      </div>
    </>
  );
}

export default SelectRegionElem;
