import React from "react";
import Wrapper from "../layout/Wrapper";
import CommonBanner from "../components/CommonBanner";
import { assets } from "../json/assets";
import About from "../components/About";
import ScatteredCards from "../components/CareerComponents/ScatteredCards";
import { Map } from "lucide-react";

import TeamSection from "../components/TeamSection";

import AnimatedHistory from "../components/AnimatedHistory";

const page = () => {
  const scatteredData = [
    { title: "DE&I", icon: <Map size={20} /> },
    { title: "Recognizing Excellence", icon: <Map size={20} /> },
    { title: "Pan India Presence", icon: <Map size={20} /> },
    { title: "Ethics and Integrity", icon: <Map size={20} /> },
    { title: "Client Success Stories", icon: <Map size={20} /> },
    { title: "Sustainability Focus", icon: <Map size={20} /> },
  ];

  return (
    <Wrapper hideAnnouncements={true}>
      <CommonBanner
        title="About us"
        bgImage={assets.guest_bedroom_full_view}
        description="To become a trusted and innovative interior design company known for creating functional, aesthetically refined, and high-quality interior environments. Our vision is to continuously deliver design solutions that enhance the way people live, work, and experience spaces, while maintaining the highest standards of creativity, craftsmanship, and professionalism."
      />
      <About
        title="Who we are"
        description="We are a dynamic and performance-driven interior contracting company specializing in commercial and corporate interior environments. With a strong focus on functionality, cost-efficiency, and modern design principles, we deliver spaces that are not only visually impactful but also operationally effective. Our approach is rooted in the philosophy of “Form Follows Function”, ensuring every design decision enhances workplace productivity and user experience. We integrate biophilic elements, smart space planning, and contemporary materials to create environments that inspire collaboration and well-being. Over the years, we have successfully executed projects ranging from mid-scale offices to large-format commercial spaces exceeding 80,000 sq. ft., demonstrating our capability to scale while maintaining quality and cost control."
      />
      <AnimatedHistory />
      <ScatteredCards cards={scatteredData} />
      <TeamSection />
    </Wrapper>
  );
};

export default page;
