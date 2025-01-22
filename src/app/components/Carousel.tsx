"use client"
"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/mountains.png",
    heading: "Heavenly Mountains",
    subheading: "Explore the breathtaking beauty & majestic peaks of the northern areas.",
  },
  {
    id: 2,
    image: "/images/slide-2.png",
    heading: "Serene Lakes",
    subheading: "Discover the tranquil beauty of pristine lakes.",
  },
  {
    id: 3,
    image: "/images/valley.png",
    heading: "Verdant Valleys",
    subheading: "Experience the lush greenery and vibrant lands.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[550px] md:h-[700px] overflow-hidden bg-gray-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentIndex ? "translate-x-0" : index < currentIndex ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{slide.heading}</h2>
            <p className="text-sm md:text-lg mt-2">{slide.subheading}</p>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-yellow-800" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
