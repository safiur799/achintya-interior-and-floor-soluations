"use client";

import { useState } from "react";
import { assets } from "../json/assets";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("PROCEED");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("PROCEEDING...");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Your request has been sent to Achintya Interior and Floor Solutions.");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Something went wrong. Please try again later."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while sending your request. Please check your connection.");
    } finally {
      setFormStatus("PROCEED");
    }
  };

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
            <strong>Email:</strong> Shashiprakash@achintyainteriors.com
          </p>
          <p>
            <strong>Phone:</strong> +917439749267
          </p>
          <br />
          <div
            className="card"
            style={{
              borderRadius: "12px",
              height: "280px",
            }}
          >
            <img
              src={assets.contact_image}
              alt="Office Sample"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
          </div>
        </div>
        <div className="contact-form">
          <form id="contactForm" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <select id="topic" name="topic" required>
                <option value="">Select Topic</option>
                <option value="interior">Interior Design</option>
                <option value="flooring">Flooring Solution</option>
                <option value="commercial">Commercial/Office</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows={4} placeholder="Message"></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={formStatus === "PROCEEDING..."}>
              {formStatus === "PROCEEDING..." ? "SENDING..." : "PROCEED"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
