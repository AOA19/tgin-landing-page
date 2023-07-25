import React, { useState} from "react";
import "./BestSellersCarousel.scss";
import { bestCarousel } from "../data/productsData";
import Button from "react-bootstrap/Button";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const BestSellersCarousel = ({ data }) => {
  const [carousel, setCarousel] = useState(0);

  const nextImg = () => {
    setCarousel(carousel === data.length - 1 ? 0 : carousel + 1);
  };
  const prevImg = () => {
    setCarousel(carousel === 0 ? data.length - 1 : carousel - 1);
  };

  return (
    <div className="d-flex justify-content-center">
      {/* Left arrow  */}
      <button className="arrow-btn arrow-btn__left" aria-label="Previous image">
        <HiArrowLongLeft onClick={prevImg} className="carousel-arrow" />
      </button>
      {bestCarousel.map((item, index) => (
        // Best Sellers Image
        <div
          key={index}
          className={
            carousel === index
              ? "bestsellers__carousel"
              : "bestsellers__carousel bestsellers__carousel--hidden"
          }
        >
          <div>
            <img src={item.src} alt={item.name} className="bestsellers__img" />
          </div>
          <div className="text-center ps-sm-4">
            {/* Product description */}
            <p className="bestsellers__name">{item.name}</p>
            <span className="bestsellers__rating">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </span>
            <p className="bestsellers__price">${item.price}</p>
            {/* Add to cart button */}
            <Button
              variant="dark"
              href="/#"
              type="button"
              size="sm"
              className="addToCartBtn"
            >
              Add To Cart
            </Button>{" "}
          </div>
        </div>
      ))}
      {/* Right Arrow */}
      <button className="arrow-btn arrow-btn__right" aria-label="Next image">
        <HiArrowLongRight onClick={nextImg} className="carousel-arrow" />
      </button>
      {/*  Carousel Indicators */}
      <span className="bestseller__indicators">
        {bestCarousel.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setCarousel(index)}
              aria-label="Next image"
              className={
                carousel === index
                  ? "indicator"
                  : "indicator indicator--inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default BestSellersCarousel;
