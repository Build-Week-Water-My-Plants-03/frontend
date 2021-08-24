import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Quality Plants</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Planting Inspiring Spaces"
        description="At Water My Plants, we treat what we do has a form of high art: it’s beautiful, elegant, timeless, and expressive."
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Planter & Plant Care"
        description="Keeping potted plants alive is a learned skill, and there is no reason you can’t learn to do it, too. To help you out and get you started on your plant-care journey, we’ve put together this website on everything you need to know about how to take care of potted plants."
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Quality Is Our Priority"
        description=" Most of the plants we grow are planted in restoration projects, often in challenging environments east of the Cascades with little or no irrigation."
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
