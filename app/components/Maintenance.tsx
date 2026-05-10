"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "400", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const Maintenance = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animation
      gsap.to(".bg-gradient", {
        backgroundPosition: "200% center",
        duration: 10,
        repeat: -1,
        ease: "linear",
      });

      // Content reveal
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });

      // Logo animation
      gsap.from(logoRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
      });

      // Floating elements
      gsap.to(".floating", {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] text-white overflow-hidden relative ${inter.className}`}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient opacity-20 blur-[100px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full floating"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full floating"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-amber-500 rounded-full floating"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="relative z-10 max-w-2xl px-6 text-center" ref={contentRef}>
        <div ref={logoRef} className="mb-12 inline-block">
          <h2 className={`${montserrat.className} text-4xl md:text-6xl font-bold tracking-tighter`}>
            ACHINTYA
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 mt-2 rounded-full"></div>
          <p className="text-xs tracking-[0.5em] uppercase mt-2 text-gray-400 font-light">
            Interior & Floor Solutions
          </p>
        </div>

        <h1 className={`${montserrat.className} text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500`}>
          We're Under <br /> Refinement
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
          We are currently enhancing our digital presence to match the premium quality of our physical spaces. 
          Our new experience is launching soon.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center gap-3 group hover:border-amber-500/50 transition-all duration-300 cursor-pointer">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Coming Back Online Soon</span>
          </div>
          
          <a 
            href="mailto:contact@achintya.com" 
            className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600 gap-4">
          <p>© 2024 Achintya Interior & Floor Solutions</p>
          <p>Excellence in Every Square Inch</p>
        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default Maintenance;
