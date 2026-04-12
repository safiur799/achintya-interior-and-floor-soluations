import { assets } from "@/app/json/assets";
import Image from "next/image";
import React from "react";

const ClientCollab = () => {
  const logos = [
    { src: assets.logo_hyland, alt: "Hyland" },
    { src: assets.logo_jll, alt: "JLL" },
    { src: assets.logo_cbre, alt: "CBRE" },
    { src: assets.logo_cognizant, alt: "Cognizant" },
    { src: assets.logo_manipal, alt: "Manipal Hospitals" },
    { src: assets.logo_standard_chartered, alt: "Standard Chartered" },
    { src: assets.logo_ey, alt: "EY" },
    { src: assets.logo_lt, alt: "L&T" },
    { src: assets.logo_ambuja_neotia, alt: "Ambuja Neotia" },
    { src: assets.logo_aditya_birla, alt: "Aditya Birla" },
    { src: assets.logo_bt, alt: "BT" },
    { src: assets.logo_tata, alt: "Tata" },
    { src: assets.logo_jio, alt: "Reliance Jio" },
    { src: assets.logo_iss, alt: "ISS" },
  ];

  return (
    <div className="client-collab">
      <h2>Client Collaboration</h2>

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

export default ClientCollab;
