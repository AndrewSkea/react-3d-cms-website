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
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  // text-align: center;
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
      <Slogan>Welcome to my website, browse away :)</Slogan>
      <Paragraph>
        I'm a Software engineer who likes to get stuck into a variety of projects ranging from ML
        to website building to electronics. You can check out the technologies I have used as well
        as the projects I've built below! <br /><br />
        The Globe shows you the places I have lived in red and have vistied in white.
        The heights represent how long I have lived there, the smallest being 3 years. Have a spin!
      </Paragraph>
    </TopSectionContainer>
  );
}