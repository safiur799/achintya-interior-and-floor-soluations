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
      <CommonBanner title="About us" bgImage={assets.dummy_video} isVideo />
      <About title="Who we are" />
      <AnimatedHistory />
      <ScatteredCards cards={scatteredData} />
      <TeamSection />
    </Wrapper>
  );
};

export default page;
