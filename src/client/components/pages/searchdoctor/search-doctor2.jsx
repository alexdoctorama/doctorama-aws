import React, { useEffect, useState } from "react";
import Header from "../../header";
// import Searchfilter from "./searchFilter";
import StickyBox from "react-sticky-box";
import Doctors from "./doctors";
import Footer from "../../footer";
import {Link, useLocation} from "react-router-dom";
// import Slider from "react-slider";

const SearchDoctor2 = (props) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedOption = searchParams.get('option');
  const selectedFeature = searchParams.get('feature');
  console.log(selectedOption);
  // let pathname = props.location.pathname;

  // if (props.location.pathname === "/patient/search-doctor2") {
  //   require("../../../assets/css/feather.css");
  // }
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(5000);

  useEffect(() => {
    if (document.getElementById("price-range")) {
      setMinValue(10);
      setMaxValue(10000);

      const slider = document.getElementById("price-range");
      slider.addEventListener("input", handleSliderChange);

      return () => {
        slider.removeEventListener("input", handleSliderChange);
      };
    }
  }, []);

  const handleSliderChange = (event) => {
    const min = parseInt(event.target.value.split(",")[0]);
    const max = parseInt(event.target.value.split(",")[1]);

    setMinValue(min);
    setMaxValue(max);
  };
  return (
    <div className="main-wrapper">
      <Header {...props} />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Search {selectedOption}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Search {selectedOption}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      <div className="doctor-content content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 map-view">
              <div className="row">
                <div className="col-lg-3  theiaStickySidebar">

                </div>

                <div className="col-lg-9">
                  <Doctors selectedOption={selectedOption} selectedFeature={selectedFeature}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </div>
  );
};

export default SearchDoctor2;
