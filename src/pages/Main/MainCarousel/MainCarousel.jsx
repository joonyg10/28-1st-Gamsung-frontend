import React, { useState, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosPause,
  IoIosPlay,
} from "react-icons/io";
import Carousel from "../components/Carousel/Carousel";
import Navigator from "../components/Navigator/Navigator";
import { HERO } from "../data";
import "./MainCarousel.scss";

const LAST_HERO_INDEX = HERO.length - 1;
const HERO_ENDPOINT = "./images/Main/Hero/fakeImage";
let timer = 0;

const MainCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const nextIndex = carouselIndex === LAST_HERO_INDEX ? 0 : carouselIndex + 1;

  let heroStyle = {
    "--currIdx": `${carouselIndex}`,
    "--nav-color": "darkgray",
    "--right": 0,
  };

  const slideToLeft = () => {
    if (carouselIndex === 0) return;
    setCarouselIndex(prevIndex => prevIndex - 1);
    clearTimeout(timer);
  };

  const slideToRight = () => {
    if (carouselIndex === LAST_HERO_INDEX) return;
    setCarouselIndex(prevIndex => prevIndex + 1);
    clearTimeout(timer);
  };

  const pauseAutoSlide = () => {
    setIsPlaying(false);
    clearTimeout(timer);
  };

  const playAutoSlide = () => {
    setIsPlaying(true);
    setTimerForNextSlide();
  };

  const setTimerForNextSlide = () => {
    timer = setTimeout(() => {
      setCarouselIndex(nextIndex);
    }, 2500);
  };

  useEffect(() => {
    clearTimeout(timer);
    if (!isPlaying) return;
    setTimerForNextSlide();
    return () => clearTimeout(timer);
  }, [carouselIndex]);

  return (
    <section className="hero" style={heroStyle}>
      <IoIosArrowBack size={52} className="arrow" onClick={slideToLeft} />
      <IoIosArrowForward size={52} className="arrow" onClick={slideToRight} />
      <Carousel
        currIdx={carouselIndex}
        lastIdx={LAST_HERO_INDEX}
        tabs={HERO}
        imgEndPoint={HERO_ENDPOINT}
        height="35rem"
      >
        <Navigator
          currIdx={carouselIndex}
          setCurrIdx={setCarouselIndex}
          tabs={HERO}
          playing={isPlaying}
          top="85%"
        >
          <div className="play-control">
            {isPlaying ? (
              <IoIosPause size={20} onClick={pauseAutoSlide} />
            ) : (
              <IoIosPlay size={20} onClick={playAutoSlide} />
            )}
          </div>
        </Navigator>
      </Carousel>
    </section>
  );
};

export default MainCarousel;
