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
        description={`The company was founded by Shashi & Raaj, couple of young talented entrepreneurs from Kolkata in the year 2017. The duo supported by a team of dedicated professionals and channel partners have a tremendous experience to successfully deliver large complex projects both to local and MNC clients pan India.

Over the years Achintya Interior & Floor Solutions Pvt. Ltd. a.k.a. Achintya has developed to its present status due to its credibility, speed and quality of work, keeping in mind how to embrace the nature and reduce carbon emission to mother Earth.

It’s motto 3S i.e. ‘Safety, Sustainability and Service brings growth’ maximizes customer satisfaction. In due course of time, Achintya has achieved certificates for Quality Management System (ISO 9001:2015), Environmental Management System (ISO 14001:2015) and Occupational Health and Safety Management System (ISO 45001:2018).

We believe Achintya’s passion for innovation and perfection will lead us to be one of the best interior designer company in this part of the world.`}
      />
      <AnimatedHistory />
      <ScatteredCards cards={scatteredData} />
      <TeamSection />
    </Wrapper>
  );
};

export default page;
