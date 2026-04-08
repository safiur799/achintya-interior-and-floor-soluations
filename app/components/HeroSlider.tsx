import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const slides = [
    {
        bg: "/assets/hero.png",
        title: "Redefining Interiors",
        desc: "Tailored solutions for modern living spaces.",
        btn: "Discover More",
    },
    {
        bg: "/assets/flooring.png",
        title: "Premium Flooring",
        desc: "Elegance under every step.",
        btn: "Explore Collections",
    },
    {
        bg: "/assets/kitchen.png",
        title: "Functional Art",
        desc: "Kitchens that inspire culinary creativity.",
        btn: "Contact Us",
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
                        <video
                            src="/assets/dummy_video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="video-background"
                        />
                        <div className="hero-content">
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
