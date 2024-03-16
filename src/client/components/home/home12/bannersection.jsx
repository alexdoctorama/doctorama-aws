import React, { useState } from 'react';
import { labviewicon, sectionsmallicon01, sectionsmallicon02, swiperslideimag03, psychologist_card, doctor_card, home5banner_img, heart_bg } from '../../imagepath';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { EffectCards, Mousewheel } from 'swiper/core';
import Select from 'react-select';
import { Link, useHistory } from 'react-router-dom';

SwiperCore.use([EffectCards, Mousewheel]);

const BannerSection = () => {
  const options = [
    { value: 'all', label: 'Select Speciality' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'psychologist', label: 'Psychologist' },
    { value: 'nutritionist', label: 'Nutritionist' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null); // State for selected feature
  const [features, setFeatures] = useState([]);

  const history = useHistory();

  const handleSearch = () => {
    if (selectedOption) {
      history.push(`/patient/search-doctor2?option=${selectedOption.value}&feature=${selectedFeature.value}`); // Include selected feature in URL
    } else {
      // Handle case when no option is selected
    }
  };

  const swiperParams = {
    effect: 'cards',
    loop: false,
    grabCursor: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    mousewheel: {
      invert: false,
    },
  };

  const cardData = [
    { id: 1, imgSrc: swiperslideimag03, title: 'Nutritionist', parameters: 'maskldmaslkdkla', price: '$150.49', discountedPrice: '$299.00' },
    { id: 2, imgSrc: psychologist_card, title: 'Psychologist', parameters: 'asm,d ma,sd,asmd', price: '$250.49', discountedPrice: '$499.00' },
    { id: 3, imgSrc: doctor_card, title: 'Doctor', parameters: 'adklmsaldm', price: '$350.25', discountedPrice: '$699.00' },

  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setSelectedFeature(null); // Reset selected feature when option changes
    switch (option.value) {
      case 'doctor':
        setFeatures([
          { value: 'all', label: 'Choose service' },
          { value: 'medconsultation', label: 'Medical Consultation' },
          { value: 'medadvice', label: 'Medical Advice' },
          { value: 'medhomevisit', label: 'Medical Home Visit' },
          { value: 'prescription', label: 'Prescription'}
        ]);
        break;
      case 'psychologist':
        setFeatures([
          { value: 'all', label: 'Choose service' },
          { value: 'psychosession', label: 'Psychological Session' },
          { value: 'psycho4session', label: '4 x Psychological Session' },
          { value: 'psycho8session', label: '8 x Psychological Session' }
        ]);
        break;
      case 'nutritionist':
        setFeatures([
          { value: 'all', label: 'Choose service' },
          { value: 'nutritionsession', label: 'Nutritionist Session' },
        ]);
        break;
      default:
        setFeatures([]);
        break;
    }
  };

  const handleFeatureChange = (feature) => {
    setSelectedFeature(feature);
  };

  return (
      <div>
        {/* Home Banner */}
        <section className="banner-sec-twelve">
          <div className="section-small-imgs">
            <img src={sectionsmallicon01} className="small-icon-one" alt="Img" />
            <img src={sectionsmallicon02} className="small-icon-two" alt="Img" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="banner-content-twelve">
                  <div className="banner-title-twelve aos" data-aos="fade-up" data-aos-delay={400}>
                    <h1 style={{color: '#616681'}}>HEALTH FOR EVERY ONE</h1>
                    <p style={{color: '#616681'}}>Affordable mental, physical, and nutrition solutions. Your well-being matters, without compromising quality. No barriers, we care.
                    </p>
                  </div>
                  <form>
                    <div className="input-box-twelve">
                      <div className="input-block">
                        <Select
                            options={options}
                            placeholder="Select Speciality"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        />
                      </div>
                      <div className="input-block">
                        <Select
                            options={features}
                            placeholder="Choose Service"
                            value={selectedFeature} // Pass selected feature value to the Select component
                            onChange={handleFeatureChange} // Handle feature change
                        />
                      </div>
                      <div className="input-block">
                        <div className="search-btn-twelve">
                          <Link to={`/patient/search-doctor2?option=${selectedOption ? selectedOption.value : ''}&feature=${selectedFeature ? selectedFeature.value : ''}`} onClick={handleSearch}>Search Now</Link> {/* Include selected feature in the link */}
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="view-all-lab" data-aos="fade-up">
                    <span><img src={labviewicon} alt="Img"/></span>
                    <h5>View all of your options here !!!</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">

              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
      </div>
  )
}

export default BannerSection;
