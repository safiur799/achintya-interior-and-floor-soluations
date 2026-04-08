import React from "react";

export interface ExpertiseCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  services: string[];
}

const ExpertiseCard = ({
  id,
  title,
  image,
  description,
  services,
}: ExpertiseCardProps) => {
  return (
    <div className="expertise-card">
      <h2 className="expertise-card-title">{title}</h2>
      <div className="expertise-card-image">
        <img src={image} alt={title} />
      </div>
      <p className="expertise-card-description">{description}</p>
      <div className="expertise-services-list">
        {services.map((service, index) => (
          <div key={index} className="expertise-service-item">
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCard;
