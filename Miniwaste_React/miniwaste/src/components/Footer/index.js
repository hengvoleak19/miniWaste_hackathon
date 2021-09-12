import React from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.jpg";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1 rem;
  color: var(--secondarycolor);
  display: block;
  align-items: center;
  width: 100%;
  background-color: var(--white);
  justify-content: space-between;
  @media only Screen and (max-width: 52em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const ROW = styled.div`
  padding: 2rem 5rem;
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: space-between;

  @media only Screen and (max-width: 52em) {
    display: flex;
    flex-direction: column;
    justity-content: center;
    align-items: center;
  }

  a {
    &:hover {
      color: var(--primarycolor);
      font-weight: 500;
    }
  }
`;

const COLUMN = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 52em) {
    margin: 0.5rem 0;
  }

  a {
    font-weight: 300;
    line-height: 1.5;
    color: var(--black);
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const ROWICON = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ICON = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #12232e;
    &:hover {
      color: var(--primarycolor);
    }
  }
`;

const index = () => {
  return (
    <FOOTER>
      <hr
        style={{
          border: 0,
          borderRadius: 10,
          color: "#8c8b89",
          backgroundColor: "#8c8b89",
          height: 2,
          margin: "1rem 0",
        }}
      />
      <ROWICON>
        <ICON>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FacebookIcon style={{ fontSize: 35 }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon style={{ fontSize: 35 }} />
          </a>
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <TwitterIcon style={{ fontSize: 35 }} />
          </a>
          <a
            href="https://mail.google.com/mail/"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon style={{ fontSize: 35 }} />
          </a>
        </ICON>
      </ROWICON>
      <ROWICON>
        &copy;MiniWaste, Inc {new Date().getFullYear()}. Everything starts from us!
      </ROWICON>
      <ROWICON style={{backgroundColor:"#0CDD3A"}}>
          <div >
              <h3>Minimize carbon footprint and impact on the planet</h3>
          </div>

      </ROWICON>
    </FOOTER>
  );
};

export default index;