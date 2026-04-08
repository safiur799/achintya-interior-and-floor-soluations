"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const portfolioItems = [
  {
    img: "/assets/kitchen.png",
    title: "Bespoke Kitchens",
  },
  {
    img: "/assets/bedroom.png",
    title: "Serene Retreats",
  },
  {
    img: "/assets/flooring.png",
    title: "Master Flooring",
  },
  {
    img: "/assets/hero.png",
    title: "Commercial Spaces",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // MASTER TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=600%",
          pin: true,
          scrub: 1,
        },
      });

      // Initial state
      gsap.set(".portfolio-grid", { opacity: 0, scale: 0.1 });

      // 1. Split Text & Deep Fade
      tl.to(
        ".expertise-top",
        { yPercent: -400, opacity: 0, duration: 1.5 },
        0,
      ).to(
        ".expertise-bottom",
        { yPercent: 400, opacity: 0, duration: 1.5 },
        0,
      );

      // 2. Center Grid Reveal (Popping out from the gap)
      tl.to(
        ".portfolio-grid",
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.inOut" },
        0.5,
      );

      // 3. Card Stacking
      const cards = gsap.utils.toArray(".portfolio-card") as HTMLElement[];
      cards.forEach((card, i) => {
        if (i === 0) return;

        // Fade out previous card's overlay as new card arrives
        const prevOverlay = cards[i - 1].querySelector(".portfolio-overlay");
        if (prevOverlay) {
          tl.to(
            prevOverlay,
            {
              opacity: 0,
              yPercent: -20,
              duration: 1,
              ease: "power2.inOut",
            },
            i * 2,
          );
        }

        tl.fromTo(
          card,
          { yPercent: 100 },
          { yPercent: 0, ease: "none", duration: 2 },
          i * 2 + 1, // Ensure they come after the split reveal
        );
      });

      // After all cards reveal, move grid to top layer
      tl.set(".portfolio-grid", { zIndex: 30 }, "+=0.1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    const btn = document.getElementById(`btn-${cardIndex}`);
    if (btn) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(btn, {
        x: x - btn.offsetWidth / 2,
        y: y - btn.offsetHeight / 2,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  };

  const handleMouseEnter = (cardIndex: number) => {
    const btn = document.getElementById(`btn-${cardIndex}`);
    if (btn) {
      gsap.to(btn, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    }
  };

  const handleMouseLeave = (cardIndex: number) => {
    const btn = document.getElementById(`btn-${cardIndex}`);
    if (btn) {
      gsap.to(btn, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      <div className="reveal-container">
        <div className="expertise-wrapper" style={{ zIndex: 10 }}>
          <div className="expertise-text expertise-top">Expertise</div>
          <div className="expertise-text expertise-bottom">Expertise</div>
        </div>

        <div className="portfolio-grid" style={{ zIndex: 5 }}>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="portfolio-card"
              style={{ zIndex: index + 1 }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img src={item.img} alt={item.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
              </div>
              <div
                id={`btn-${index}`}
                className="know-more-btn"
                style={{ opacity: 0, scale: 0, zIndex: 100 }}
              >
                Know More
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
