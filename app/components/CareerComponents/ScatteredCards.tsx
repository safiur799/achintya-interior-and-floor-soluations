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
    const mm = gsap.matchMedia();

    const setupTimeline = (
      finalPositions: { x: number; y: number; rotate: number }[],
    ) => {
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

      setTimeout(() => ScrollTrigger.refresh(), 100);
    };

    mm.add("(min-width: 1025px)", () => {
      // Arc positions for Desktop (relative to center)
      const finalPositions = [
        { x: -550, y: 300, rotate: -35 }, // Far Left
        { x: -350, y: 60, rotate: -20 }, // Mid Left
        { x: -130, y: -200, rotate: -10 }, // Center Left (Peak)
        { x: 130, y: -200, rotate: 10 }, // Center Right (Peak)
        { x: 350, y: 60, rotate: 20 }, // Mid Right
        { x: 550, y: 300, rotate: 35 }, // Far Right
      ];
      setupTimeline(finalPositions);
    });

    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      // Scaled arc positions for Tablet (768px-1024px)
      const finalPositions = [
        { x: -300, y: 220, rotate: -35 }, // Far Left
        { x: -240, y: 40, rotate: -20 }, // Mid Left
        { x: -90, y: -150, rotate: -10 }, // Center Left (Peak)
        { x: 90, y: -150, rotate: 10 }, // Center Right (Peak)
        { x: 240, y: 40, rotate: 20 }, // Mid Right
        { x: 300, y: 220, rotate: 35 }, // Far Right
      ];
      setupTimeline(finalPositions);
    });

    return () => mm.revert();
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
