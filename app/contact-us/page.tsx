"use client";
import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../layout/Wrapper";
import CommonBanner from "../components/CommonBanner";
import { assets } from "../json/assets";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formStatus, setFormStatus] = useState("PROCEED");
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("PROCEEDING...");
    setTimeout(() => {
      alert(
        "Your request has been sent to Achintya Interior and Floor Solutions.",
      );
      (e.target as HTMLFormElement).reset();
      setFormStatus("PROCEED");
    }, 1500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const panIndiaCities = [
    "Pune",
    "NCR",
    "Bengaluru",
    "Ahmedabad",
    "Hyderabad",
    "Chennai",
    "Gurgaon",
    "Kolkata",
    "Noida",
    "Rajasthan",
    "Vijaywada",
  ];

  const captiveUnits = [
    "Navi Mumbai",
    "Bhiwadi NCR",
    "Pune",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
  ];

  return (
    <Wrapper hideAnnouncements={true}>
      <CommonBanner
        title="Contact Us"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint nulla iusto doloremque dignissimos! Consequuntur eius tenetur corporis, nulla distinctio vel. Voluptatum molestias reiciendis deserunt? Inventore excepturi quo saepe ad.  "
        bgImage={assets.hero}
      />

      <section
        ref={sectionRef}
        className="map-section py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        <div className="fade-up">
          <Image
            src={assets.map_image}
            alt="India Map"
            width={800}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="space-y-12">
          <div className="fade-up">
            <h2 className="text-[#e31e24] text-4xl font-montserrat uppercase mb-2 font-medium">
              Head Office
            </h2>
            <p className="text-xl font-medium text-gray-800">Mumbai</p>
          </div>

          <div className="fade-up">
            <h3 className="text-2xl font-montserrat uppercase mb-6 tracking-wider font-semibold border-b-2 border-gray-100 pb-2">
              PAN INDIA PRESENCE
            </h3>
            <ul className="presence-list grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
              {panIndiaCities.map((city, index) => (
                <li
                  key={index}
                  className="border-l-4 border-[#e31e24] pl-3 py-1 font-semibold uppercase text-xs tracking-tight text-gray-700"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up">
            <h3 className="text-2xl font-montserrat uppercase mb-6 tracking-wider font-semibold border-b-2 border-gray-100 pb-2">
              CAPTIVE UNIT / ANCILARY UNITS
            </h3>
            <ul className="presence-list grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6">
              {captiveUnits.map((city, index) => (
                <li
                  key={index}
                  className="border-l-4 border-[#e31e24] pl-3 py-1 font-semibold uppercase text-xs tracking-tight text-gray-700"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <Contact formStatus={formStatus} handleFormSubmit={handleFormSubmit} />
      </section>
    </Wrapper>
  );
};

export default ContactUs;
