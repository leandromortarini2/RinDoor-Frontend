import React, { useEffect, useState } from "react";
import style from "./Carousel.module.css";

import Image from "next/image";

function Carousel() {
  const images = [
    "https://i.ibb.co/483JRrD/Rindoor-7.png",
    "https://i.ibb.co/Ycs8Mx0/Rindoor-6.png",
    "https://i.ibb.co/PWB65S7/Rindoor-5.png",
    "https://i.ibb.co/4MWVLBc/Rindoor-4.png",
  ];
  const [imgIndex, setImgIndex] = useState(0);

  function next() {
    setImgIndex((imgIndex + 1) % images.length);
  }

  function back() {
    setImgIndex((imgIndex - 1 + images.length) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [imgIndex]);

  return (
    <div className="w-full ">
      <img
        src={images[imgIndex]}
        className={`${style.img} ${style.fade}`}
        alt={`Slide ${imgIndex}`}
      />
      {/* <a className={style.prev} onClick={back}>
        &#10094;
      </a> */}
      {/* <a className={style.next} onClick={next}>
        &#10095;
      </a> */}
      {/* <div className={style.dotContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === imgIndex ? style.activeDot : style.dot}
            onClick={() => setImgIndex(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
}

export default Carousel;
