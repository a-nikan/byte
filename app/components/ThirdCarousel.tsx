"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/bundle";

import { thirdCarouselItems } from "./constants";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import Link from "next/link";
import localFont from "next/font/local";

// Fonts

const SF = localFont({ src: "../fonts/SF.otf" });
const bose = localFont({
  src: "../fonts/Bose-HeadlineBold.woff2",
  weight: "900",
});

export function ThirdCarousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={0}
      speed={500}
      slidesPerView={1}
      navigation={{
        nextEl: ".custom-next", // Point to the custom next button
        prevEl: ".custom-prev", // Point to the custom prev button
      }}
      pagination={{
        clickable: true,
        el: ".custom-pagination",
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {thirdCarouselItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-[1350px] h-[540px] mx-auto">
            <Image
              className="mx-auto object-cover -z-10"
              src={item.src}
              alt={item.alt}
              quality={100}
              fill
            />
            <div
              style={{ top: item.top, left: item.left }}
              className="flex flex-col relative gap-6"
            >
              <h1
                className={`${bose.className} text-8xl`}
                style={{ color: item.mainColor }}
              >
                {item.title}
              </h1>
              <p
                className={`${SF.className} text-2xl`}
                style={{ color: item.mainColor }}
              >
                {item.paragraph}
              </p>
              <Link href="#">
                <div
                  style={{ backgroundColor: item.mainColor }}
                  className="rounded-[1px] h-[48px] w-[151px] flex items-center"
                >
                  <p className="tracking-widest text-[15.5  px] text-blue-950 font-bold mx-auto subpixel-antialiased">
                    LEARN MORE
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="flex justify-between w-[1350px] mx-auto pt-6 items-center">
        <div className="custom-pagination flex gap-2"></div>
        <div className="flex gap-1">
          <button className="custom-prev h-auto w-2/4">
            <div className="border border-neutral-800 rounded-full h-[42px] w-[42px] flex justify-center items-center">
              <GrPrevious className="h-[18px] w-auto" />
            </div>
          </button>
          <button className="custom-next h-auto w-2/4">
            <div className="border border-neutral-800 rounded-full h-[42px] w-[42px] flex justify-center items-center">
              <GrNext className="h-[18px] w-auto" />
            </div>
          </button>
        </div>
      </div>
    </Swiper>
  );
}

export default ThirdCarousel;
