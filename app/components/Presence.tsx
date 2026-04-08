export default function Presence() {
    return (
        <section id="presence" className="map-section">
            <div className="map-visual reveal-right">
                <svg viewBox="0 0 400 500" width="100%" height="auto" style={{ maxWidth: "350px" }}>
                    <path
                        d="M150 50L200 20L250 50L300 100L350 150L380 250L350 350L250 450L150 480L50 450L20 350L10 250L50 150L100 100L150 50Z"
                        fill="#eee"
                    />
                    <circle cx="150" cy="200" r="10" fill="#e31e24" />
                    <circle cx="180" cy="150" r="6" fill="#1a1a1a" />
                    <circle cx="210" cy="180" r="6" fill="#1a1a1a" />
                    <circle cx="190" cy="250" r="6" fill="#1a1a1a" />
                    <circle cx="250" cy="300" r="6" fill="#1a1a1a" />
                </svg>
            </div>
            <div className="presence-info reveal-left">
                <h2 style={{ color: "#e31e24" }}>Head Office</h2>
                <p>
                    <strong>Mumbai, India</strong>
                </p>
                <br />
                <h3>PAN INDIA PRESENCE</h3>
                <div className="presence-list">
                    <ul>
                        <li>Pune</li>
                        <li>NCR</li>
                        <li>Bengaluru</li>
                        <li>Ahmedabad</li>
                    </ul>
                    <ul>
                        <li>Hyderabad</li>
                        <li>Chennai</li>
                        <li>Gurgaon</li>
                        <li>Kolkata</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
