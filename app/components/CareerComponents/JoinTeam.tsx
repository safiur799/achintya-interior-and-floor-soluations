import Image from "next/image";
import React from "react";
import Link from "next/link";
import { assets } from "@/app/json/assets";

const JoinTeam = () => {
  return (
    <section className="join-team-section">
      <div className="join-team-container">
        <div className="join-team-content">
          <h2 className="join-team-title">Join our team</h2>
          <p className="join-team-description">
            We're always looking for passionate individuals who thrive on
            creativity and collaboration. At our company, you'll work on
            impactful projects, contribute to innovative designs, and grow
            within a dynamic environment. If you're ready to take your career to
            the next level and help us shape exceptional spaces, explore our
            current opportunities.
          </p>
          <Link href="/about" className="join-team-link">
            Learn More About Achintya Group
          </Link>
          <button className="join-team-button">Apply now</button>
        </div>
        <div className="join-team-image">
          <Image
            src={assets.office_team || "/assets/office_team.png"}
            alt="Join our team"
            width={700}
            height={450}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
