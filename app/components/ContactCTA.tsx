import React from "react";
import { FileText, Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <div className="how-can-btn">
      <a className="cta-button" href="/contact-us">
        <FileText size={18} />
        <span>Free Quote</span>
      </a>
      <a className="cta-button" href="tel:+919998199968">
        <Phone size={18} />
        <span>+91 99981 99968</span>
      </a>
    </div>
  );
};

export const BottomIcons = () => {
  return (
    <div className="bottom-icon-block">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="icon-box">
              <div className="icon-image">
                <img
                  src="/assets/black-cat-silhouette.svg"
                  alt="AS/NZ 1428.4.1 2009"
                />
              </div>
              <div className="icon-text">
                <strong>AS/NZ 1428.4.1 2009</strong>
                <span>Compliant</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="icon-box">
              <div className="icon-image">
                <img
                  src="/assets/black-cat-silhouette-1.svg"
                  alt="C.S.I.R.O Scientifically Tested"
                />
              </div>
              <div className="icon-text">
                <strong>C.S.I.R.O Scientifically</strong>
                <span>Tested</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="icon-box">
              <div className="icon-image">
                <img
                  src="/assets/victory-silhouette.svg"
                  alt="Cost Effective Solution"
                />
              </div>
              <div className="icon-text">
                <strong>Cost Effective</strong>
                <span>Solution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
