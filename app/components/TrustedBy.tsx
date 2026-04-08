import React from "react";
import Marquee from "react-fast-marquee";

const brands = [
  "Bloomberg",
  "BNY Mellon",
  "BP",
  "Cisco",
  "Citi",
  "KPMG",
  "Legato",
  "Microsoft",
  "Morgan Stanley",
  "Netlink",
];

const TrustedBy = () => {
  return (
    <section className="trusted-by-section">
      <div className="container">
        <div className="trusted-content">
          <div className="trusted-left">
            <h2 className="trusted-title">
              Trusted by the Worlds biggest brands
            </h2>
          </div>
          <div className="trusted-right">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {brands.map((brand, index) => (
                <div key={index} className="brand-item">
                  <span className="brand-name">{brand}</span>
                </div>
              ))}
            </Marquee>
            <div style={{ height: "40px" }}></div>
            <Marquee
              gradient={false}
              speed={35}
              direction="right"
              pauseOnHover={true}
            >
              {[...brands].reverse().map((brand, index) => (
                <div key={index} className="brand-item">
                  <span className="brand-name">{brand}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
