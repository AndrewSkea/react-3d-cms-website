import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  // position: absolute;
  // width: 100%;
  // height: 100%;
  // top: 0;
  // left: 0;
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding-top: 13%;
  z-index: 1;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
  @media (max-width: 1200px) {
    font-size: 60px;
  }
  @media (max-width: 800px) {
    font-size: 50px;
    text-align: center;
  }
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
  @media (max-width: 1200px) {
    font-size: 25px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 0.5em;
  color: black;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  @media (max-width: 1200px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 10px;
    text-align: center;
  }
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

const MadeBy = styled.h3`
  color: #fff;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>Andrew Skea</Logo>
      <Slogan>Software Engineer &#128421;&#65039;</Slogan>
      <Paragraph>
        <span className="removeOnMobile">
          who likes building websites, ML models, APIs and whole load of custom software!
        <br /><br /><br /><br />
        Check out the globe!<br />
        </span>
        <span style={{color: "white"}}>White markers - Visited &#9992;&#65039;</span><br />
        <span style={{color: "red"}}>Red markers - Lived &#127968;</span><br />

        The heights are how long I have lived there
        <span className="removeOnMobile">
        , the smallest being 3 years. Have a spin!
        </span>
        
      </Paragraph>
    </TopSectionContainer>
  );
}