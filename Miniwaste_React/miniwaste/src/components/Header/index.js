import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Assets/logo.jpg";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import {useState} from 'react';


const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--white);
  color: var(--black);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2.5rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  width: 35rem;
  max-width: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-out;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--black);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s ease;
    }

    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--primarycolor);
    }
      &:not(:last-child) {margin-right: 2rem;}
      &:hover{color: #0CDD3A}
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;

const HanburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    background-color: var(--secondarycolor);
    width: 2rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(18 35 46 / 95%);
  border-radius: 20px;
  margin: 0.5rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;

    &:not(:last-child):hover {
      color: var(--primarycolor);
    }
  }
`;

function Header() {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);


  return (
    <Headers>
      <Logo>
        <img src={logo} alt="Mini Waste" />
        <Link to="/" style={{ color: "black",  }}>
          <h3>Mini Waste</h3>
        </Link>
      </Logo>
      <Nav>
        <Link to="/Blog_Community"> Blog &amp; Community </Link>
        <Link to="/Donate"> Donate </Link>
        
        <Link to="/LogIn"> Log In </Link>
        <Link to ="#"> <NightsStayIcon  style={{ cursor: "pointer" }} /> </Link>
      </Nav>
      <HanburgerBtn onClick={() => handleClick()} clicked={Click}>
        <span></span>
      </HanburgerBtn>
      <MobileMenu clicked={Click}>
        <Link to="/" onClick={() => handleClick()}>
          {" "}
          Home{" "}
        </Link>
        <Link to="/Blog_Community" onClick={() => handleClick()}>
          {" "}
          Destination{" "}
        </Link>
        <Link to="/Donate" onClick={() => handleClick()}>
          {" "}
          Destination{" "}
        </Link>

        <NightsStayIcon
          style={{ cursor: "pointer", color: "#ffffff" }}
          onClick={() => handleClick()}
        /> 
      </MobileMenu>
    </Headers>
  );
}

export default Header;