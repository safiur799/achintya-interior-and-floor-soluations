import React from "react";

interface CommonBannerProps {
  title: string;
  bgImage: string;
  description?: string;
  isVideo?: boolean;
  children?: React.ReactNode;
}

const CommonBanner = ({
  title,
  bgImage,
  description,
  isVideo = false,
  children,
}: CommonBannerProps) => {
  return (
    <div
      className={"common-banner" + (children ? " banner-with-children" : "")}
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
        {children && <div className="banner-children">{children}</div>}
      </div>
    </div>
  );
};

export default CommonBanner;
