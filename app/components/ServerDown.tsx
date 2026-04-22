"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AlertCircle } from "lucide-react";

const ServerDown = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-white opacity-100 font-montserrat"
      style={{ isolation: 'isolate' }}
    >
      <div
        ref={contentRef}
        className="max-w-2xl px-6 text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-red-100 opacity-75"></div>
            <div className="relative rounded-full bg-red-50 p-6">
              <AlertCircle className="h-16 w-16 text-red-600" />
            </div>
          </div>
        </div>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          System Maintenance
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-600">
          We are currently performing scheduled maintenance to improve our
          services. Our website will be back online shortly. Thank you for your
          patience.
        </p>

        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="absolute h-full w-1/3 animate-[loading_2s_infinite_ease-in-out] rounded-full bg-red-600"></div>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Achintya Interior and Floor Solutions. All rights reserved.
        </div>

        <style jsx>{`
          @keyframes loading {
            0% { left: -33%; }
            100% { left: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ServerDown;
