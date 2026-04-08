"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Loader from "../components/Loader";
import Header from "../components/Header";
import NavOverlay from "../components/NavOverlay";
import Footer from "../components/Footer";

interface WrapperProps {
  children: React.ReactNode;
  hideAnnouncements?: boolean;
}

export default function Wrapper({ children, hideAnnouncements }: WrapperProps) {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const overlayFooterRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  // Percentage Loader Logic
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 15) + 1;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(() => {
          if (loaderRef.current) {
            gsap.to(loaderRef.current, {
              opacity: 0,
              y: "-100%",
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                setIsLoading(false);
                startHeroAnimations();
              },
            });
          }
        }, 500);
      }
      setPercent(count);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const startHeroAnimations = () => {
    gsap.to(".hero-content h1", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power4.out",
    });
  };

  // Sticky Header Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu Animation
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        menuItemsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      if (overlayFooterRef.current) {
        gsap.fromTo(
          overlayFooterRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.7,
          },
        );
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Loader percent={percent} isLoading={isLoading} loaderRef={loaderRef} />
      <Header isScrolled={isScrolled} toggleMenu={toggleMenu} />
      <NavOverlay
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuItemsRef={menuItemsRef}
        overlayFooterRef={overlayFooterRef}
      />
      {children}
      <Footer hideAnnouncements={hideAnnouncements} />
    </>
  );
}
