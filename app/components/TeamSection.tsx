"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "../json/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const teamData = {
  row1: [
    {
      name: "Shankar Kularia",
      role: "Founder and Managing Director",
      image: assets.office_team,
    },
    {
      name: "Dharam Kularia",
      role: "Managing Partner and CEO",
      image: assets.office_team,
    },
  ],
  row2: [
    { name: "Team Member 1", role: "Regional Head", image: assets.office_team },
    {
      name: "Team Member 2",
      role: "Project Manager",
      image: assets.office_team,
    },
    { name: "Team Member 3", role: "Design Lead", image: assets.office_team },
    {
      name: "Team Member 4",
      role: "Operations Head",
      image: assets.office_team,
    },
    { name: "Team Member 5", role: "Business Lead", image: assets.office_team },
  ],
  row3: [
    {
      name: "Team Member 6",
      role: "Technical Director",
      image: assets.office_team,
    },
    { name: "Team Member 7", role: "HR Manager", image: assets.office_team },
    {
      name: "Team Member 8",
      role: "Finance Controller",
      image: assets.office_team,
    },
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
            Led by Mr. Shankar Kularia and Mr. Dharam Kularia, Padams Group is
            powered by a dedicated workforce of over 5,000 professionals. Our
            Head Office in Mumbai, with them, overseeing core operations across
            India, while our regional offices, managed by experienced Regional
            Heads and teams, ensure seamless execution and local expertise in
            every project. Together, we are committed to delivering excellence
            on a national scale.
          </p>
        </div>

        <div className="team-rows">
          {/* Row 1: 2 Members */}
          <div className="team-row team-row-2">
            {teamData.row1.map((member, i) => (
              <TeamMemberCard key={i} member={member} />
            ))}
          </div>

          {/* Row 2: 5 Members */}
          <div className="team-row team-row-5">
            {teamData.row2.map((member, i) => (
              <TeamMemberCard key={i} member={member} />
            ))}
          </div>

          {/* Row 3: 3 Members */}
          <div className="team-row team-row-3">
            {teamData.row3.map((member, i) => (
              <TeamMemberCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
