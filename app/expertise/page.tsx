"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "../layout/Wrapper";
import CommonBanner from "../components/CommonBanner";
import { assets } from "../json/assets";
import ExpertiseCard, {
  ExpertiseCardProps,
} from "../components/ExpertiseComponents/ExpertiseCard";

export const solutionCards: ExpertiseCardProps[] = [
  // ... existing cards ...
  {
    id: 1,
    title: "Build Solutions",
    image: assets.bedroom,
    description:
      "For over 30 years, Padams has delivered world-class facilities across India with a core focus on comprehensive build solutions. Driven by a commitment to excellence and innovation, we bring global design standards to life, transforming spaces for international, multinational, and traditional business houses. Our hallmark is precision execution, with safety and quality at the forefront. Senior management’s dedicated attention to each client ensures an exceptional and seamless project experience.",
    services: [
      "Interior Fitout Execution",
      "Turnkey Interior Solutions",
      "Customized Joinery & Furniture",
      "Landscaping & Hardscaping Works",
    ],
  },
  {
    id: 2,
    title: "Build Solutions",
    image: assets.bedroom,
    description:
      "For over 30 years, Padams has delivered world-class facilities across India with a core focus on comprehensive build solutions. Driven by a commitment to excellence and innovation, we bring global design standards to life, transforming spaces for international, multinational, and traditional business houses. Our hallmark is precision execution, with safety and quality at the forefront. Senior management’s dedicated attention to each client ensures an exceptional and seamless project experience.",
    services: [
      "Interior Fitout Execution",
      "Turnkey Interior Solutions",
      "Customized Joinery & Furniture",
      "Landscaping & Hardscaping Works",
    ],
  },
  {
    id: 3,
    title: "Build Solutions",
    image: assets.bedroom,
    description:
      "For over 30 years, Padams has delivered world-class facilities across India with a core focus on comprehensive build solutions. Driven by a commitment to excellence and innovation, we bring global design standards to life, transforming spaces for international, multinational, and traditional business houses. Our hallmark is precision execution, with safety and quality at the forefront. Senior management’s dedicated attention to each client ensures an exceptional and seamless project experience.",
    services: [
      "Interior Fitout Execution",
      "Turnkey Interior Solutions",
      "Customized Joinery & Furniture",
      "Landscaping & Hardscaping Works",
    ],
  },
  {
    id: 4,
    title: "Build Solutions",
    image: assets.bedroom,
    description:
      "For over 30 years, Padams has delivered world-class facilities across India with a core focus on comprehensive build solutions. Driven by a commitment to excellence and innovation, we bring global design standards to life, transforming spaces for international, multinational, and traditional business houses. Our hallmark is precision execution, with safety and quality at the forefront. Senior management’s dedicated attention to each client ensures an exceptional and seamless project experience.",
    services: [
      "Interior Fitout Execution",
      "Turnkey Interior Solutions",
      "Customized Joinery & Furniture",
      "Landscaping & Hardscaping Works",
    ],
  },
];

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".expertise-cards-container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.to(".expertise-scroll-progress", {
      scaleY: 1,
      ease: "none",
    }).to(
      ".expertise-scroll-dot",
      {
        y: (index, target) => {
          const track = document.querySelector(".expertise-scroll-track");
          return track ? track.clientHeight : 0;
        },
        ease: "none",
      },
      0,
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Wrapper hideAnnouncements={true}>
      <CommonBanner
        title="Our Expertise"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint nulla iusto doloremque dignissimos! Consequuntur eius tenetur corporis, nulla distinctio vel. Voluptatum molestias reiciendis deserunt? Inventore excepturi quo saepe ad.  "
        bgImage={assets.hero}
      />
      <section className="expertise-section">
        <div className="expertise-cards-container">
          {/* <div className="expertise-scroll-track">
            <div className="expertise-scroll-line"></div>
            <div className="expertise-scroll-progress"></div>
            <div className="expertise-scroll-dot"></div>
          </div> */}
          {solutionCards.map((card, idx) => (
            <ExpertiseCard key={idx} {...card} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Page;
