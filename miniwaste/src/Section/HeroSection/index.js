import React from "react";
import BackgroundImage from "../../Assets/nature.jpg";
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 45vw;
  position: relative;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 25px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: auto;
`

const Title = styled.h1`
  font-size: calc(3.5rem + 1vw);
  line-height: 1.5;
  margin-left: 50px;
  position: absolute;
  color: white;
`;

const index = () => {
  return (
    <HeroSection>
        
      <MainContainer>
        <Image style={{opacity: "80%"}}>
            <img src={BackgroundImage} alt="Snow" />
        </Image>
        <Title>Live zero waste <br/> Protect the nature <br/> Save our Planet</Title>
    
      </MainContainer>
    </HeroSection>
  );
};

export default index;