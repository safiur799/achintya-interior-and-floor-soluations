import React from "react";
import CommonBanner from "../components/CommonBanner";
import ProjectCard, {
  ProjectCardProps,
} from "../components/ProjectComponents/ProjectCard";
import ProjectFilters from "../components/ProjectComponents/ProjectFilters";
import { assets } from "../json/assets";
import Wrapper from "../layout/Wrapper";

const sectors = [
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
    image: [
      assets.office_conference_room,
      assets.office_workspace_desks,
      assets.modern_conference_room_view_2,
    ],
    title: "SWEVEX TECH SOLUTION / BT GLOBAL / NEXTRA",
    location: "",
    sector: "Corporate Office",
    sqft: "",
    description: "Workstation and conference room",
  },
  {
    image: [
      assets.biophilic_office_corridor,
      assets.office_breakout_pods,
      assets.open_office_with_cabins,
    ],
    title: "COGNIZANT",
    location: "",
    sector: "Technology / IT",
    sqft: "",
    description: "Workstation and conference area and breakout zone",
  },
  {
    image: [
      assets.vibrant_office_cafeteria,
      assets.vibrant_office_cafeteria_view_2,
    ],
    title: "CAFETERIA PROJECTS",
    location: "",
    sector: "Hospitality / Corporate",
    sqft: "",
    description: "Cafeteria area",
  },
  {
    image: [
      assets.large_open_office_floor,
      assets.industrial_modern_office_wide,
    ],
    title: "EY (Ernst & Young)",
    location: "",
    sector: "Consulting / Audit",
    sqft: "",
    description: "Workstation and manager desk",
  },
];

const Page = () => {
  return (
    <Wrapper hideAnnouncements>
      <CommonBanner
        title="Projects"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis hic asperiores error, illo fuga facilis veniam nemo ullam esse excepturi eaque ea quibusdam. Praesentium possimus officiis dicta voluptates magnam velit."
        bgImage={assets.vibrant_breakout_swing_area}
      />

      <section className="projects-section">
        <div className="project-left">
          <ProjectFilters sectors={sectors} locations={locations} />
        </div>
        <div className="project-right">
          <div className="project-grid">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>

          <div className="bottom_navigation">
            <button className="prev">Previous</button>
            <button className="next">Next</button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Page;
