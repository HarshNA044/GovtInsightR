import React, { useEffect, useState } from "react";
import "./Slider.css";

const images = [
  {
    src: "https://i.ibb.co/99ytjWfr/IMG-20250416-WA0002.jpg",
    caption: "Caption Text",
  },
  {
    src: "https://i.ibb.co/WNfXdF6N/IMG-20250416-WA0001.jpg",
    caption: "Caption Two",
  },
  {
    src: "https://i.ibb.co/WpM3q06n/Untitled-design-20250417-151348-0000.png",
    caption: "Caption Three",
  },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="mySlides fade"
            style={{ display: index === slideIndex ? "block" : "none" }}
          >
            <div className="numbertext">{index + 1} / {images.length}</div>
            <img src={image.src} style={{ width: "100%" }} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Slider;