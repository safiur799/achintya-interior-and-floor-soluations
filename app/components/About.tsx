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
  description = "We are a professional interior design and flooring solutions company based in Kolkata, West Bengal, established in 2017. With a strong foundation in innovation, functionality, and aesthetics, we specialize in creating thoughtfully designed interior environments for residential, commercial, and corporate spaces.As a dynamic and performance-driven interior contracting company, we focus particularly on commercial and corporate interiors, delivering spaces that are not only visually compelling but also highly efficient and practical.Our work is guided by the philosophy of “Form Follows Function,” ensuring that every design decision enhances usability, productivity, and overall user experience.We offer complete turnkey interior solutions—from concept design and space planning to execution and final finishing.By combining modern design principles, biophilic elements, and smart space planning with high - quality materials, we create environments that reflect our clients’ lifestyle, brand identity, and operational needs.Over the years, we have successfully executed projects ranging from mid - sized offices to large - format commercial spaces exceeding 80,000 sq.ft.Our ability to scale projects while maintaining strict quality standards and cost efficiency sets us apart.At our core, we are committed to transforming spaces into inspiring, functional, and future - ready environments that support growth, collaboration, and well - being.",
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
