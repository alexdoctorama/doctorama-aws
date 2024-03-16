import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import IMG01 from "../../../assets/images/doctor-thumb-02.jpg";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import Header from "../../header";
import Footer from "../../footer";
import { useLocation } from "react-router-dom";
import "./../../../assets/css/booking.css"; // Create a CSS file named booking.css in the same directory as your Booking component


//TODO

const Booking = (props) => {
  const location = useLocation();
  const doctor_uuid = location.state.doctor_uuid;
  const feature = location.state.feature;
  console.log("Feature is: " + feature);

  const [specialistAvailability, setSpecialistAvailability] = useState(null);

  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [selectedSlotDate, setSelectedSlotDate] = useState(null);
  const [selectedSlotTime, setSelectedSlotTime] = useState(null);

  const [patientUuuid, setPatiendUuid] = useState(null);
  //Get patient uuid from token
  //   const token = localStorage.getItem('token');
  //   const base64Url = token.split('.')[1];
  //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   const payload = JSON.parse(atob(base64));
  //   const patient_uuid = payload.uuid;


  const handleSlotClick = (slotId, date, time) => {
        setSelectedSlotId(slotId);
        setSelectedSlotDate(date);
        setSelectedSlotTime(time);
        console.log(slotId);
        console.log(date);
        console.log(time);
        console.log(location.state.doctor_name);
  };

  useEffect(() => {
      //Read token from local storage
        const token = localStorage.getItem('token');

        //Check if the token does not exist
        if (!token) {
            console.log("No token found");
        }
        else{
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const payload = JSON.parse(atob(base64));
            setPatiendUuid(payload.uuid);
        }




    // Function to fetch specialist availability data
    const fetchSpecialistAvailability = async () => {
      try {
        const response = await fetch(`https://ec2-16-171-147-152.eu-north-1.compute.amazonaws.com:8080/specialistsAvailabilities/specialist/${doctor_uuid}`);
        if (response.ok) {
          const data = await response.json();
          // Set specialist availability data in state
          setSpecialistAvailability(data);
        } else {
          // Handle error response
          console.error('Error fetching specialist availability');
        }
      } catch (error) {
        // Handle fetch error
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchSpecialistAvailability();
  }, [doctor_uuid]);

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const timeString = dateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return timeString;
  };

  const formatTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  const formatDay = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return dateTime.toLocaleDateString([], options);
  };

  const organizeAvailabilityByDay = (availability) => {
    const availabilityByDay = {};
    availability.forEach((slot) => {
      const date = slot.specialistAvailabilityStartDate.split('T')[0];
      if (!availabilityByDay[date]) {
        availabilityByDay[date] = [];
      }
      availabilityByDay[date].push(slot);
    });
    return availabilityByDay;
  };

  console.log(doctor_uuid);
  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Booking</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/index-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Booking
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
          <div className="container">
              <div className="row">

                  <div className="col-12">
                      <div className="booking-doc-info">
                          <Link
                              to="/patient/doctor-profile"
                              className="booking-doc-img"
                          >
                              <img src={IMG01} alt="User"/>
                          </Link>
                          <div className="booking-info">
                              <h4>
                                  <Link to="/patient/doctor-profile">
                                      {location.state.doctor_name} {location.state.doctor_surname}
                                  </Link>
                              </h4>
                              <div className="rating">
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star filled"></i>
                                  <i className="fas fa-star"></i>
                                  <span className="d-inline-block average-rating ms-1">
                                        35
                                      </span>
                              </div>
                              {/*<p className="text-muted mb-0">*/}
                              {/*  <i className="fas fa-map-marker-alt"></i> Newyork, USA*/}
                              {/*</p>*/}
                          </div>
                      </div>
                  </div>
              </div>
              <br></br>
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-body">
                          <div className="booking-doc-info">
                              <div className="col-md-12">
                                  {/* Display specialist availability */}
                                  {specialistAvailability && (
                                      <div className="time-slot">
                                          {Object.entries(organizeAvailabilityByDay(specialistAvailability)).map(([day, slots]) => (
                                              <div key={day}>
                                                  <br></br>
                                                  <h4>{formatDay(day)}</h4>
                                                  <br></br>
                                                  <ul className="clearfix">
                                                      {slots.map((slot, index) => (
                                                          <li key={index}>
                                                              <button
                                                                  id={`availability-${slot.specialistAvailabilityId}`}
                                                                  className={`timing-btn ${selectedSlotId === slot.specialistAvailabilityId ? 'selected' : ''}`}
                                                                  onClick={() => handleSlotClick(slot.specialistAvailabilityId, day, slot.specialistAvailabilityStartDate)}
                                                              >
                                                                  <span>{formatTime(slot.specialistAvailabilityStartDate)}</span>
                                                              </button>
                                                          </li>
                                                      ))}
                                                  </ul>
                                              </div>
                                          ))}
                                      </div>
                                  )}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="submit-section proceed-btn text-end">
                      <Link
                          className="btn btn-primary submit-btn"
                          to={{
                              pathname: "/patient/checkout",
                              state: { availability: selectedSlotId, doctor_name: location.state.doctor_name, doctor_surname: location.state.doctor_surname, date: selectedSlotDate, time: selectedSlotTime, doctor_uuid: doctor_uuid, patient_uuid: patientUuuid, feature: feature}
                          }}
                      >
                          Proceed to Pay
                      </Link>
                  </div>
              </div>
          </div>
          </div>
      </div>

      <Footer {...props} />
    </div>
  );
};

export default Booking;
