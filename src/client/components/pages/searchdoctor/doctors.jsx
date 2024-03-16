import React, {useEffect, useState} from "react";
// import { Doctor01, Doctor2, Doctor3 } from "../../home/image";
// import { doctor04, doctor05 } from "../aboutus/img";
import {
  FiAward,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiGrid,
  FiHeart,
  FiInfo,
  FiList,
  FiMapPin,
  FiThumbsUp,
} from "react-icons/fi";
import {
  doctor_13,
  doctor_14,
  doctor_15,
  doctor_16,
  doctor_17,
} from "../../imagepath";
import { Link } from "react-router-dom";
import Select from "react-select";

//TODO

const Doctors = (props) => {
  const [doctors, setDoctors] = useState([]);
  const selectedOption = props.selectedOption;
  const selectedFeature = props.selectedFeature;
  const [isLogged, setIsLogged] = useState(false);

  const parameter = "your_parameter_value";

  //Function to read the token
    const readToken = () => {
        let token = localStorage.getItem("token");


        //Check if the token does not exist
        if (!token) {
            console.log("Token does not exist");
            setIsLogged(false);
            return null;
        }
        else {
          let decoded = JSON.parse(atob(token.split('.')[1]));

          //Check if the token is expired
          if (Date.now() >= decoded.exp * 1000) {
            console.log("Token is expired");
            localStorage.removeItem("token");
            return null;
          }

          setIsLogged(true);
        }
        console.log("lnsadnlasd");
    }



  useEffect(() => {
    readToken();
    fetch(`http://ec2-16-171-147-152.eu-north-1.compute.amazonaws.com:8080/users/${selectedOption}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(data => {
          setDoctors(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
  }, []);

  return (
    <div>
      <div className="doctor-filter-info">
        <div className="doctor-filter-inner">
          <div>
            <div className="doctors-found">
              {/*<p>*/}
              {/*  <span>100 Doctors found for:</span> Dentist in San francisco,*/}
              {/*  California*/}
              {/*</p>*/}
            </div>
            {/*<div className="doctor-filter-availability">*/}
            {/*  <p>Availability</p>*/}
            {/*  <div className="status-toggle status-tog">*/}
            {/*    <input type="checkbox" id="status_6" className="check" />*/}
            {/*    <label htmlFor="status_6" className="checktoggle">*/}
            {/*      checkbox*/}
            {/*    </label>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="doctor-filter-option">
            <div className="doctor-filter-sort">
              {/*<p>Sort</p>*/}
              {/*<div className="doctor-filter-select">*/}
              {/*  <Select*/}
              {/*    className="select w-100"*/}
              {/*    defaultValue={options.find((option) => option.value === 1)}*/}
              {/*    options={options}*/}
              {/*    placeholder="A to Z"*/}
              {/*    isSearchable={false}*/}
              {/*  />*/}
              {/*</div>*/}
            </div>
            {/*<div className="doctor-filter-sort">*/}
            {/*  <p className="filter-today d-flex align-items-center">*/}
            {/*    <FiCalendar /> Today 10 Aug to 20 Aug*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/*<div className="doctor-filter-sort">*/}
            {/*  <ul className="nav">*/}
            {/*    <li>*/}
            {/*      <Link to="/patient/doctor-list" id="map-list">*/}
            {/*        <FiMapPin />*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/patient/doctor-grid">*/}
            {/*        <FiGrid />*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <Link to="/patient/doctor-list" className="active">*/}
            {/*        <FiList />*/}
            {/*      </Link>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      {doctors.map((doctor, index) => (
          <div key={index}>
            <div className="card doctor-card">
              <div className="card-body">
                <div className="doctor-widget-one">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <Link to="/patient/doctor-profile">
                        <img src={doctor_13} className="img-fluid" alt={`Doctor ${index + 1}`} />
                      </Link>
                      <div className="favourite-btn">
                        <Link to="#" className="favourite-icon">
                          <i className="fas fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">
                        <Link to="/patient/doctor-profile">{doctor.name} {doctor.surname}</Link>
                        <i className="fas fa-circle-check" />
                      </h4>
                      <p className="doc-speciality">{doctor.basicRole}</p>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <FiMapPin />
                          {doctor.distance} - {doctor.location} <Link to="#">Get Direction</Link>
                        </p>
                        <p className="doc-location">
                          <FiAward /> {doctor.experience} Years of Experience
                        </p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                        <span>
                          <i className="fas fa-star" /> {doctor.rating}
                        </span>{" "}
                          ({doctor.reviews} Reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <FiClock />
                          &nbsp;
                          <span className={`available-date ${doctor.availability ? 'available-today' : 'available-tomorrow'}`}>
                          {doctor.availability ? 'Available Today' : 'Available Tomorrow'}
                        </span>
                        </li>
                        <li>
                          <FiThumbsUp /> {doctor.ratingPercentage}%{" "}
                          <span className="votes">({doctor.totalVotes} Votes)</span>
                        </li>
                        <li>
                          <FiDollarSign /> ${doctor.consultationFee} <FiInfo />
                        </li>
                      </ul>
                    </div>
                    <div className="clinic-booking book-appoint">
                        {isLogged ? (
                            <Link
                                className="btn btn-primary"
                                to={{
                                    pathname: "/patient/booking1",
                                    state: {
                                        doctor_name: doctor.name,
                                        doctor_surname: doctor.surname,
                                        doctor_uuid: doctor.userUuid,
                                        feature: selectedFeature
                                    }
                                }}
                            >
                                Book Appointment
                            </Link>
                        ) : (
                            <span onClick={() => alert("You must log in first.")}>
                             <Link className="btn btn-primary"
                                   to={{
                                       pathname: "/login",
                                       state: {
                                           previous_url: `/patient/search-doctor2?option=${selectedOption}&feature=${selectedFeature}`,
                                       }
                                   }}
                             >
                                Book Appointment
                                 </Link>
              </span>
                        )}
                      {/*<Link className="btn btn-primary-light" to="/patient/booking2">*/}
                      {/*  Book Online Consultation*/}
                      {/*</Link>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Doctors;
