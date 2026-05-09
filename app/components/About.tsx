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
  description = `The company was founded by Shashi & Raaj, couple of young talented entrepreneurs from Kolkata in the year 2017. The duo supported by a team of dedicated professionals and channel partners have a tremendous experience to successfully deliver large complex projects both to local and MNC clients pan India.

Over the years Achintya Interior & Floor Solutions Pvt. Ltd. a.k.a. Achintya has developed to its present status due to its credibility, speed and quality of work, keeping in mind how to embrace the nature and reduce carbon emission to mother Earth.

It’s motto 3S i.e. ‘Safety, Sustainability and Service brings growth’ maximizes customer satisfaction. In due course of time, Achintya has achieved certificates for Quality Management System (ISO 9001:2015), Environmental Management System (ISO 14001:2015) and Occupational Health and Safety Management System (ISO 45001:2018).

We believe Achintya’s passion for innovation and perfection will lead us to be one of the best interior designer company in this part of the world.`,
}: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const paragraphs = gsap.utils.toArray(".text-fill") as HTMLElement[];
      
      paragraphs.forEach((p) => {
        gsap.to(p, {
          backgroundSize: "100% 100%, 100% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [description]);

  const paragraphs = description.split("\n\n").filter(p => p.trim() !== "");

  return (
    <section id="about" ref={containerRef}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        <div className="about-content">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-fill mb-8">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
