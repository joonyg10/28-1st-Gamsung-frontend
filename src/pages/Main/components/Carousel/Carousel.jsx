import React from "react";
import "./Carousel.scss";

const Carousel = props => {
  const { tabs, imgEndPoint, currIdx, height, children } = props;
  return (
    <section className="carousel">
      {children}
      <ul
        className="carousel-images"
        style={{ "--height": height, "--currIdx": `${currIdx}` }}
      >
        {tabs.map((_, idx) => (
          <img key={idx} src={`${imgEndPoint}${idx + 1}.jpg`} alt="fake data" />
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
