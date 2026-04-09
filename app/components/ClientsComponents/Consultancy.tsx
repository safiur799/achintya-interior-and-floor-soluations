import { assets } from "@/app/json/assets";
import Image from "next/image";
import React from "react";

const Consultancy = () => {
  return (
    <div className="consultancy">
      <h2>Architects/ Design Consultancy collaborations</h2>
      <div className="brands-grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="brand-item">
            <Image src={assets.amazon} alt="Amazon" width={200} height={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultancy;
