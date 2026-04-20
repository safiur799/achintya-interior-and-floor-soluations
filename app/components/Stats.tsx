"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const statsData = [
  { label: "No. of Projects Delivered", value: "60+" },
  { label: "Sq. Ft. Spaces Executed", value: "20+ Million" },
  { label: "Team Members", value: "100+" },
  { label: "Pan India Office", value: "5+" },
  { label: "Years of Experience", value: "8+" },
];

const StatItem = ({ stat }: { stat: { label: string; value: string } }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numberRef = useRef({ val: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse numeric part and suffix (e.g., "900+" -> number: 900, suffix: "+")
  const match = stat.value.match(/(\d+(\.\d+)?)(.*)/);
  const targetValue = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.to(numberRef.current, {
      val: targetValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        setDisplayValue(Math.floor(numberRef.current.val));
      },
    });

    return () => {
      tl.kill();
    };
  }, [targetValue]);

  return (
    <div className="stat-item" ref={containerRef}>
      <span className="stat-label">{stat.label}</span>
      <h2 className="stat-value">
        {displayValue}
        {suffix}
      </h2>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
