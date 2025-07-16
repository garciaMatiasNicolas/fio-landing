import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container }  from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image?: any; // Para compatibilidad con imagen única
    images?: any[]; // Para carrusel de imágenes
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    dotsClass: "slick-dots custom-dots",
    customPaging: (i: number) => (
      <div 
        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
          i === currentSlide ? 'bg-sky-600' : 'bg-gray-300'
        }`} 
      />
    ),
  };

  const renderImageSection = () => {
    if (data.images && data.images.length > 0) {
      // Render carousel for multiple images
      return (
        <div className="relative group">
          {/* Decorative background elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl opacity-10"></div>
          
          {/* Main carousel container */}
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="carousel-container">
              <Slider {...sliderSettings}>
                {data.images.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image}
                      width={600}
                      height={400}
                      alt={`DTA F&IO Dashboard ${index + 1}`}
                      className="object-cover w-full h-auto"
                      placeholder="blur"
                      blurDataURL={image.src}
                    />
                    
                    {/* Overlay with subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      DTA F&IO
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          
          {/* Decorative dots */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-sky-100 rounded-full opacity-50"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-100 rounded-full opacity-30"></div>
          
          {/* Custom CSS for dots */}
          <style jsx>{`
            .carousel-container :global(.custom-dots) {
              position: relative !important;
              bottom: auto !important;
              margin-top: 16px !important;
              display: flex !important;
              justify-content: center !important;
              gap: 8px !important;
            }
            
            .carousel-container :global(.custom-dots li) {
              margin: 0 !important;
            }
            
            .carousel-container :global(.custom-dots li button) {
              display: none !important;
            }
          `}</style>
        </div>
      );
    } else if (data.image) {
      // Render single image
      return (
        <div className="relative group">
          {/* Decorative background elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl opacity-10"></div>
          
          {/* Main image container */}
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
            <Image
              src={data.image}
              width={600}
              height={400}
              alt="DTA F&IO Dashboard"
              className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              placeholder="blur"
              blurDataURL={data.image.src}
            />
            
            {/* Overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              DTA F&IO
            </div>
          </div>
          
          {/* Decorative dots */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-sky-100 rounded-full opacity-50"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-100 rounded-full opacity-30"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <Container className="flex flex-wrap mb-20 lg:gap-16 lg:flex-nowrap">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          props.imgPos === "right" ? "lg:order-1" : ""
        }`}>
        {renderImageSection()}
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          data.imgPos === "right" ? "lg:justify-end" : ""
        } mt-8 lg:mt-0`}>
        <div>
          <div className="flex flex-col w-full">
            {/* Enhanced title section */}
            <div className="inline-flex items-center px-4 py-2 bg-sky-50 rounded-full text-sky-700 font-medium text-sm mb-4 w-fit">
              <div className="w-2 h-2 bg-sky-500 rounded-full mr-2"></div>
              Solución Avanzada
            </div>
            
            <h3 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white mb-4">
              {data.title}
            </h3>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl dark:text-gray-300 mb-8">
              {data.desc}
            </p>
          </div>

          <div className="w-full space-y-6">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon} index={index}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start space-x-4 group">
      {/* Enhanced icon container */}
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl w-12 h-12 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
        {React.cloneElement(props.icon, {
          className: "w-6 h-6 text-white",
        })}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-sky-700 transition-colors duration-300">
          {props.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {props.children}
        </p>
      </div>
      
      {/* Subtle number indicator */}
      <div className="flex-shrink-0 w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">
        {props.index + 1}
      </div>
    </div>
  );
}
