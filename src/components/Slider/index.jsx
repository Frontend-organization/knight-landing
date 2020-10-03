import React from "react";
import Slider from "react-slick";
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";

import styles from "./Slider.module.css";

const images = [blog1, blog2, blog3];

function SliderComponent() {
  return (
    <div id="SliderWrapper" className={styles.SliderWrapper}>
      <Slider
        slidetoShow={1}
        dots
        arrows={false}
        customPaging={(i) => <button></button>}
        dotsClass={styles.SliderControls}
        autoplay
      >
        {images.map((image, i) => (
          <figure key={i} className={styles.SliderImage}>
            <img src={image} alt={`${i}-blog`} />
          </figure>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
