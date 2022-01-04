import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./ProductCarousel.scss";

const DetailCarousel = ({ images }) => {
  const [currIdx, setCurrIdx] = useState(0);

  const slideNextImage = () => {
    if (currIdx === images.length - 1) return;
    setCurrIdx(currIdx + 1);
  };

  const slidePrevImage = () => {
    if (currIdx === 0) return;
    setCurrIdx(currIdx - 1);
  };

  return (
    <section className="detail-carousel" style={{ "--currIdx": `${currIdx}` }}>
      <section className="detail-navigator">
        <IoIosArrowUp onClick={slidePrevImage} />
        {images?.map((image, idx) => (
          <img
            src={image}
            key={idx}
            alt="detail-navigator"
            className={`${currIdx === idx && "current"}`}
            onClick={() => setCurrIdx(idx)}
          />
        ))}
        <IoIosArrowDown onClick={slideNextImage} />
      </section>
      <section className="detail-slider">
        {images?.map((image, idx) => (
          <img src={image} key={idx} alt="detail file" />
        ))}
      </section>
    </section>
  );
};

export default DetailCarousel;
