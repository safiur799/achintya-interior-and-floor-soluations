"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Certificates from "./components/Certificates";
import TrustedBy from "./components/TrustedBy";
import BottomCards from "./components/BottomCards";
import Wrapper from "./layout/Wrapper";
import ServerDown from "./components/ServerDown";


export default function Home() {
  return <ServerDown />;

  // ScrollTrigger Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal Up Animation
      const revealUps = document.querySelectorAll(".reveal-up");
      revealUps.forEach((el) => {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

      // Reveal Left/Right for Map
      gsap.from(".reveal-right", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: { trigger: ".map-section", start: "top 80%" },
      });
      gsap.from(".reveal-left", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: { trigger: ".map-section", start: "top 80%" },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper>
      <HeroSlider />
      <About />
      <Stats />
      <Certificates />
      <Portfolio />
      <TrustedBy />
      <BottomCards />
      <Contact />
    </Wrapper>
  );
}
