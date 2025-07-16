'use client';

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import abcLogo from "../../public/img/abc.png";
import capemiLogo from "../../public/img/capemi.png";
import stollerLogo from "../../public/img/stoller.png";
import batiLogo from "../../public/img/batistella.webp";
import mannLogo from "../../public/img/mann-2.png";
import petLogo from "../../public/img/pet.png";
import enaLogo from "../../public/img/ENA.avif";
import etmaLogo from "../../public/img/ETMA-logo.svg";
import inomaxLogo from "../../public/img/INOMAX.png";
import cagnoliLogo from "../../public/img/logo-cagnoli-1-1.svg";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [
    { src: capemiLogo, alt: "Logo cliente CAPEMI", className: 'bg-[#0a3162] p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://www.capemi.ar/" },
    { src: abcLogo, alt: "Logo cliente ABC S.A", className: 'bg-[#016536] p-1 flex justify-center items-center rounded w-[250px] h-[100px]', width: 200, height: 200, href:"https://www.abc-sa.com.ar/home" },
    { src: stollerLogo, alt: "Logo cliente Stoller", className: 'bg-[#0063A8] p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://stoller.com.ar/" },
    { src: mannLogo, alt: "Logo cliente Mann", className: 'p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://www.mann-filter.com/ar-es.html" },
    { src: petLogo, alt: "Logo cliente Pet", className: 'bg-white p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 300, height: 300, href:"https://petselect.eu/" },
    { src: enaLogo, alt: "Logo cliente ENA", className: 'bg-white p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://www.laboratorioena.com/" },
    { src: etmaLogo, alt: "Logo cliente ETMA", className: 'bg-white p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://es.etma.com.ar/" },
    { src: inomaxLogo, alt: "Logo cliente INOMAX", className: 'bg-white p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://herrajesinomax.com.ar/" },
    { src: cagnoliLogo, alt: "Logo cliente Cagnoli", className: 'bg-[#2b364c] p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://cagnoli.com/" },
    { src: batiLogo, alt: "Logo cliente Batistella", className: 'bg-white p-1 rounded flex justify-center items-center w-[250px] h-[100px]', width: 200, height: 200, href:"https://www.batistella.com.ar/" },
  ];

  return (
    <div className="p-5 pt-0 pb-12 w-full flex flex-col items-center">
      <Slider {...settings} className="w-full max-w-6xl flex flex-wrap justify-center gap-12 mt-10 md:justify-around">
        {logos.map((logo, index) => {
          // Check if the image is SVG to avoid blur placeholder
          const isSvg = logo.src.src?.endsWith?.('.svg') || logo.alt.includes('ETMA') || logo.alt.includes('Cagnoli');
          
          return (
            <div key={index} className="flex justify-center items-center p-5 w-full">
              <a href={logo.href} target="_blank" rel="noopener noreferrer">
                <div className={logo.className}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={200}
                    className="object-cover"
                    priority
                    loading="eager"
                    {...(!isSvg && { placeholder: "blur" })}
                  />
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Clients;
