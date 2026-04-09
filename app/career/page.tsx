"use client";
import React, { useLayoutEffect, useRef } from "react";
import Wrapper from "../layout/Wrapper";
import CommonBanner from "../components/CommonBanner";
import { assets } from "../json/assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import JoinTeam from "../components/CareerComponents/JoinTeam";
import JobOpportunities from "../components/CareerComponents/JobOpportunities";
import ScatteredCards from "../components/CareerComponents/ScatteredCards";
import { Map } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Career Growth",
    description:
      "We believe in investing in our employees' professional development and providing opportunities to learn and grow within the company.",
  },
  {
    title: "Work-Life Balance",
    description:
      "We understand the importance of maintaining a healthy work-life balance and strive to provide flexibility and support to our employees.",
  },
  {
    title: "Diversity and Inclusion",
    description:
      "We believe diversity makes us stronger, and we are committed to fostering an inclusive workplace where everyone feels valued and supported.",
  },
  {
    title: "Impactful Work",
    description:
      "At Padams Group, you will have the opportunity to work on challenging and meaningful projects that make a real difference for our clients.",
  },
];

const scatteredData = [
  { title: "DE&I", icon: <Map size={20} /> },
  { title: "Recognizing Excellence", icon: <Map size={20} /> },
  { title: "Pan India Presence", icon: <Map size={20} /> },
  { title: "Ethics and Integrity", icon: <Map size={20} /> },
  { title: "Client Success Stories", icon: <Map size={20} /> },
  { title: "Sustainability Focus", icon: <Map size={20} /> },
];

const page = () => {
  const workwithuscontainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workwithuscontainerRef.current,
          start: "top 70px",
          end: "+=3000",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(cardsRef.current, {
        flexBasis: "calc(25% - 15px)",
        backgroundColor: "#e3e0c7",
        color: "#1a1a1a",
        ease: "none",
        duration: 2,
      });

      // Stay period
      tl.to({}, { duration: 1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper hideAnnouncements={true}>
      <CommonBanner title="Careers" bgImage={assets.hero} />

      <section className="career-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="career-content">
                <h2 className="career-title">Why work with us</h2>
                <p className="career-description">
                  At Padams Group, we understand that our workforce is our
                  greatest asset. We offer opportunities to work on innovative
                  projects in a collaborative environment, where your skills and
                  ideas help shape inspiring spaces. Explore our open positions
                  and become part of a company committed to design excellence
                  and professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="work-with-us-container" ref={workwithuscontainerRef}>
          <div className="prefered-choice-container">
            <div className="cards-wrapper">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="choice-card"
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <JoinTeam />
        <JobOpportunities />
        <ScatteredCards cards={scatteredData} />
      </section>
    </Wrapper>
  );
};

export default page;
