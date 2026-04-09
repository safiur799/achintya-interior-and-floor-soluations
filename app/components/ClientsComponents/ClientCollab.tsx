import { assets } from "@/app/json/assets";
import Image from "next/image";
import React from "react";

const ClientCollab = () => {
  return (
    <div className="client-collab">
      <h2>Client Collaboration</h2>

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

export default ClientCollab;
