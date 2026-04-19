import React from "react";
import { assets } from "../json/assets";

const announcements = [
  "Project Awarded - Stryker Global Technology Centre | Gurgaon",
  "Project Awarded - Shiv Nadar Foundation | Dadri, UP",
  "Project Awarded - Morgan Stanley Advantage Services | Mumbai",
  "Project Awarded - German Consulate General | mumbai",
  "Project Awarded - Stryker Global Technology Centre | Gurgaon",
  "Project Awarded - Shiv Nadar Foundation | Dadri, UP",
  "Project Awarded - Morgan Stanley Advantage Services | Mumbai",
  "Project Awarded - German Consulate General | mumbai",
];

const certifications = [
  { src: assets.certificate1, alt: "ISO 9001" },
  { src: assets.certificate1, alt: "ISO 14001" },
  { src: assets.certificate1, alt: "ISO 45001" },
  { src: assets.certificate1, alt: "D-U-N-S" },
];

export default function Footer({
  hideAnnouncements,
}: {
  hideAnnouncements?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      {/* Top Banner */}
      {!hideAnnouncements && (
        <div className="footer-banner">
          <div className="container">
            <div className="banner-grid">
              <div className="announcements">
                <h3>Announcements</h3>
                <div className="announcements-window">
                  <ul
                    className="announcements-slider"
                    style={{ transform: `translateY(-${currentIndex * 40}px)` }}
                  >
                    {announcements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="insights">
                <h3>Insights and inspiration: Our latest news</h3>
                <p>
                  Stay up-to-date with our latest News, where we share valuable
                  insights, industry trends, and inspiring stories.
                </p>
                <a href="#" className="more-link">
                  More &rarr;
                </a>
                <p className="visit-site">
                  Visit our Site - <span>achintya.in</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Middle Social Section */}
      <div className="footer-socials">
        <div className="container">
          <div className="social-row">
            <div className="icons">
              <a href="#">
                <FbIcon />
              </a>
              <a href="#">
                <XIcon />
              </a>
              <a href="#">
                <InstaIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
            <div className="email">
              <a href="mailto:support@achintyainteriors.com">
                <MailIcon /> support@achintyainteriors.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-grid">
            <div className="certs">
              {certifications.map((cert, i) => (
                <img key={i} src={cert.src} alt={cert.alt} />
              ))}
            </div>
            <div className="copyright">
              Achintya Interior & Floor Solutions Pvt.Ltd @ 2026. all rights
              reserved
            </div>
            <div className="links">
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icon Components (Simple SVGs)
function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function InstaIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
