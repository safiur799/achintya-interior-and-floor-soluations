import React from "react";

interface CommonBannerProps {
  title: string;
  bgImage: string;
  description?: string;
}

const CommonBanner = ({ title, bgImage, description }: CommonBannerProps) => {
  return (
    <div
      className="common-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="banner-overlay">
        <h1 className="reveal-text">{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CommonBanner;
