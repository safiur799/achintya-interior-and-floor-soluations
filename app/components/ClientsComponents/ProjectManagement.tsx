import { assets } from "@/app/json/assets";
import Image from "next/image";
import React from "react";

const ProjectManagement = () => {
  const logos = [
    { src: assets.logo_cbre, alt: "CBRE" },
    { src: assets.logo_jll, alt: "JLL" },
    { src: assets.logo_iss, alt: "ISS" },
    { src: assets.logo_ey, alt: "EY" },
    { src: assets.logo_lt, alt: "L&T" },
    { src: assets.logo_tata, alt: "Tata" },
  ];

  return (
    <div className="project-management">
      <h2>Project Management Consultancy Collaborations</h2>
      <div className="brands-grid">
        {logos.map((logo, index) => (
          <div key={index} className="brand-item">
            <Image src={logo.src} alt={logo.alt} width={200} height={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
