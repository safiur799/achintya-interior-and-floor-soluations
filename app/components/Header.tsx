import { assets } from "../json/assets";

interface HeaderProps {
  isScrolled: boolean;
  toggleMenu: () => void;
}

export default function Header({ isScrolled, toggleMenu }: HeaderProps) {
  return (
    <header className={`${isScrolled ? "scrolled" : "transparent"}`}>
      <nav>
        <div className="logo">
          <a href="#">
            <img src={assets.achintya_logo} alt="Achintya Interior Logo" />
          </a>
        </div>
        <div className="header-right">
          <div className="search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <div className="menu-btn" id="menuBtn" onClick={toggleMenu}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              id="hamburger-icon"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
