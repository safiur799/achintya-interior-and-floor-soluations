"use client";
import React, { JSX, use, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  icon: JSX.Element;
  title: string;
}

interface ScatteredCardsProps {
  cards: CardItem[];
}

const ScatteredCards: React.FC<ScatteredCardsProps> = ({ cards }) => {
  const scatteredContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scatteredContainerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // Arc positions (relative to center)
      const finalPositions = [
        { x: -550, y: 300, rotate: -35 }, // Far Left
        { x: -350, y: 60, rotate: -20 }, // Mid Left
        { x: -130, y: -200, rotate: -10 }, // Center Left (Peak)
        { x: 130, y: -200, rotate: 10 }, // Center Right (Peak)
        { x: 350, y: 60, rotate: 20 }, // Mid Right
        { x: 550, y: 300, rotate: 35 }, // Far Right
      ];

      cards.forEach((_, index) => {
        const pos = finalPositions[index] || { x: 0, y: 0 + index, rotate: 0 };
        tl.to(
          cardsRef.current[index],
          {
            x: pos.x,
            y: pos.y,
            rotation: pos.rotate,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          0,
        );
      });

      // Refresh ScrollTrigger after a slight delay to ensure other pins are handled
      setTimeout(() => ScrollTrigger.refresh(), 100);
    });

    return () => ctx.revert();
  }, [cards]);

  return (
    <section className="scattered-section" ref={scatteredContainerRef}>
      <div className="scattered-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="scattered-card"
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <div className="scattered-card-inner">
              <div className="scattered-icon">{card.icon}</div>
              <h3 className="scattered-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScatteredCards;
