import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/rocket_launch_.png";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About Water My Plant</SectionTitle>
      <AboutContainer>
        <AboutText>
       Water My Plant is an independent company supplying and maintaining interior and exterior living plants, artificial planting and holiday decorating for residential, office and commercial properties, plant design,. {<br />}
          {<br />} Water My Plant provides service throughout Southern California and the Bay Area which includes San Francisco and San Jose..{" "}
          {<br />}
          {<br />} Our Success is due to our extreme professionalism, enthusiasm, the dedication of our team of specialists and the access to a very wide range of plants and containers.We take great pride in what we do and work to your environment..
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
