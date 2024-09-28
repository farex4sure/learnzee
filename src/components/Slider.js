import React from 'react'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import story from "../views/story/images/story.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import './styles.css';



const Slider = () => {
  return (
    <>
    <Swiper
      modules={[Pagination, Navigation, Mousewheel, Keyboard, 
      //  Autoplay
      ]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      mousewheel={true}
      keyboard={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={true}
      className="mySwiper w[92%] h[500px] mb-10"
    >
      <SwiperSlide >
      <div className='relative w-full  overflow-hidden conainer mx-auto rounded-[32px]'>
            <img
            className='h-full w-full object-cover  rounded-[32px]' 
            src={story}
            alt='story'
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="absolute inset-0 mt-[90px] flex flex-col justifycenter items-center text-white p-b font-poppins">
            <h2 className="text-[32px] leading-[48px] font-black mb-1">Discover a World of Fun and Learning</h2>
            <p className="text-[16px] leading-[24px] font-normal">Join us on a fun and educational journey. Explore exciting topics, play</p>
            <p className='text-[16px] leading-[24px] font-normal'>interactive games, and develop essential skills</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className='relative w-full  overflow-hidden conainer mx-auto rounded-[32px]'>
            <img
            className='h-full w-full object-cover  rounded-[32px]' 
            src={story}
            alt='story'
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="absolute inset-0 mt-[90px] flex flex-col justifycenter items-center text-white p-b font-poppins">
            <h2 className="text-[32px] leading-[48px] font-black mb-1">Discover a World of Fun and Learning</h2>
            <p className="text-[16px] leading-[24px] font-normal">Join us on a fun and educational journey. Explore exciting topics, play</p>
            <p className='text-[16px] leading-[24px] font-normal'>interactive games, and develop essential skills</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide >
      <div className='relative w-full  overflow-hidden conainer mx-auto rounded-[32px]'>
            <img
            className='h-full w-full object-cover  rounded-[32px]' 
            src={story}
            alt='story'
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="absolute inset-0 mt-[90px] flex flex-col justifycenter items-center text-white p-b font-poppins">
            <h2 className="text-[32px] leading-[48px] font-black mb-1">Discover a World of Fun and Learning</h2>
            <p className="text-[16px] leading-[24px] font-normal">Join us on a fun and educational journey. Explore exciting topics, play</p>
            <p className='text-[16px] leading-[24px] font-normal'>interactive games, and develop essential skills</p>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider