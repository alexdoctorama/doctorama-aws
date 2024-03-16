import React, { useState } from 'react'
import { medalicon, packageicon01, packageicon02, sectionbg03, sectionbg04, stickericon, workicon05, workicon06, workicon07,work_01, work_02, work_03, work_04 } from '../../imagepath'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'
import {Button} from "antd";
 
const BestPackage = () => {
    const [activeTab, setActiveTab] = useState('Doctor');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
    const renderContent = () => {

      switch (activeTab) {
          case 'Doctor':
          return (
            // Render content for Family Care tab
            // You can use the Slider component here with specific settings for Family Care
            <div>
                <div className="how-it-work">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={600}>
                            <div className="work-box">
                                <div className="card-img-right">
                                    <img src={packageicon01} alt="Img"/>
                                </div>
                                <h4>Online Medical Consultation</h4>
                                <p>
                                    Access expert medical care remotely or at the comfort of your place.
                                </p>
                                <br></br>
                                <p>
                                    Receive fast diagnoses and prescriptions in virtual consultations, available 24/7.
                                </p>
                                <br></br>
                                <b>Features</b>
                                <ol>
                                    <li>
                                        Video consultations with expert doctors
                                    </li>
                                    <li>
                                        Order for exams and medical prescription
                                    </li>
                                    <li>
                                        1 Follow-up consultations as needed within the next 5 days
                                    </li>
                                    <li>
                                        Available 24/7
                                    </li>
                                </ol>
                                <br></br>
                                <div className="row">
                                    <Button className="package-btn">
                                        <Link to="/patient/search-doctor2?option=doctor&feature=medconsultation">Book
                                            Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={700}>
                            <div className="work-box bg-green">
                                <div className="work-icon">
                                    <img src={packageicon02} alt="Img"/>
                                </div>
                                <h4>Medical Advice By Doctors</h4>
                                <p>
                                    {" "}
                                    Receive personalized medical advice round the clock from our team of esteemed doctors.
                                </p>
                                <p>
                                    <br></br>
                                </p>
                                <br></br>
                                <b>Features</b>
                                <ol>
                                    <li>
                                        Personalized medical advice and health tips for a healthier life from top doctors
                                    </li>
                                    <li>
                                        Quick resolution of medical Doubts
                                    </li>
                                    <li>
                                        Accessible in Spanish and English
                                    </li>
                                    <li>
                                        Available 24/7
                                    </li>
                                </ol>
                                <div className="row">
                                    <Button className="package-btn">
                                        <Link to="/patient/search-doctor2?option=doctor&feature=medadvice">Book
                                            Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={800}>
                            <div className="work-box bg-pink">
                                <div className="card-img-right">
                                    <img src={packageicon02} alt="Img"/>
                                </div>
                                <h4>Chat</h4>
                                <p>
                                    Chat with our doctors immediate answers to your health inquiries.
                                </p>
                                <div className="row">
                                <Button className="package-btn">
                                        <Link to="/patient">Book Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={800}>
                            <div className="work-box bg-blue">
                                <div className="card-img-right">
                                    <img src={packageicon02} alt="Img"/>
                                </div>
                                <h4>Medical Prescription</h4>
                                <p>
                                    Obtain online prescriptions without in-person doctor visits.
                                </p>
                                <br></br>
                                <p>
                                    Book a video consultation, explain your situation to the doctor, and if the doctor
                                    determines it, receive a digital prescription for your treatment, which you can
                                    present at any pharmacy.
                                </p>
                                <br></br>
                                <b>Features</b>
                                <ol>
                                    <li>
                                        Fast and easy online prescription service
                                    </li>
                                    <li>
                                        Video consultations in English or Spanish
                                    </li>
                                </ol>
                                <div className="row">
                                    <Button className="package-btn">
                                        <Link to="/patient/search-doctor2?option=doctor&feature=medhomevisit">Book
                                            Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={800}>
                            <div className="work-box bg-pink">
                                <div className="card-img-right">
                                    <img src={packageicon02} alt="Img"/>
                                </div>
                                <h4>Medical Home Visits</h4>
                                <p>
                                    Experience personalized care from doctors in the comfort of your home.
                                </p>
                                <br></br>
                                <p>
                                    Book a visit, and our doctors will arrive with equipment for thorough examinations.
                                </p>
                                <br></br>
                                <p>
                                    Receive prescriptions, test orders, or hospitalization recommendations as needed.
                                </p>
                                <br></br>
                                <b>Features</b>
                                <ol>
                                    <li>
                                        Home visits with convenient appointments within 2 hours
                                    </li>
                                    <li>
                                        Thorough physical examinations
                                    </li>
                                    <li>
                                        Medical prescriptions and test orders
                                    </li>
                                    <li>
                                        Hospitalization recommendations if necessary
                                    </li>
                                </ol>
                                <div className="row">
                                    <Button className="package-btn">
                                        <Link to="/patient/search-doctor2?option=doctor&feature=prescription">Book
                                            Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Your content for Family Care */}
            </div>
          );
          case 'Psychologist':
              return (
                  // Render content for Adult Care tab
                  // You can use the Slider component here with specific settings for Adult Care
                  <div>
                      <div className="how-it-work">
                          <div className="row">
                              <h1>Videocall Packages</h1>
                              <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={600}>
                                  <div className="work-box">
                                      <div className="card-img-right">
                                          <img src={packageicon01} alt="Img"/>
                                      </div>
                                      <h4>Single Video Consultation</h4>
                                      <p>
                                          Prioritize mental well-being with experienced psychologists.
                                      </p>
                                      <br></br>
                                      <p>
                                          Enjoy tailored support and strategies for progress.
                                      </p>
                                      <br></br>
                                      <b>Features</b>
                                      <ol>
                                          <li>
                                              45’ consultation
                                          </li>
                                          <li>
                                              Flexible consultation
                                          </li>
                                          <li>
                                              Continued Progress
                                          </li>
                                      </ol>
                                      <br></br>
                                      <div className="row">
                                          <Button className="package-btn">
                                              <Link
                                                  to="/patient/search-doctor2?option=psychologist&feature=psychosession">Book
                                                  Now</Link>
                                          </Button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={700}>
                                  <div className="work-box bg-green">
                                      <div className="card-img-right">
                                          <img src={packageicon02} alt="Img"/>
                                      </div>
                                      <h4>Package: Personalized Psychology Series</h4>
                                      <p>
                                          {" "}
                                          Our series of four online psychology sessions offers tailored support for your
                                          mental well-being with continuity
                                      </p>
                                      <br></br>
                                      <p>
                                          Each session provides personalized guidance and evidence-based strategies to
                                          foster resilience and growth.

                                      </p>
                                      <br></br>
                                      <b>Features</b>
                                      <ol>
                                          <li>
                                              45’ consultation
                                          </li>
                                          <li>
                                              Tailored Support
                                          </li>
                                          <li>
                                              Flexible Scheduling
                                          </li>
                                          <li>
                                              4 sessions
                                          </li>
                                      </ol>
                                      <br></br>
                                      <div className="row">
                                          <Button className="package-btn">
                                              <Link
                                                  to="/patient/booking-success?doctor_name=Package:&doctor_surname=Personalized Psychology Series&date=4&day=sessions">Book
                                                  Now</Link>
                                          </Button>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={800}>
                                  <div className="work-box bg-blue">
                                      <div className="card-img-right">
                                          <img src={packageicon02} alt="Img"/>
                                      </div>
                                      <h4>Package: Personalized Psychology Series</h4>
                                      <p>
                                          {" "}
                                          Our series of four online psychology sessions offers tailored support for your
                                          mental well-being with continuity
                                      </p>
                                      <br></br>
                                      <p>
                                          Each session provides personalized guidance and evidence-based strategies to
                                          foster resilience and growth.

                                      </p>
                                      <br></br>
                                      <ol>
                                          <li>
                                              45’ consultation
                                          </li>
                                          <li>
                                              Tailored Support
                                          </li>
                                          <li>
                                              Flexible Scheduling
                                          </li>
                                          <li>
                                              8 sessions
                                          </li>
                                      </ol>
                                      <div className="row">
                                          <Button className="package-btn">
                                              <Link
                                                  to="/patient/booking-success?doctor_name=Package:&doctor_surname=Personalized Psychology Series&date=8&day=sessions">Book
                                                  Now</Link>
                                          </Button>
                                      </div>
                                  </div>
                              </div>
                              <h1>Chat</h1>
                              <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={800}>
                                  <div className="work-box bg-pink">
                                      <div className="card-img-right">
                                          <img src={packageicon02} alt="Img"/>
                                      </div>
                                      <h4>Chat</h4>
                                      <p>
                                          Chat with our doctors immediate answers to your health inquiries.
                                      </p>
                                      <div className="row">
                                          <Button className="package-btn">
                                              <Link to="/patient/checkout">Book Now</Link>
                                          </Button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* Your content for Adult Care */}
                  </div>
              );
          case 'Nutritionist':
              return (
                  // Render content for Adult Care tab
                  // You can use the Slider component here with specific settings for Adult Care
                  <div>
                      <div>
                          <div className="how-it-work">
                              <div className="row">
                                  <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={600}>
                                      <div className="work-box">
                                          <div className="card-img-right">
                                              <img src={packageicon01} alt="Img"/>
                                          </div>
                                          <h4>Consultation</h4>
                                          <p>
                                              Improve your nutrition, health, appearance and your self-esteem with
                                              personalized guidance. Explore tailored eating plans and strategies for
                                              for achieving your health goals, and sustainable dietary changes. in
                                              convenient video consultations.
                                          </p>
                                          <br></br>
                                          <p>
                                              Have an online video session with our experienced nutrition specialist to achieve your goals That  Easily, that fast.
                                          </p>
                                          <br></br>
                                          <ol>
                                              <li>
                                                  45’ consultation
                                              </li>
                                              <li>
                                                  Flexible consultation
                                              </li>
                                          </ol>
                                          <div className="row">
                                              <Button className="package-btn">
                                                  <Link
                                                      to="/patient/search-doctor2?option=nutritionist&feature=nutritionsession">Book
                                                      Now</Link>
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* Your content for Adult Care */}
                      </div>
                  </div>
              );
          // Add more cases for other tabs as needed
          default:
              return (
                  <div>
                      <h1>sakndjkasndjknasjdnkasnjd</h1>
                  </div>
              );
      }
    }
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        margin: 24,
        nav: false
    };

    return (
        <>
            {/* Best Packages Section */}
            <section className="best-packages-section">
                <div className="section-bg">
                    <img
                        src={sectionbg03}
                        className="best-pack-bg-one"
                        alt="Img"
                    />
                    <img
                        src={sectionbg04}
                        className="best-pack-bg-two"
                        alt="Img"
                    />
                </div>
                <div className="container">
                    <div className="section-head-twelve">
                        <h2>Available Packages</h2>
                        <p>
                            {" "}
                            Explore Our Top-Tier Packages for Your Personalized Wellness
                            Experience
                        </p>
                    </div>
                    <ul className="nav nav-pills inner-tab">
                        {/* Map through your tab data and render buttons */}
                        {['Doctor', 'Psychologist', 'Nutritionist'].map((tab, index) => (
                            <li className="nav-item" key={index}>
                                <button
                                    className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content pt-0 dashboard-tab">
                        <div
                            className="tab-pane fade show active"
                            id="pills-all"
                            role="tabpanel"
                            aria-labelledby="pills-all-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    {renderContent()}

                                    {/*<Slider {...settings} className="best-package-slider owl-carousel">*/}
                                    {/*    <div*/}
                                    {/*        className="best-package-card"*/}
                                    {/*        data-aos="fade-up"*/}
                                    {/*        data-aos-delay={500}*/}
                                    {/*    >*/}
                                    {/*        <div className="package-card-top">*/}
                                    {/*            <div className="card-img-right">*/}
                                    {/*                <img src={stickericon} alt="Img" />*/}
                                    {/*            </div>*/}
                                    {/*            <div className="package-icon">*/}
                                    {/*                <img*/}
                                    {/*                    src={packageicon01}*/}
                                    {/*                    alt="Img"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Medical consultation</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            <p>*/}
                                    {/*                Connect with our top doctors.  </p>*/}
                                    {/*            <p>Receive fast diagnoses, get answers to medical doubts effortlessly.</p>*/}
                                    {/*                <p>Obtain medical prescriptions, and exams authorization  on your laptop.                                                </p>*/}
                                    {/*            <ul className="feature-badge">*/}

                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer d-flex justify-content-between align-items-center">*/}
                                    {/*                <div className="package-cost">*/}
                                    {/*                    <h5>*/}
                                    {/*                        $150.25 <span> $199.00</span>*/}
                                    {/*                    </h5>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div*/}
                                    {/*            className="package-card-differ overlay-card"*/}
                                    {/*            data-aos="fade-up"*/}
                                    {/*            data-aos-delay={700}*/}
                                    {/*        >*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Includes</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            /!*<p>*!/*/}
                                    {/*            /!*    Five minute chat with a doctor that can guide you to find a solution to your medical health problem.*!/*/}
                                    {/*            /!*</p>*!/*/}
                                    {/*            <ul className="features-list">*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check"/>*/}
                                    {/*                    </span>*/}
                                    {/*                    Video consultations with expert doctors*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check"/>*/}
                                    {/*                    </span>*/}
                                    {/*                    Order for exams and medical prescription*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check"/>*/}
                                    {/*                    </span>*/}
                                    {/*                    Ask for Advice*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check"/>*/}
                                    {/*                    </span>*/}
                                    {/*                    1 Follow-up consultations as needed within the next 5 days*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check"/>*/}
                                    {/*                    </span>*/}
                                    {/*                    Available in Spanish and English*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check"/>*/}
                                    {/*                    </span>*/}
                                    {/*                    Available 24/7*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer">*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div*/}
                                    {/*        className="best-package-card"*/}
                                    {/*        data-aos="fade-up"*/}
                                    {/*        data-aos-delay={600}*/}
                                    {/*    >*/}
                                    {/*        <div className="package-card-top">*/}
                                    {/*            <div className="card-img-right">*/}
                                    {/*                <img*/}
                                    {/*                    src={medalicon}*/}
                                    {/*                    className="medal-icon"*/}
                                    {/*                    alt="Img"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*            <div className="package-icon">*/}
                                    {/*                <img*/}
                                    {/*                    src={packageicon02}*/}
                                    {/*                    alt="Img"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Medical Advice By Doctors</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            <p>*/}
                                    {/*                Receive personalized medical advice round the clock from our esteemed doctors.*/}
                                    {/*            </p>*/}
                                    {/*            <p>*/}
                                    {/*                Resolve your Questions fast and efficiently.*/}
                                    {/*            </p>*/}
                                    {/*            <p></p>*/}
                                    {/*            <ul className="feature-badge">*/}
                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer d-flex justify-content-between align-items-center">*/}
                                    {/*                <div className="package-cost">*/}
                                    {/*                    <h5>*/}
                                    {/*                        $150.25 <span> $199.00</span>*/}
                                    {/*                    </h5>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div*/}
                                    {/*            className="package-card-differ overlay-card"*/}
                                    {/*            data-aos="fade-up"*/}
                                    {/*            data-aos-delay={700}*/}
                                    {/*        >*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Includes</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            <p>*/}
                                    {/*                Receive personalized medical advice from our team of esteemed doctors.</p>*/}
                                    {/*                <p> Resolve your Questions fast and efficiently in Spanish or English.*/}
                                    {/*            </p>*/}
                                    {/*            <ul className="features-list">*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Personalized medical advice and health tips*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Quick resolution of medical doubts*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Available 24/7*/}
                                    {/*                </li>*/}
                                    {/*                /!*<li>*!/*/}
                                    {/*                /!*    <span>*!/*/}
                                    {/*                /!*        <i className="fa-solid fa-check" />*!/*/}
                                    {/*                /!*    </span>*!/*/}
                                    {/*                /!*    Hormone Shots{" "}*!/*/}
                                    {/*                /!*</li>*!/*/}
                                    {/*                /!*<li>*!/*/}
                                    {/*                /!*    <span>*!/*/}
                                    {/*                /!*        <i className="fa-solid fa-check" />*!/*/}
                                    {/*                /!*    </span>*!/*/}
                                    {/*                /!*    Transactions Lists*!/*/}
                                    {/*                /!*</li>*!/*/}
                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer">*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div*/}
                                    {/*        className="best-package-card"*/}
                                    {/*        data-aos="fade-up"*/}
                                    {/*        data-aos-delay={700}*/}
                                    {/*    >*/}
                                    {/*        <div className="package-card-top">*/}
                                    {/*            <div className="card-img-right">*/}
                                    {/*                <img src={stickericon} alt="Img" />*/}
                                    {/*            </div>*/}
                                    {/*            <div className="package-icon">*/}
                                    {/*                <img*/}
                                    {/*                    src={packageicon01}*/}
                                    {/*                    alt="Img"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Medical Home Visit</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            <p>*/}
                                    {/*                <b>Available only in the city of Barcelona</b>*/}
                                    {/*            </p>*/}
                                    {/*            <p>*/}
                                    {/*                Experience personalized care from doctors in the comfort of your home.*/}
                                    {/*            </p>*/}
                                    {/*            <p>*/}
                                    {/*                Book a visit, and within 2 hours, our doctors arrive with equipment for thorough examinations.*/}
                                    {/*            </p>*/}
                                    {/*            <p>*/}
                                    {/*                Receive prescriptions, test orders, or hospitalization recommendations as needed.*/}
                                    {/*            </p>*/}
                                    {/*            <ul className="feature-badge">*/}
                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer d-flex justify-content-between align-items-center">*/}
                                    {/*                <div className="package-cost">*/}
                                    {/*                    <h5>*/}
                                    {/*                        $150.25 <span> $199.00</span>*/}
                                    {/*                    </h5>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}


                                    {/*        <div*/}
                                    {/*            className="package-card-differ overlay-card"*/}
                                    {/*            data-aos="fade-up"*/}
                                    {/*            data-aos-delay={700}*/}
                                    {/*        >*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Includes</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            <p>*/}
                                    {/*                If you think you need a doctor in person, thi sis the best choice...*/}
                                    {/*            </p>*/}
                                    {/*            <ul className="features-list">*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Upload Prescription*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Complete Blood Count{" "}*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Series Blood Tests{" "}*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Hormone Shots{" "}*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Transactions Lists*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer">*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div*/}
                                    {/*        className="best-package-card"*/}
                                    {/*        data-aos="fade-up"*/}
                                    {/*        data-aos-delay={800}*/}
                                    {/*    >*/}
                                    {/*        <div className="package-card-top">*/}
                                    {/*            <div className="card-img-right">*/}
                                    {/*                <img*/}
                                    {/*                    src={medalicon}*/}
                                    {/*                    className="medal-icon"*/}
                                    {/*                    alt="Img"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*            <div className="package-icon">*/}
                                    {/*                <img*/}
                                    {/*                    src={packageicon02}*/}
                                    {/*                    alt="Img"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Asthma Apply</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            <p>*/}
                                    {/*                A diabetic foot exam can help find problems that can lead*/}
                                    {/*                to serious infection and ...*/}
                                    {/*            </p>*/}
                                    {/*            <ul className="feature-badge">*/}
                                    {/*                <li>Includes 90 Parameters</li>*/}
                                    {/*                <li>Includes 20 tests </li>*/}
                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer d-flex justify-content-between align-items-center">*/}
                                    {/*                <div className="package-cost">*/}
                                    {/*                    <h5>*/}
                                    {/*                        $150.25 <span> $199.00</span>*/}
                                    {/*                    </h5>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div*/}
                                    {/*            className="package-card-differ overlay-card"*/}
                                    {/*            data-aos="fade-up"*/}
                                    {/*            data-aos-delay={700}*/}
                                    {/*        >*/}
                                    {/*            <h3>*/}
                                    {/*                <Link to="/consultation">Urine Analysis</Link>*/}
                                    {/*            </h3>*/}
                                    {/*            <p>*/}
                                    {/*                Allergy testing can be useful at different stages of life,*/}
                                    {/*                like discovering that a family member...*/}
                                    {/*            </p>*/}
                                    {/*            <ul className="features-list">*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Upload Prescription*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Complete Blood Count{" "}*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Series Blood Tests{" "}*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Hormone Shots{" "}*/}
                                    {/*                </li>*/}
                                    {/*                <li>*/}
                                    {/*                    <span>*/}
                                    {/*                        <i className="fa-solid fa-check" />*/}
                                    {/*                    </span>*/}
                                    {/*                    Transactions Lists*/}
                                    {/*                </li>*/}
                                    {/*            </ul>*/}
                                    {/*            <div className="package-footer">*/}
                                    {/*                <div className="package-btn">*/}
                                    {/*                    <Link to="/patient/checkout">Book Now</Link>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</Slider>*/}
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-family"
                            role="tabpanel"
                            aria-labelledby="pills-family-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-adult"
                            role="tabpanel"
                            aria-labelledby="pills-adult-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-accident"
                            role="tabpanel"
                            aria-labelledby="pills-accident-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-fitness"
                            role="tabpanel"
                            aria-labelledby="pills-fitness-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-explore"
                            role="tabpanel"
                            aria-labelledby="pills-explore-tab"
                        >
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="best-package-slider owl-carousel">
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={500}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={700}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img src={stickericon} alt="Img" />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon01}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Full Body Checkup</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="best-package-card"
                                            data-aos="fade-up"
                                            data-aos-delay={800}
                                        >
                                            <div className="package-card-top">
                                                <div className="card-img-right">
                                                    <img
                                                        src={medalicon}
                                                        className="medal-icon"
                                                        alt="Img"
                                                    />
                                                </div>
                                                <div className="package-icon">
                                                    <img
                                                        src={packageicon02}
                                                        alt="Img"
                                                    />
                                                </div>
                                                <h3>
                                                    <Link to="/consultation">Asthma Apply</Link>
                                                </h3>
                                                <p>
                                                    A diabetic foot exam can help find problems that can lead
                                                    to serious infection and ...
                                                </p>
                                                <ul className="feature-badge">
                                                    <li>Includes 90 Parameters</li>
                                                    <li>Includes 20 tests </li>
                                                </ul>
                                                <div className="package-footer d-flex justify-content-between align-items-center">
                                                    <div className="package-cost">
                                                        <h5>
                                                            $150.25 <span> $199.00</span>
                                                        </h5>
                                                    </div>
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="package-card-differ overlay-card"
                                                data-aos="fade-up"
                                                data-aos-delay={700}
                                            >
                                                <h3>
                                                    <Link to="/consultation">Urine Analysis</Link>
                                                </h3>
                                                <p>
                                                    Allergy testing can be useful at different stages of life,
                                                    like discovering that a family member...
                                                </p>
                                                <ul className="features-list">
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Upload Prescription
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Complete Blood Count{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Series Blood Tests{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Hormone Shots{" "}
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <i className="fa-solid fa-check" />
                                                        </span>
                                                        Transactions Lists
                                                    </li>
                                                </ul>
                                                <div className="package-footer">
                                                    <div className="package-btn">
                                                        <Link to="/patient/checkout">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>

                    <div className="how-it-work">
                        <div className="section-head-twelve">
                            <h2>Benefits</h2>
                            {/*<p>*/}
                            {/*    {" "}*/}
                            {/*    Uncover the Seamless Process for Easy Navigation and Health*/}
                            {/*    Solutions.*/}
                            {/*</p>*/}
                        </div>
                        <div className="row justify-content-center">
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={600}
                            >
                                <div className="work-box">
                                    <div className="work-icon">
                                        <img src={workicon07} alt="Img"/>
                                    </div>
                                    <h4>1. Affordable Health</h4>
                                    <p>
                                        Quality mental, physical, and nutrition services at a low price, ensuring everyone can access well-being.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={700}
                            >
                                <div className="work-box bg-green">
                                    <div className="work-icon">
                                        <img src={workicon06} alt="Img"/>
                                    </div>
                                    <h4>2. Holistic Wellness</h4>
                                    <p>
                                        {" "}
                                        Comprehensive services for mental, physical, and nutrition needs, tailored for overall well-being.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={800}
                            >
                                <div className="work-box bg-pink">
                                    <div className="work-icon">
                                        <img src={work_01} alt="Img"/>
                                    </div>
                                    <h4>3. Expert Professionals</h4>
                                    <p>
                                        Experienced doctors, psychologists, and nutritionists offer personalized guidance for healthier living.

                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={800}
                            >
                                <div className="work-box bg-blue">
                                    <div className="work-icon">
                                        <img src={work_04} alt="Img"/>
                                    </div>
                                    <h4>4. Experience Comfort</h4>
                                    <p>
                                        Benefit from immediate appointment scheduling, follow-up consultations, expert guidance, and home medical visits—all from the convenience of your own space.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 d-flex"
                                data-aos="fade-up"
                                data-aos-delay={800}
                            >
                                <div className="work-box bg-pink">
                                    <div className="work-icon">
                                        <img src={workicon05} alt="Img"/>
                                    </div>
                                    <h4>5. Accessibility for All</h4>
                                    <p>
                                        Our online clinic provides inclusive healthcare, with no linguistic barriers as we cater to both English and Spanish speakers, ensuring wellness for everyone, regardless of background or linguistic barrier.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Best Packages Section */}
        </>

    )
}

export default BestPackage
