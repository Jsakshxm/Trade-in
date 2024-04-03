"use client";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TradingViewWidget from "../app/Widgets/Chart"
// import { AppContext } from '@/components/AppContext/AppContext'
import { AppContext } from "../components/AppContext/AppContext";
import { useContext } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  const { theme, settheme } = useContext(AppContext);
  return (
    <main>
      <Navbar></Navbar>
      <div className={`pt-32  bg-${theme}bg text-${theme}txt`} >
      <div className='pt-12 lg:pt-24 object-cover mb-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='cover' src="" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="" src="" alt="" />
        </SwiperSlide>

        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </div>
    <div className="spacer bg"></div>
      <div className={`pt-10 flex items-center justify-center w-full p-4 lg:p-10`}>
     <TradingViewWidget className=""></TradingViewWidget>
      </div>
      <div className="bg2"></div>
      </div>
      <Footer></Footer>
    </main>
  );
}
