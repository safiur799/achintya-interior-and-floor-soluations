"use client";
import { ArrowRight, Filter, X } from "lucide-react";
import React, { useState } from "react";

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
          <i className="arrow_btn">
            <ArrowRight size={14} color="var(--primary-color)" />
          </i>
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <aside className={`project-filters ${isMobileOpen ? "is-open" : ""}`}>
      <button
        className="filter-toggle-btn"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <>
            <X size={20} /> Close Filters
          </>
        ) : (
          <>
            <Filter size={20} /> Show Filters
          </>
        )}
      </button>

      <div className="filters-content">
        <FilterGroup title="Sort by sector" items={sectors} />
        <FilterGroup title="Sort by location" items={locations} />
      </div>
    </aside>
  );
};

export default ProjectFilters;
