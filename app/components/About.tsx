"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AboutProps {
  title?: string;
  description?: string;
}

export default function About({
  title,
  description = "Achintya Interior and Floor Solutions was founded with a vision to redefine space through innovative design and superior craftsmanship. Our journey has been defined by a commitment to quality, aesthetic precision, and a deep understanding of our clients' dreams. From luxurious residential projects to high-end commercial spaces, we bring a level of detail that transforms the ordinary into the extraordinary.",
}: AboutProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      gsap.to(textRef.current, {
        backgroundSize: "100% 100%, 100% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="about">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        <p ref={textRef} className="text-fill">
          {description}
        </p>
      </div>
    </section>
  );
}
