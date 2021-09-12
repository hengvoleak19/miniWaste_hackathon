import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Image1 from '../Assets/book.jpg'
import Image2 from '../Assets/shirt.png'
import Image3 from '../Assets/whiteshirt.png'


const DonateSection = styled.div`
  width: 100vw;
  height: auto;
  background-color: var(--navcolor);
  display: flex;
  flex-direction: column;
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
margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 85vw;
  line-height: 2.5;
//   border-style: solid;
//   border-color: black;
//   border-radius: 30px;
  padding: 30px;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Image = styled.img`
border-radius: 20px;
width: 250px;
height: 250px;
color: white;
margin: 30px;
`

const Text = styled.div`
  background-color: #AAEC75;
  padding: 30px;
  border-radius: 30px

`

const Name = styled.h2``

const Description = styled.p``

const Address = styled.p`
  margin-top: 20px;
`

const Tel = styled.p``

export default function Donate() {
    return (
        <div>
            <Header></Header>
            <DonateSection>
                <MainContainer>
                    <Image src = {Image2}/>
                    {/* < width="300" height="300"/> */}
                        {/* </Image> */}
                       
                    
                    <Text>
                        <Name>Name:  Jasmin</Name>
                        <Description>I have a shirt which my 7 years old son only wore it for couple times and he is no loger use it now, 
                            I would love to  donate this who is needed, if you would like to take it, please contact to me.</Description>
                        <Address>Address: Slor Kram district, Siem Reap, Cambodia</Address>
                        <Tel>Tel: +855 77456789</Tel>
                    </Text>
                </MainContainer>

                <MainContainer>
                    <Image src = {Image1}/>
                    {/* < width="300" height="300"/> */}
                        {/* </Image> */}
                       
                    
                    <Text>
                        <Name>Name:  Dara</Name>
                        <Description>I have this book which is useful for high school students, who want to prepare for the exam competition . I would love to share this book with everyone here. If you wish to take it , just contact me through phone number below.</Description>
                        <Address>Address: Chbar Ampov district, Phnom Penh, Cambodia</Address>
                        <Tel>Tel: +855 77851186</Tel>
                    </Text>
                </MainContainer>

                <MainContainer>
                    <Image src = {Image3}/>
                    {/* < width="300" height="300"/> */}
                        {/* </Image> */}
                       
                    
                    <Text>
                        <Name>Name:  Jessy</Name>
                        <Description>I have a shirt which my 7 years old son only wore it for couple times and he is no loger use it now, 
                            I would love to  donate this who is needed, if you would like to take it, please contact to me.</Description>
                        <Address>Address: Slor Kram district, Siem Reap, Cambodia</Address>
                        <Tel>Tel: +855 77456789</Tel>
                    </Text>
                </MainContainer>

            
            </DonateSection>

            <Footer></Footer>
        </div>
    )
}
