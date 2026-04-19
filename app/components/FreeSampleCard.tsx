import React from "react";
import { Phone } from "lucide-react";

const FreeSampleCard = () => {
  return (
    <div className="free-sample-card">
      <div className="sample-card-content">
        <h3>How can we Help you?</h3>
        <p>
          If you want to show our sample and Quality of our product then feel
          free to ask. We will send it to your Address.
        </p>
      </div>
      <button className="sample-btn">
        <div className="icon-wrap">
          <Phone size={20} fill="currentColor" />
        </div>
        <span>FREE SAMPLE</span>
      </button>
    </div>
  );
};

export default FreeSampleCard;
