import React from "react";
import Wrapper from "../layout/Wrapper";
import CommonBanner from "../components/CommonBanner";
import { assets } from "../json/assets";
import PreferedChoice from "../components/ClientsComponents/PreferedChoice";
import ClientCollab from "../components/ClientsComponents/ClientCollab";
import ProjectManagement from "../components/ClientsComponents/ProjectManagement";
import Consultancy from "../components/ClientsComponents/Consultancy";

const page = () => {
  return (
    <Wrapper hideAnnouncements={true}>
      <CommonBanner
        title="Our Clients"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint nulla iusto doloremque dignissimos! Consequuntur"
        bgImage={assets.large_open_office_floor}
      />

      <section className="clients-section">
        <PreferedChoice />
        <ClientCollab />
        <ProjectManagement />
        <Consultancy />
      </section>
    </Wrapper>
  );
};

export default page;
