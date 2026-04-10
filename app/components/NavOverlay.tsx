import { RefObject } from "react";
import { X } from "lucide-react";
import Facebook from "../ui/icons/Facebook";
import Instagram from "../ui/icons/Instagram";
import LinkedIn from "../ui/icons/LinkedIn";

interface NavOverlayProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  menuItemsRef: RefObject<(HTMLLIElement | null)[]>;
  overlayFooterRef: RefObject<HTMLDivElement | null>;
}

const menuLinks = [
  { href: "project", text: "Projects" },
  { href: "/expertise", text: "Our Expertise" },
  { href: "/about-us", text: "About Us" },
  { href: "/clients", text: "Clients" },
  { href: "/contact-us", text: "Contact Us" },
  { href: "/career", text: "Careers" },
];

export default function NavOverlay({
  isMenuOpen,
  setIsMenuOpen,
  menuItemsRef,
  overlayFooterRef,
}: NavOverlayProps) {
  return (
    <div
      className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
      id="navOverlay"
    >
      <div
        className="overlay-close"
        id="closeBtn"
        onClick={() => setIsMenuOpen(false)}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </div>
      <div className="overlay-content">
        <ul className="main-menu">
          {menuLinks.map((item, index) => (
            <li
              key={index}
              className="menu-item"
              ref={(el) => {
                if (menuItemsRef.current) {
                  menuItemsRef.current[index] = el;
                }
              }}
            >
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                <span className="flip-text-inner">
                  <span className="text-front">{item.text}</span>
                  <span className="text-back">{item.text}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="overlay-footer" ref={overlayFooterRef}>
          <div className="overlay-socials">
            <a href="#">
              <Facebook />
            </a>{" "}
            <a href="#">
              <Instagram />
            </a>{" "}
            <a href="#">
              <LinkedIn />
            </a>
          </div>
          <div className="overlay-contact">
            <p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ display: "inline", marginRight: "8px" }}
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              queries@achintya.in
            </p>
          </div>
        </div>
        <a href="#" className="return-home">
          Return To Home
        </a>
      </div>
    </div>
  );
}
