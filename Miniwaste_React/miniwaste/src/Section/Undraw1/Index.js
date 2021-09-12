import React from "react";
import styled from "styled-components";
import unnatureRight from "../../Assets/unnatureRight.jpg";
import Button from '@material-ui/core/Button';

const UndrawTop = styled.div`
  width: 100vw;
  height: 20vw;
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
  flex-direction: row;
  justify-content: center;
  width: 85vw;
  line-height: 2.5;
  border-style: solid;
  border-color: black;
  border-radius: 30px;
  padding: 30px;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
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
font-size: calc(2rem + 1vw);
font-weight: 600;
`
const SubScript = styled.h1`
font-size: calc(0.1rem + 1vw);
`

const RightSide = styled.div`
width: 50%;
height: auto;
display: flex;

`

const Image = styled.img`
  width: 55%;
  height: auto;
  margin-left: 180px;
`

const index = () => {
  return (
    <UndrawTop>
      <MainContainer>
        <LeftSide> 
            <Font> How to live Zero Waste?</Font>
            <SubScript> Explore us now!</SubScript>
            <Button variant="contained" color="primary" disableElevation >
                Join our community!
            </Button>

        </LeftSide>
        <RightSide> 
            <Image src={unnatureRight} />    
        </RightSide>
      </MainContainer>
    </UndrawTop>
  );
};

export default index;

