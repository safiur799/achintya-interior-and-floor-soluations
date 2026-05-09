"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "../json/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const teamData = {
  row1: [
    {
      name: "Shashi",
      role: "Founder and Managing Director",
      image: assets.office_team,
    },
    {
      name: "Raaj",
      role: "Founder and Managing Partner",
      image: assets.office_team,
    },
  ],
  row2: [
    { name: "Regional Head", role: "East & North", image: assets.office_team },
    {
      name: "Operations Lead",
      role: "Project Execution",
      image: assets.office_team,
    },
    { name: "Design Director", role: "Creative Strategy", image: assets.office_team },
    {
      name: "Technical Head",
      role: "Flooring Solutions",
      image: assets.office_team,
    },
    { name: "Business Lead", role: "Corporate Relations", image: assets.office_team },
  ],
};

const TeamMemberCard = ({ member }: { member: any }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <div ref={cardRef} className="team-member-card">
      <div className="member-image-wrapper">
        <Image src={member.image} alt={member.name} fill />
      </div>
      <h4 className="member-name">{member.name}</h4>
      <p className="member-role">{member.role}</p>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Our team</h2>
          <p>
            Led by Shashi & Raaj, Achintya Interior & Floor Solutions Pvt. Ltd. is
            powered by a dedicated workforce of over 100+ professionals. Our
            Head Office in Kolkata oversees core operations across India, while 
            our regional presence, managed by experienced leads, ensures seamless 
            execution and local expertise in every project. Together, we are committed 
            to delivering excellence on a national scale.
          </p>
        </div>

        <div className="team-rows">
          {/* Row 1: Founders */}
          <div className="team-row team-row-2">
            {teamData.row1.map((member, i) => (
              <TeamMemberCard key={i} member={member} />
            ))}
          </div>

          {/* Row 2: Leadership Team */}
          <div className="team-row team-row-5">
            {teamData.row2.map((member, i) => (
              <TeamMemberCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
