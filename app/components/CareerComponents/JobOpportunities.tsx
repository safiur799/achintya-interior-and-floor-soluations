import React from "react";
import Link from "next/link";

const jobData = [
  {
    title: "QS (Quantity Surveyor)",
    link: "#",
  },
  {
    title: "Project Planning Engineer",
    link: "#",
  },
  {
    title: "Project Lead",
    link: "#",
  },
  {
    title: "Procurement Manager",
    link: "#",
  },
];

const JobOpportunities = () => {
  return (
    <section className="job-opp-section">
      <div className="job-opp-container">
        <h2 className="job-opp-title">Explore all our job opportunities</h2>
        <div className="job-grid">
          {jobData.map((job, index) => (
            <div key={index} className="job-item">
              <h3 className="job-title">{job.title}</h3>
              <Link href={job.link} className="job-read-more">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;
