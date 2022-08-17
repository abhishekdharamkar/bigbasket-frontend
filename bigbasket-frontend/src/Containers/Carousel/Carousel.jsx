import React from "react";

const Carousel = () => {
  return (
    <div className="container-fluid" style={{margin:"20px 0px 30px 0px"}}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_gwf_happychef_460-250722.jpg"
              className="d-block w-100"
              alt="slide1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_kgp_bbhome-exclusive_460-250722.jpg"
              className="d-block w-100"
              alt="slide2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore_DC1-1600x460_150822.png"
              className="d-block w-100"
              alt="slide3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_sbf_tasties-origin_460-250722.jpg"
              className="d-block w-100"
              alt="slide3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/YXHP186_hp_m_sbf_indipendence_460-100822.jpg"
              className="d-block w-100"
              alt="slide3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
