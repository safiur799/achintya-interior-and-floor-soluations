import { assets } from "../json/assets";

interface ContactProps {
  formStatus: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Contact({
  formStatus,
  handleFormSubmit,
}: ContactProps) {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Kolkata HQ</h3>
          <p>Baligori Rd, Uniworld City, Newtown, kolkata</p>
          <p>Baligari, West Bengal 700160</p>
          <br />
          <p>
            <strong>Email:</strong> support@achintyainteriors.com
          </p>
          <p>
            <strong>Phone:</strong> +917439749267
          </p>
          <br />
          <div
            className="card"
            style={{ borderRadius: "12px", height: "150px" }}
          >
            <img
              src={assets.graffiti_social_area}
              alt="Office Sample"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="contact-form">
          <form id="contactForm" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <select id="topic" required>
                <option value="">Select Topic</option>
                <option value="interior">Interior Design</option>
                <option value="flooring">Flooring Solution</option>
                <option value="commercial">Commercial/Office</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" id="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" rows={4} placeholder="Message"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
