import React from "react";
import HomeTitle from "./HomeTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css";
import gnsnLogo from "../../images/GnsnAlvero.png";
// import homeimg from '../../images/homepic.jpg'

//Styles
// const HomeWrapper =styled.div`
/* width: 1728px;
    height: 1117px;
    background: */
/* top, transparent black, faked with gradient */
/* linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.7)
        ), url(${homeimg}); */
/* background-image: url(${homeimg}) ; */
/* background-position: top;
    background-size: cover;
    background-blend-mode: darken; */
// `

const BodyText = styled.div`
  text-align: center;
  padding: 4em 5em;
  padding-bottom: 2em;
  font-size: 3em;
  font-weight: 100;
  color: gray;
`;

const Button = styled.button`
  justify-self: center;
  height: 3em;
  width: 11em;
  font-size: 2em;
  background: transparent;
`;

const Logo = styled.span`
  font-family: monospace;
  font-size: 18em;
  font-weight: 400;
  margin-top: 0.3em;
  justify-self: center;
  font-style: italic;
`;
// const Logo = styled.img`
//     position: absolute;
//     width: 1533px;
//     height: 270px;
//     left: 98px;
//     top: 847px;
//     border: 2px solid red;
//     /* font-family: monospace;
//     font-size: 18em;
//     font-weight: 400;
//     margin-top: 0.3em;
//     justify-self: center;
//     font-style: italic; */
// `;

//Functionality

function Home() {
  return (
    <>
      <HomeTitle />
      {/* <HomeWrapper>
        <BodyText>
          All your beauty solution in one place. Join the new world of beauty &
          fashion.
        </BodyText>
        <Link
          to={"/login"}
          style={{ justifyContent: "center", justifySelf: "center" }}
        >
          <Button>Join Us</Button>
        </Link>
        <Logo src={gnsnLogo}></Logo>
      </HomeWrapper> */}
    </>
  );
}
export default Home;
