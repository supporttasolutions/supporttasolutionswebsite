"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Socialmedia() {
  const [isWhiteBg, setIsWhiteBg] = useState(false);

  const handleScroll = () => {
    const middleY = window.innerHeight / 2; // Middle of screen
    let element = document.elementFromPoint(window.innerWidth / 2, middleY);

    if (!element) return; // Exit if no element found

    let bgColor = window.getComputedStyle(element).backgroundColor;
    let bgImage = window.getComputedStyle(element).backgroundImage;

    // ✅ Check parent elements if bgColor is transparent
    while (
      (bgColor === "rgba(0, 0, 0, 0)" || bgImage !== "none") &&
      element.parentElement
    ) {
      element = element.parentElement;
      bgColor = window.getComputedStyle(element).backgroundColor;
      bgImage = window.getComputedStyle(element).backgroundImage;
    }

    console.log("Detected Background Color:", bgColor);
    console.log("Detected Background Image:", bgImage);

    // ✅ If the background is a gradient, assume it's light
    if (bgImage !== "none") {
      setIsWhiteBg(true);
      return;
    }

    // ✅ Convert RGB to Individual Numbers
    const rgbValues = bgColor.match(/\d+/g);
    if (!rgbValues) return;

    const [r, g, b, a = 1] = rgbValues.map(Number); // 'a' is for transparency (alpha)

    // ✅ Detect Light Colors & Semi-Transparent Colors
    const isLightBg =
      (r >= 240 && g >= 240 && b >= 240) || // Pure white
      (r === 253 && g === 249 && b === 243) || // #FDF9F3
      (r === 224 && g === 143 && b === 52 && a < 0.1); // #E08F340F (very transparent)

    setIsWhiteBg(isLightBg);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 flex items-center justify-center flex-col gap-[20px] translate-x-[20px] translate-y-[50%]`}
    >
      <FaFacebook
        className={`lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] cursor-pointer ${
          isWhiteBg ? "text-black" : "text-white"
        }`}
      />
      <FaLinkedin
        className={`lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] cursor-pointer ${
          isWhiteBg ? "text-black" : "text-white"
        }`}
      />
      <FaInstagram
        className={`lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px] cursor-pointer ${
          isWhiteBg ? "text-black" : "text-white"
        }`}
      />
      <div
        className={`h-[141px] w-[2px] ${isWhiteBg ? "bg-black" : "bg-white"}`}
      ></div>
      <div className="relative h-[24px] w-auto">
        <div
          className={`absolute top-0 left-0 rotate-90 origin-left whitespace-nowrap lg:text-[12px] tracking-[0.2rem] ${
            isWhiteBg ? "text-black" : "text-white"
          }`}
        >
          Follow us
        </div>
      </div>
    </div>
  );
}

export default Socialmedia;
