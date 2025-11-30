"use client";
import Image from "next/image";
import './sliderProduct.scss'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductGalleryProps {
  images: { 
    src: string; 
    alt: string 
}[];
}

export default function sliderProduct({ images }: ProductGalleryProps) {
   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
    <>
<div className="galleryContainer">
  <div className="thumbs">
    <Swiper
      onSwiper={setThumbsSwiper}
      direction="vertical"
      slidesPerView={3}
      spaceBetween={40}
      modules={[Thumbs]}
      className="thumbsSwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            src={img.src}
            alt={img.alt}
            width={160}
            height={160}
            className="thumbImage"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <div className="mainImage">
    <Swiper
      modules={[Thumbs]} 
      thumbs={{ swiper: thumbsSwiper }}
      className="mainSwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            src={img.src}
            alt={img.alt}
            width={460}
            height={540}
            className="mainImageContent"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
    </>
  );
}