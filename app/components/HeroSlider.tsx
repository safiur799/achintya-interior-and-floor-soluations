import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import { assets } from "../json/assets";
import Image from "next/image";

const slides = [
  {
    bg: assets.large_open_office_floor,
    title: "Redefining Interiors",
    desc: "Tailored solutions for modern living spaces.",
    btn: "Discover More",
    isVideo: false,
  },
  {
    bg: assets.premium_floring_banner,
    title: "Premium Flooring",
    desc: "Elegance under every step.",
    btn: "Explore Collections",
    isVideo: false,
  },
  {
    bg: assets.biophilic_office_corridor,
    title: "Commercial Space",
    desc: "Kitchens that inspire culinary creativity.",
    btn: "Contact Us",
    isVideo: false,
  },
];

export default function HeroSlider() {
  return (
    <div className="hero-slider swiper">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop={true}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.isVideo ? (
              <video
                src={slide.bg}
                autoPlay
                loop
                muted
                playsInline
                className="video-background"
              />
            ) : (
              <Image
                src={slide.bg}
                alt={slide.title}
                width={1920}
                height={1080}
                className="video-background"
              />
            )}
            <div className="hero-content">
              <div className="banner_logo">
                <Image src={assets.logo} alt="Logo" width={200} height={200} />
                <h4>Achintya Interior & Floor Solutions Pvt.Ltd</h4>
              </div>
              <h1 className="reveal-text">{slide.title}</h1>
              <p>{slide.desc}</p>
              <a href="#contact" className="btn">
                {slide.btn}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
