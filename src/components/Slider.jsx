import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://res.cloudinary.com/dawddkgur/image/upload/v1710467327/test/weea96qhstz0kwuqupub.jpg",
      link: "/nikon",
    },
    {
      url: "https://res.cloudinary.com/dawddkgur/image/upload/v1710467339/test/lfh6vgsqdlikqvoucct0.jpg",
      link: "/nikon",
    },
    {
      url: "https://res.cloudinary.com/dawddkgur/image/upload/v1710467339/test/mnmmgjjozci1oa34h5hu.jpg",
      link: "/nikon",
    },
    {
      url: "https://res.cloudinary.com/dawddkgur/image/upload/v1710467339/test/rfwupsehlu1upistq4zm.jpg",
      link: "/nikon",
    },
    {
      url: "https://res.cloudinary.com/dawddkgur/image/upload/v1710467349/test/yvzbvrvbpgyybzndlyq1.jpg",
      link: "/nikon",
    },
    {
      url: "https://res.cloudinary.com/dawddkgur/image/upload/v1710467356/test/oo6b9e4zeossz6euzbtu.jpg",
      link: "",
    },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-[1200px] h-[600px] w-full m-auto py-16 px-4 relative group">
      <Link
        to={slides[currentIndex].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
      </Link>
    </div>
  );
}

export default Slider;
