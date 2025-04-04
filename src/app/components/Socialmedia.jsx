"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Socialmedia() {
  const [topColor, setTopColor] = useState("white");
  const [bottomColor, setBottomColor] = useState("white");

  const handleScroll = () => {
    const middleY = window.innerHeight / 2;
    const topY = middleY - 70; // Approximate top of the line
    const bottomY = middleY + 70; // Approximate bottom of the line
    const centerX = window.innerWidth / 2;

    const topElement = document.elementFromPoint(centerX, topY);
    const bottomElement = document.elementFromPoint(centerX, bottomY);

    const getBackgroundColor = (element) => {
      if (!element) return "rgb(255, 255, 255)"; // Default white
      let bgColor = window.getComputedStyle(element).backgroundColor;
      while (
        (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "rgb(19, 17, 34)") &&
        element.parentElement
      ) {
        element = element.parentElement;
        bgColor = window.getComputedStyle(element).backgroundColor;
      }
      return bgColor;
    };

    const topBgColor = getBackgroundColor(topElement);
    const bottomBgColor = getBackgroundColor(bottomElement);

    const isLight = (bgColor) => {
      const rgbValues = bgColor.match(/\d+/g);
      if (!rgbValues) return true;
      const [r, g, b] = rgbValues.map(Number);
      return (r + g + b) / 3 > 128;
    };

    setTopColor(isLight(topBgColor) ? "black" : "white");
    setBottomColor(isLight(bottomBgColor) ? "black" : "white");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed z-50 flex items-center justify-center flex-col gap-[20px] translate-x-[20px] translate-y-[50%]">
      <FaFacebook
        className={`lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] cursor-pointer`} 
        style={{ color: topColor }}
      />
      <FaLinkedin
        className={`lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] cursor-pointer`} 
        style={{ color: topColor }}
      />
      <FaInstagram
        className={`lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] cursor-pointer`} 
        style={{ color: topColor }}
      />
      <div className="relative h-[141px] w-[2px]">
        <div className="absolute top-0 h-[70px] w-full" style={{ backgroundColor: topColor }}></div>
        <div className="absolute bottom-0 h-[70px] w-full" style={{ backgroundColor: bottomColor }}></div>
      </div>
      <div className="relative h-[24px] w-auto">
        <div
          className="absolute top-0 left-0 rotate-90 origin-left whitespace-nowrap lg:text-[12px] tracking-[0.2rem]"
          style={{ color: bottomColor }}
        >
          Follow us
        </div>
      </div>
    </div>
  );
}

export default Socialmedia;
