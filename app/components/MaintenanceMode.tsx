"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MaintenanceMode() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Background pulse
      gsap.to(".bg-circle", {
        scale: 1.2,
        opacity: 0.1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
      });

      // Entry animations
      tl.from(logoRef.current, {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      })
      .from(textRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.6")
      .from(contactRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="maintenance-container fixed inset-0 z-[9999]"
    >
      {/* Decorative Background Elements */}
      <div 
        className="bg-circle absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" 
        style={{ backgroundColor: 'var(--maintenance-accent)', opacity: 0.05 }}
      />
      <div 
        className="bg-circle absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" 
        style={{ backgroundColor: 'var(--maintenance-accent)', opacity: 0.03 }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Brand Header */}
        <div ref={logoRef} className="mb-12">
          <h2 className="text-sm tracking-[0.4em] uppercase font-bold mb-2 maintenance-accent-text">
            Achintya Interior & Floor Solutions
          </h2>
          <div className="h-[2px] w-24 mx-auto rounded-full" style={{ backgroundColor: 'var(--maintenance-accent)' }} />
        </div>

        {/* Main Message */}
        <div ref={textRef} className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            We&apos;re Under <br />
            <span className="maintenance-gradient-text">
              Refinement
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We are currently enhancing our digital presence to better serve your vision. 
            Our masterpiece is being polished and will be back shortly.
          </p>
        </div>

        {/* Contact / Social */}
        <div ref={contactRef} className="space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Email Us</p>
              <a href="mailto:info@achintyainterior.com" className="text-lg hover:maintenance-accent-text transition-colors">
                info@achintyainterior.com
              </a>
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-gray-800" />
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Call Us</p>
              <a href="tel:+91XXXXXXXXXX" className="text-lg hover:maintenance-accent-text transition-colors">
                +91 987 654 3210
              </a>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold maintenance-accent-text">
              Coming Soon 2024
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Watermark */}
      <div className="absolute bottom-10 left-0 right-0 text-center opacity-10 pointer-events-none">
        <p className="text-[10rem] font-black uppercase tracking-tighter select-none whitespace-nowrap">
          ACHINTYA
        </p>
      </div>
    </div>
  );
}
