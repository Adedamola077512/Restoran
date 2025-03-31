import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Testimonial.css";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";

const testimonials = [
  {
    img: testimonial2,
    quote:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Software Developer at Bluecode",
  },
  {
    img: testimonial1,
    quote:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    profession: "UI/UX Designer",
    name: "Client Name",
  },
  {
    img: testimonial3,
    quote:"Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    profession: "Project Manager",
    name: "Client Name",
  },
];

const Testimonial = () => {
  return (
    <div className="container mt-5" id="TESTIMONIALS" data-aos="fade-up">
        <div class="menu-header">
           <span class="line"></span>
           <h2 class="title">Testimoial</h2>
           <span class="line"></span>
        </div>
      <h1 className="text-center school-h4"><b>Our Clients Say!!!</b></h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card card p-3 mt-5">
              <span className="icon"><FaQuoteLeft /></span>
              <p className="quot">{testimonial.quote}</p>
              <div className="text-flex">
                <img
                   src={testimonial.img}
                   alt={testimonial.name}
                   className="tes-img"
                />
                <h5 className="school-h4">
                  <b>{testimonial.name}</b>
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
