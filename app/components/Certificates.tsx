import React from "react";

const Certificates = () => {
  return (
    <section className="container">
      <div className="certificates-section ">
        {Array.from({ length: 4 }).map((_, i) => {
          return (
            <div key={i}>
              <img src="/assets/certificate1.png" alt="certificate" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certificates;
