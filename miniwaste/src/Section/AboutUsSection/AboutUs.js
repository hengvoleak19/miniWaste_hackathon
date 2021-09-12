import React from "react";
import styled from "styled-components";
import AboutUSImg from "../../Assets/name.jpg";


const AboutUsWrap = styled.div`
  width: 100vw;
  height: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  align-items: center;
`;

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:85%;
`;


const LeftSide = styled.div`
  diplay: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  margin-left: 90px;
`

const Font = styled.h1`
font-size: calc(0.5rem + 1vw);
font-weight: 600;
`


const RightSide = styled.div`
width: 50%;
height: auto;
display: flex;

`

const Image = styled.img`
  width: 55%;
  height: auto;
  margin-left: 35px;
`

const Box = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border-color: black;
border-style: solid;
border-radius: 30px;
`

const Title = styled.h1`
font-size: calc(1rem + 1vw);
margin-bottom: 30px;
`

const AboutUs = () => {
  return (
    <AboutUsWrap >
      <MainContainer>
        <Title>About Us</Title>
        <Box>
          <LeftSide> 
              
              <Image src={AboutUSImg} /> 
          </LeftSide>
          <RightSide> 
              <Font> Mini Waste is a tech-driven platform where we share knowledge, 
                  inspire and support people to live a zero waste lifestyle. </Font> 
          </RightSide>
        </Box>
      </MainContainer>
    </AboutUsWrap>
  )
}

export default AboutUs



