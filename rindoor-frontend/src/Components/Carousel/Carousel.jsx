// import React, { useEffect, useState } from "react";
// import style from "./Carousel.module.css";
// import Portada1 from "@/assets/portada1.png";
// import Portada2 from "@/assets/portada2.png";
// import Portada3 from "@/assets/portada3.png";
// import Portada4 from "@/assets/portada4.png";
// import Image from "next/image";

// function Carousel() {
//   const images = [Portada4, Portada1, Portada2, Portada3];
//   const [imgIndex, setImgIndex] = useState(0);

//   function next() {
//     setImgIndex((imgIndex + 1) % images.length);
//   }

//   function back() {
//     setImgIndex((imgIndex - 1 + images.length) % images.length);
//   }

//   useEffect(() => {
//     const interval = setInterval(next, 6000);
//     return () => clearInterval(interval);
//   }, [imgIndex]);

//   return (
//     <div className="w-full h-[370px] ">
//       <Image
//         src={images[imgIndex]}
//         className={`${style.img} ${style.fade}`}
//         alt={`Slide ${imgIndex}`}
//       />
//       <a className={style.prev} onClick={back}>
//         &#10094;
//       </a>
//       <a className={style.next} onClick={next}>
//         &#10095;
//       </a>
//       {/* <div className={style.dotContainer}>
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={index === imgIndex ? style.activeDot : style.dot}
//             onClick={() => setImgIndex(index)}
//           ></span>
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Carousel;
