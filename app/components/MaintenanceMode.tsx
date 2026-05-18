"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MaintenanceMode() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Staggered entry
      tl.from(".mm-line", { scaleX: 0, duration: 1.2, stagger: 0.15 })
        .from(".mm-eyebrow", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".mm-heading span", { y: 80, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.5")
        .from(".mm-sub", { y: 24, opacity: 0, duration: 0.9 }, "-=0.5")
        .from(".mm-divider", { scaleX: 0, duration: 0.8 }, "-=0.4")
        .from(".mm-contact-item", { y: 20, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.3")
        .from(".mm-badge", { y: 16, opacity: 0, duration: 0.7 }, "-=0.3");

      // Continuous floating orbs
      gsap.to(".mm-orb-1", {
        y: -40, x: 20, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".mm-orb-2", {
        y: 30, x: -25, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".mm-orb-3", {
        y: -20, x: 15, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut",
      });

      // Rotating ring
      gsap.to(".mm-ring", {
        rotation: 360, duration: 30, repeat: -1, ease: "none",
      });

      // Pulse dot
      gsap.to(".mm-pulse", {
        scale: 1.5, opacity: 0.4, duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={styles.root}>

      {/* ── Ambient orbs ── */}
      <div className="mm-orb-1" style={{ ...styles.orb, width: 600, height: 600, top: "-15%", right: "-10%", background: "radial-gradient(circle, rgba(143,9,9,0.18) 0%, transparent 70%)" }} />
      <div className="mm-orb-2" style={{ ...styles.orb, width: 500, height: 500, bottom: "-10%", left: "-8%", background: "radial-gradient(circle, rgba(143,9,9,0.12) 0%, transparent 70%)" }} />
      <div className="mm-orb-3" style={{ ...styles.orb, width: 300, height: 300, top: "40%", left: "30%", background: "radial-gradient(circle, rgba(143,9,9,0.07) 0%, transparent 70%)" }} />

      {/* ── Rotating ring decoration ── */}
      <div className="mm-ring" style={styles.ring} />

      {/* ── Watermark ── */}
      <div style={styles.watermark}>ACHINTYA</div>

      {/* ── Main card ── */}
      <div style={styles.card}>

        {/* Left decorative lines */}
        <div style={styles.linesCol}>
          <div className="mm-line" style={styles.line} />
          <div className="mm-line" style={{ ...styles.line, width: 40, opacity: 0.3 }} />
          <div className="mm-line" style={{ ...styles.line, width: 20, opacity: 0.15 }} />
        </div>

        {/* Content */}
        <div style={styles.content}>

          {/* Eyebrow */}
          <p className="mm-eyebrow" style={styles.eyebrow}>
            <span style={styles.pulseDot}>
              <span className="mm-pulse" style={styles.pulseInner} />
            </span>
            Achintya Interior &amp; Floor Solutions
          </p>

          {/* Heading */}
          <h1 style={styles.heading} aria-label="We're Under Refinement">
            <span style={{ display: "block", overflow: "hidden" }}>
              <span style={styles.headingLine}>We&apos;re Under</span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span style={{ ...styles.headingLine, ...styles.headingAccent }}>Refinement</span>
            </span>
          </h1>

          {/* Sub */}
          <p className="mm-sub" style={styles.sub}>
            We are currently enhancing our digital presence to better serve your vision.
            Our masterpiece is being polished — back very shortly.
          </p>

          {/* Divider */}
          <div className="mm-divider" style={styles.divider} />

          {/* Contact row */}
          <div style={styles.contactRow}>
            <div className="mm-contact-item" style={styles.contactItem}>
              <span style={styles.contactLabel}>Email Us</span>
              <a href="mailto:info@achintyainterior.com" style={styles.contactValue}>
                info@achintyainterior.com
              </a>
            </div>
            <div style={styles.contactSep} />
            <div className="mm-contact-item" style={styles.contactItem}>
              <span style={styles.contactLabel}>Call Us</span>
              <a href="tel:+919876543210" style={styles.contactValue}>
                +91 987 654 3210
              </a>
            </div>
          </div>

          {/* Badge */}
          <div className="mm-badge" style={styles.badge}>
            <span style={styles.badgeDot} />
            Coming Soon — 2026
          </div>

        </div>

        {/* Right decorative lines */}
        <div style={{ ...styles.linesCol, alignItems: "flex-end" }}>
          <div className="mm-line" style={styles.line} />
          <div className="mm-line" style={{ ...styles.line, width: 40, opacity: 0.3 }} />
          <div className="mm-line" style={{ ...styles.line, width: 20, opacity: 0.15 }} />
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div style={styles.footer}>
        <span style={styles.footerText}>Transforming Spaces Into Masterpieces</span>
        <span style={styles.footerDot} />
        <span style={styles.footerText}>Est. 2010</span>
      </div>

    </div>
  );
}

/* ─── Inline styles ─────────────────────────────────────────────── */
const CRIMSON = "#8f0909";
const DARK    = "#0d0d0d";
const LIGHT   = "#f5f0eb";

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    background: DARK,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
  },
  orb: {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none",
    filter: "blur(60px)",
  },
  ring: {
    position: "absolute",
    width: 700,
    height: 700,
    borderRadius: "50%",
    border: `1px solid rgba(143,9,9,0.12)`,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    backgroundImage: `conic-gradient(from 0deg, transparent 80%, rgba(143,9,9,0.25) 100%)`,
  },
  watermark: {
    position: "absolute",
    bottom: 60,
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "clamp(5rem, 16vw, 13rem)",
    fontWeight: 900,
    letterSpacing: "-0.04em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.025)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    fontFamily: "var(--font-montserrat), sans-serif",
    userSelect: "none",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(1.5rem, 4vw, 4rem)",
    padding: "0 clamp(1rem, 5vw, 3rem)",
    maxWidth: 920,
    width: "100%",
    zIndex: 2,
  },
  linesCol: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    flexShrink: 0,
  },
  line: {
    height: 2,
    width: 64,
    background: CRIMSON,
    borderRadius: 2,
    transformOrigin: "left center",
  },
  content: {
    flex: 1,
    textAlign: "center",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: "0.7rem",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: "rgba(245,240,235,0.5)",
    fontFamily: "var(--font-montserrat), sans-serif",
    fontWeight: 600,
    marginBottom: "1.8rem",
  },
  pulseDot: {
    position: "relative" as const,
    display: "inline-block",
    width: 8,
    height: 8,
  },
  pulseInner: {
    display: "block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: CRIMSON,
  },
  heading: {
    fontFamily: "var(--font-montserrat), sans-serif",
    fontSize: "clamp(3rem, 8vw, 6.5rem)",
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    textTransform: "uppercase",
    marginBottom: "1.8rem",
    color: LIGHT,
  },
  headingLine: {
    display: "inline-block",
  },
  headingAccent: {
    color: CRIMSON,
    WebkitTextStroke: `1px ${CRIMSON}`,
  },
  sub: {
    fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
    color: "rgba(245,240,235,0.45)",
    lineHeight: 1.8,
    maxWidth: 520,
    margin: "0 auto 2.2rem",
    fontWeight: 300,
    letterSpacing: "0.02em",
  },
  divider: {
    height: 1,
    background: `linear-gradient(90deg, transparent, ${CRIMSON}, transparent)`,
    marginBottom: "2rem",
    transformOrigin: "center",
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "clamp(1rem, 4vw, 3rem)",
    flexWrap: "wrap" as const,
    marginBottom: "2rem",
  },
  contactItem: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 6,
  },
  contactLabel: {
    fontSize: "0.62rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "rgba(245,240,235,0.3)",
    fontFamily: "var(--font-montserrat), sans-serif",
    fontWeight: 600,
  },
  contactValue: {
    fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
    color: LIGHT,
    fontWeight: 500,
    letterSpacing: "0.02em",
    transition: "color 0.3s ease",
  },
  contactSep: {
    width: 1,
    height: 36,
    background: "rgba(245,240,235,0.12)",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "0.5rem 1.2rem",
    border: `1px solid rgba(143,9,9,0.35)`,
    borderRadius: 100,
    fontSize: "0.68rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    color: CRIMSON,
    fontFamily: "var(--font-montserrat), sans-serif",
    fontWeight: 700,
    background: "rgba(143,9,9,0.07)",
  },
  badgeDot: {
    display: "inline-block",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: CRIMSON,
  },
  footer: {
    position: "absolute",
    bottom: 28,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    zIndex: 2,
  },
  footerText: {
    fontSize: "0.6rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "rgba(245,240,235,0.2)",
    fontFamily: "var(--font-montserrat), sans-serif",
    fontWeight: 600,
  },
  footerDot: {
    display: "inline-block",
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: CRIMSON,
    opacity: 0.5,
  },
};
