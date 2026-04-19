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
  {
    id: 1,
    title: "Corporate Interiors",
    image: assets.office_conference_room,
    description:
      "We specialize in creating high-performance corporate environments that foster productivity, collaboration, and brand identity. From ergonomic workstations to executive suites, our designs are future-ready.",
    services: [
      "Space Planning",
      "Modular Workstations",
      "Executive Cabins",
      "Conference Room Integration",
    ],
  },
  {
    id: 2,
    title: "NBFC Workspaces",
    image: assets.executive_office_main_view,
    description:
      "Tailored interior solutions for Non-Banking Financial Companies (NBFCs). We focus on creating secure, professional, and customer-centric spaces that reflect financial stability and trust.",
    services: [
      "Secure Branch Layouts",
      "Transaction Counters",
      "Client Lounge Areas",
      "Acoustic Solutions",
    ],
  },
  {
    id: 3,
    title: "Turnkey Solutions",
    image: assets.staircase_with_led_lighting,
    description:
      "Our turnkey approach means we handle everything from site survey and conceptualization to material procurement and final site execution. You get a move-in-ready space with zero hassle.",
    services: [
      "End-to-End Project Management",
      "Budget Control",
      "Quality Assurance",
      "Timely Delivery",
    ],
  },
  {
    id: 4,
    title: "Flooring Systems",
    image: assets.flooring,
    description:
      "With a legacy in flooring excellence, we provide durable and aesthetically superior flooring solutions including carpets, vinyl, wooden, and industrial grade surfaces for every need.",
    services: [
      "Carpet Tiles & Broadlooms",
      "Luxury Vinyl Tiles (LVT)",
      "Engineered Wood Flooring",
      "Epoxy & Industrial Coatings",
    ],
  },
  {
    id: 5,
    title: "Space Planning",
    image: assets.open_layout_workspaces,
    description:
      "Maximizing the utility of every square foot. Our expert space planning ensures smooth traffic flow, optimal light distribution, and a layout that aligns with your operational requirements.",
    services: [
      "Occupancy Analysis",
      "Zoning & Layout Design",
      "Circulation Optimization",
      "Future Expansion Planning",
    ],
  },
  {
    id: 6,
    title: "Cost Engineering",
    image: assets.building_reception_directory,
    description:
      "Achieving high-end results within budget through smart material selection and value engineering. We help you balance cost, quality, and time to maximize your project's ROI.",
    services: [
      "Value Engineering",
      "Bill of Quantities (BOQ)",
      "Material Lifecycle Analysis",
      "Procurement Strategy",
    ],
  },
];

const Page = () => {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const dotRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const dot = dotRef.current;

    if (!track || !dot) return;

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
      dot,
      {
        y: () => track.offsetHeight - dot.offsetHeight,
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
        title="Expertise"
        description="Today, our team of over 5,000+ skilled and multifaceted professionals bring unparalleled expertise and a commitment to excellence to every project we undertake.Explore our detailed services to see how we bring your vision to life!"
        bgImage={assets.living_room_top_view}
      />
      <section className="expertise-section">
        <div className="expertise-scroll-track" ref={trackRef}>
          <div className="expertise-scroll-line">
            <div className="expertise-scroll-progress"></div>
          </div>
          <div className="expertise-scroll-dot" ref={dotRef}></div>
        </div>
        <div className="expertise-cards-container">
          {solutionCards.map((card, idx) => (
            <ExpertiseCard key={idx} {...card} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default Page;
