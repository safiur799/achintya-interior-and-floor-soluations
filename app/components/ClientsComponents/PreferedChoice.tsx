"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Cost-Optimized Execution without compromising quality.",
  },
  {
    title: "Strong Project Management ensuring timely delivery.",
  },
  {
    title: "Scalable Operations for large commercial projects.",
  },
  {
    title: "Client-Centric Approach with customized solutions.",
  },
  {
    title: "Deep understanding of compliance-driven environments (NBFC norms).",
  },
];

const PreferedChoice = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100px",
          end: "+=1000",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(cardsRef.current, {
        flexBasis: "calc(25% - 15px)",
        backgroundColor: "#e3e0c7",
        color: "#1a1a1a",
        ease: "none",
      });
    });

    mm.add("(max-width: 767px)", () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="prefered-choice" ref={containerRef}>
      <h2>Preferred choice of Worlds biggest brands</h2>
      <div className="prefered-choice-container">
        <div className="cards-wrapper">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="choice-card"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferedChoice;
