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
            Led by Shashi & Raaj, Achintya Interior & Floor Solutions Pvt. Ltd. is
            powered by a dedicated workforce of over 100+ professionals. Our
            Head Office in Kolkata, with them, overseeing core operations across
            India, while our regional offices, managed by experienced Regional
            Heads and teams, ensure seamless execution and local expertise in
            every project. Together, we are committed to delivering excellence
            on a national scale.
          </p>
        </div>

    
      </div>
    </section>
  );
};

export default TeamSection;
