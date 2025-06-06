import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, FreeMode } from "swiper/modules";

function Moving() {
  return (
    <div className="w-full mx-auto my-8">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        allowTouchMove={false}
        freeMode={true} // activate FreeMode if you want smooth free scrolling
      >
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/H4ZJfIDdQT4noqfA2bSSvFCiSkU.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/vSH78UNazS3h66TypvW0LidfM.png"
            alt="DZap"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/rXhyb4i05z50Qbk5revb3mrdsTI.png?scale-down-to=1024"
            alt="BitcoinVerse"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        {/* ... same fixes for other images ... */}
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/MOWmtVvtLFL2bgsGuAvZWNKdE.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://framerusercontent.com/images/zBZ8QyhcE59BmBmbScyGq3lBuk.png?scale-down-to=1024"
            alt="Durga Alloys"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </SwiperSlide>
        {/* Remove any slide with empty or missing src */}
      </Swiper>
    </div>
  );
}

export default Moving;
