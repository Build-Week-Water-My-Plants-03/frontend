import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../assets/pictures/profile_picture_1.jpg";
import User2Img from "../../assets/pictures/profile_picture_2.jpg";
import User3Img from "../../assets/pictures/profile_picture_3.jpg";
import User4Img from "../../assets/pictures/profile_picture_4.jpeg";

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color:#50C878;
  background-color:#E5E4E2;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    // background-color: #e4e4e4;
    background-color:grey;
    border: none;
    outline: none;
    &:not(:last-of-type) {
       margin-right: 3px; 

      
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
   
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <ReviewsContainer>
      <SectionTitle> Our Customer's Reviews</SectionTitle>
      {/* <SectionTitle>Happy Customer</SectionTitle> */}
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" They love it - I love it! I love the intricacies of my money tree even if it doesn’t come with “green money” attached. I’ve always thought of them as lovely and finally purchased them for my team. They arrived green and fresh, just as I anticipated. I love them!"
              username="John coner"
              userImgUrl={User1Img}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText=" Nice Plants! I ordered medium peacock plants in a grower pot for an at-home convention. They got delivered on the expected timeline and they were packed nicely.  Would order other plants again!"
              username="John coner"
              userImgUrl={User2Img}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText=" Impressed. I ordered Golden Pothos as an I miss you plant. for our office. I am so pleased and impressed with the Water My Plant team and how the plants were packaged. Done with care! Thank you! Very happy!"
              username="John coner"
              userImgUrl={User3Img}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText=" Nice Plants! I ordered medium peacock plants in a grower pot for an at-home convention. They got delivered on the expected timeline and they were packed nicely. The leaves they had when it arrived are in good shape. Would order other plants again!"
              username="John coner"
              userImgUrl={User4Img}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
