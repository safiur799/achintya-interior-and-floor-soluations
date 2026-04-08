import React from "react";

interface CommonBannerProps {
  title: string;
  bgImage: string;
  description?: string;
  isVideo?: boolean;
}

const CommonBanner = ({
  title,
  bgImage,
  description,
  isVideo = false,
}: CommonBannerProps) => {
  return (
    <div
      className="common-banner"
      style={!isVideo ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {isVideo && (
        <video
          src={bgImage}
          autoPlay
          muted
          loop
          playsInline
          className="banner-video"
        />
      )}
      <div className="banner-overlay">
        <h1 className="reveal-text">{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CommonBanner;
