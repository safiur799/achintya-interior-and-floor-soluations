import { assets } from "@/app/json/assets";
import Image from "next/image";
import React from "react";

const Consultancy = () => {
  const logos = [
    { src: assets.logo_ey, alt: "EY" },
    { src: assets.logo_lt, alt: "L&T" },
    { src: assets.logo_standard_chartered, alt: "Standard Chartered" },
    { src: assets.logo_cognizant, alt: "Cognizant" },
    { src: assets.logo_bt, alt: "BT" },
    { src: assets.logo_hyland, alt: "Hyland" },
  ];

  return (
    <div className="consultancy">
      <h2>Architects/ Design Consultancy collaborations</h2>
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

export default Consultancy;
