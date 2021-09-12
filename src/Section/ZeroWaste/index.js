import React from "react";
import styled from "styled-components";
import LeftSide from "../../Assets/leftside.jpg";
import RightSide from "../../Assets/rightside.jpg";

const ZeroWaste = styled.div`
  width: 100vw;
  height: 55vw;
  background-color: var(--navcolor);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only Screen and (max-width: 48em) {
    height: auto;
    padding: 2em;
    // height: 70vw;
    // display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 85vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const SubText = styled.p`
  margin-top: 10px;
  font-size: calc(1rem + 0.5vw);
  // color: var(--nav2);
`;

const WrapImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  `

const Box = styled.img`
  border-radius: 20px;
  width: 500px;
  height: 500px;
  color: white;
  margin: 30px;
`


const index = () => {
  return (
    <ZeroWaste>
      <MainContainer>
        <SubText><span style={{fontWeight:"bold", color:"#0CDD3A" }}>ZERO WASTE</span> is a lifestyle choice that aims to minimize harmful environmental impacts by generating less waste. </SubText>
        <WrapImage>
            {/* <Box src = {LeftSide} alt="image-left" width="200" height="200"/>
            <Box src = {RightSide} alt="image-right" width="200" height="200"/> */}
            <Box src={LeftSide} />
            <Box src={RightSide} />

        </WrapImage>
        <SubText>The true aim of Zero-waste is not to just keep waste out of landfills, but rather to redesign our entire cycle of resource extraction, 
            consumption, and waste management so no resources are wasted at any point along the way. </SubText>
      </MainContainer>
    </ZeroWaste>
  );
};

export default index;

