'use client';
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhatsApp } from "@/components/icon/WhatsApp";
import { SMS } from "../icon/SMS";
import { RCS } from "../icon/RCS";
import { Viber } from "../icon/Viber";

const content = [
  {
    icon: <WhatsApp />,
    title: "WhatsApp",
    time: "15m ago",
    message: "New Message",
    color: "#25D366"
  },
  {
    icon: <SMS />,
    title: "SMS",
    time: "15m ago",
    message: "New Message",
    color: "#0000E1"
  },
  {
    icon: <RCS />,
    title: "RCS",
    time: "15m ago",
    message: "New Message",
    color: "#FFFFFF"
  },
  {
    icon: <Viber />,
    title: "Viber",
    time: "15m ago",
    message: "New Message",
    color: "#7360F2"
  },
];

export default function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  return (
    <div className="w-[50%] max-w-[600px] text-white">
      <Slider ref={sliderRef} {...settings} className="feature-carousel">
        {content.map((item, index) => (
          <div key={index} className="px-2 py-1">
            <div
              className={`p-4 transition-transform duration-300 ${
                index === currentSlide ? "scale-100 z-10" : "scale-90 opacity-70"
              }`}
            >
              <div className="flex flex-row items-center gap-3">
                  <div 
                    className={`w-[50px] h-[50px] rounded-xl flex justify-center items-center`}
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}</div>
                  <div>
                    <div className="flex flex-row items-center gap-2">
                      <div className="text-sm sm:text-lg">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                    </div>
                      <div className="text-sm font-normal dark:text-white/60">{item.message}</div>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}