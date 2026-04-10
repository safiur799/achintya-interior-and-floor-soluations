"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "../json/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedHistory = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
      },
    });

    // Step 1: Flip Founders Image
    tl.to(foundersRef.current, {
      rotateY: 180,
      opacity: 0,
      duration: 1,
    })
      // Step 2: Fade in Team Image and scale it to full viewport
      .to(
        teamRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 2,
        },
        "-=0.5",
      )
      // Step 3: Reveal Text Overlay
      .to(textRef.current, {
        opacity: 1,
        duration: 1,
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="history-section-wrapper">
      <div ref={containerRef} className="history-container">
        {/* Phase 1 & 2: Founders Image (480x480) */}
        <div ref={foundersRef} className="founders-wrapper">
          <Image src={assets.office_team} alt="Founders" fill className="" />
        </div>

        {/* Phase 3: Team Wide Image */}
        <div ref={teamRef} className="team-wide-wrapper">
          <Image
            src={assets.office_team}
            alt="Achintya Team"
            fill
            className=""
          />
        </div>

        {/* Phase 4: Text Reveal Overlay */}
        <div ref={textRef} className="history-overlay">
          <p className="history-text">
            Our journey began with three brothers united by a profound passion
            for carpentry, skillfully crafting each piece by hand for the houses
            in the vicinity of a small village of Rajasthan; has now grown to a
            community of professionals who deliver an average 4 million sq ft of
            humongous projects every year, PAN India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHistory;
