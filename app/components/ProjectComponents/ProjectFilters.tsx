import React from "react";

interface FilterGroupProps {
  title: string;
  items: string[];
}

const FilterGroup = ({ title, items }: FilterGroupProps) => (
  <div className="filter-group">
    <h3 className="filter-title">{title}</h3>
    <div className="filter-list">
      {items.map((item, index) => (
        <button key={index} className="filter-btn">
          {item}
        </button>
      ))}
    </div>
  </div>
);

interface ProjectFiltersProps {
  sectors: string[];
  locations: string[];
}

const ProjectFilters = ({ sectors, locations }: ProjectFiltersProps) => {
  return (
    <aside className="project-filters">
      <FilterGroup title="Sort by sector" items={sectors} />
      <FilterGroup title="Sort by location" items={locations} />
    </aside>
  );
};

export default ProjectFilters;
