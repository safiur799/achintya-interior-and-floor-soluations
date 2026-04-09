import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  image: string | StaticImageData;
  title: string;
  location: string;
  sector: string;
  sqft: string;
}

const ProjectCard = ({
  image,
  title,
  location,
  sector,
  sqft,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <Image src={image} alt={title} fill />
        <div className="hover_effect">
          <Link href="/project-details">View</Link>
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-card-info">
          <div className="project-card-text">
            <h2 className="project-card-title">{title}</h2>
            <div className="project-card-details">
              <p>
                <strong>Location:</strong> {location}
              </p>
              <p>
                <strong>Sector:</strong> {sector}
              </p>
              <p>
                <strong>Sq.ft:</strong> {sqft}
              </p>
            </div>
          </div>
          <div className="project-card-action">
            <div className="arrow-circle">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
