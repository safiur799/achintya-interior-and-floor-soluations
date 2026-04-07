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
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Split Text Animation with Pinning
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "center center",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
      });

      gsap.to(".expertise-top", {
        yPercent: -100,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "+=100%",
          scrub: 1,
        },
      });

      gsap.to(".expertise-bottom", {
        yPercent: 100,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "+=100%",
          scrub: 1,
        },
      });

      // 2. Card Stacking Effect
      const cards = gsap.utils.toArray(".portfolio-card") as HTMLElement[];
      cards.forEach((card, i) => {
        // Pin each card when it reaches the top
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false, // Allows the next card to slide over
          id: `pin-${i}`,
        });

        // Alternating Reveal (Optional, might look busy with stacking)
        const isEven = i % 2 === 0;
        gsap.from(card.querySelector(".portfolio-overlay"), {
          xPercent: isEven ? -100 : 100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
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
        duration: 0.8, // Slightly slower for smoother follow
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
        display: "flex", // Ensure it's rendered
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
        onComplete: () => {
          btn.style.display = "none";
        },
      });
    }
  };

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      <div className="expertise-trigger" ref={triggerRef}>
        <div className="expertise-wrapper">
          <div className="expertise-text expertise-top">Expertise</div>
          <div className="expertise-text expertise-bottom">Expertise</div>
        </div>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="portfolio-card"
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
              style={{ display: "none" }} // Initially hidden
            >
              Know More
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
