import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../json/assets";

const cards = [
  {
    title: "Commercial",
    description:
      "We provide comprehensive interior design and flooring solutions for commercial spaces, including offices, retail stores, restaurants, and hospitality venues. Our focus is on creating functional, aesthetically pleasing environments that enhance productivity and brand identity.",
    image: assets.curved_desk_workspace,
  },
  {
    title: "Residential",
    description:
      "Transform your home with our expert interior design and flooring services. From modern living rooms to cozy bedrooms, we specialize in creating personalized spaces that reflect your style and comfort.",
    image: assets.high_ceiling_living_room_alt,
  },
  {
    title: "Industrial",
    description:
      "Durable, high-performance flooring solutions for industrial environments. We offer a range of materials designed to withstand heavy traffic, chemical exposure, and demanding conditions while maintaining safety and functionality.",
    image: assets.executive_office_wall_decor,
  },
];

const BottomCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
      });

      const cardElements = gsap.utils.toArray(".bottom-card") as HTMLElement[];

      cardElements.forEach((card, i) => {
        if (i === 0) return;

        tl.fromTo(
          card,
          { yPercent: 150, xPercent: 5 },
          {
            yPercent: 0 + i * 1,
            xPercent: 0,
            duration: 1,
            ease: "none",
          },
          i,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bottom-cards-section" ref={sectionRef}>
      <div className="container" style={{ maxWidth: "100%", width: "100%" }}>
        <div className="bottom-cards-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bottom-card"
              style={{ zIndex: index + 1 }}
            >
              <div className="bottom-card-content">
                <h3 className="bottom-card-title">{card.title}</h3>
                <p className="bottom-card-description">{card.description}</p>
              </div>
              <div className="bottom-card-image">
                <img src={card.image} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomCards;
