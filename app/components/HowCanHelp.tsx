import React from "react";
import ContactCTA from "./ContactCTA";
import "./HelpSection.scss";

const HowCanHelp = () => {
  return (
    <div className="how-can-block">
      <div className="container">
        <div className="how-can-text">
          <h2>How we can help you?</h2>
          <p>
            We provide high-quality tactile solutions for visually impaired
            people including accessibility products, architectural products,
            street furniture. Our primary focus is on tactile indicators for
            accessibility.
          </p>
          <p className="highlight">
            <strong>
              Choosing the appropriate solution for your needs can be tricky,
              which is why we invite you to get guidance from one of our experts
              ; it will be well worth your time!
            </strong>
          </p>
          <ContactCTA />
        </div>
      </div>
    </div>
  );
};

export default HowCanHelp;
