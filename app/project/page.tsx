import React from "react";
import CommonBanner from "../components/CommonBanner";
import ProjectCard, {
  ProjectCardProps,
} from "../components/ProjectComponents/ProjectCard";
import ProjectFilters from "../components/ProjectComponents/ProjectFilters";
import { assets } from "../json/assets";
import Wrapper from "../layout/Wrapper";

const sectors = [
  // ... existing sectors ...
  "Technology",
  "BFSI",
  "Food & Beverages",
  "Healthcare",
  "Real Estate",
  "Insurance",
  "E-commerce",
  "IT Services",
  "Conglomerate",
  "Pharmaceuticals",
  "Retail",
  "Manufacturing",
  "Logistics",
  "Infrastructure",
  "Energy",
  "Consulting",
  "Media",
];

const locations = [
  // ... existing locations ...
  "Chennai",
  "Delhi",
  "Kolkata",
  "Hyderabad",
  "Noida",
  "Gurugram",
  "Pune",
  "Mumbai",
  "Bengaluru",
  "Ahmedabad",
  "Faridabad",
  "Lucknow",
  "Vadodara",
  "Vijaywada",
  "Surat",
];

const projects: ProjectCardProps[] = [
  {
    image: assets.bedroom,
    title: "RELIANCE INDUSTRIES",
    location: "Mumbai",
    sector: "Conglomerate",
    sqft: "300,000",
  },
  {
    image: assets.kitchen,
    title: "HDFC BANK",
    location: "Delhi",
    sector: "BFSI",
    sqft: "150,000",
  },
  {
    image: assets.bedroom,
    title: "GOOGLE",
    location: "Hyderabad",
    sector: "Technology",
    sqft: "250,000",
  },
  {
    image: assets.kitchen,
    title: "AMAZON",
    location: "Bengaluru",
    sector: "E-commerce",
    sqft: "400,000",
  },
];

const Page = () => {
  return (
    <Wrapper hideAnnouncements>
      <CommonBanner
        title="Projects"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis hic asperiores error, illo fuga facilis veniam nemo ullam esse excepturi eaque ea quibusdam. Praesentium possimus officiis dicta voluptates magnam velit."
        bgImage={assets.dummy_video}
        isVideo
      />

      <div className="projects-section">
        <div className="project-left">
          <ProjectFilters sectors={sectors} locations={locations} />
        </div>
        <div className="project-right">
          <div className="project-grid">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
