import React from "react";
import styled from "styled-components";
import homeimg from "../../images/homepic.jpg";
import gnalimg from "../../images/GNAL.png";
import l1img from "../../images/Line1.png";
import l2img from "../../images/Line2.png";
import gnsnimg from "../../images/GnsnAlvero.png";
import searchimg from "../../images/search.png";
import "../../App.css";
import "../../index.css";
import gnsnLogo from "../../images/GnsnAlvero.png";
import { Link } from "react-router-dom";

// styles

const HomeWrapper = styled.div`
  position: absolute;
  width: 1728px;
  height: 1117px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url(${homeimg});
  background-position: top;
  background-size: cover;
  background-blend-mode: darken;
`;

const Container = styled.div`
  column-width: auto;
  display: flex;
  margin-top: 2em;
  justify-content: space-around;
`;

const LineWrapper1 = styled.img`
  position: absolute;
  width: 230px;
  height: 7px;
  left: 100px;
  top: 65px;

  /* border: 7px solid #F0F5F9; */
`;

const LineWrapper2 = styled.img`
  position: absolute;
  width: 125px;
  height: 7px;
  left: 100px;
  top: 85px;

  /* border: 7px solid #F0F5F9; */
`;

const Title = styled.div`
  position: absolute;
  width: 568px;
  height: 100px;
  left: 580px;
  top: 15px;
  /* margin-left: 2em; */
  text-align: center;
  /* font-family: monospace; */
  font-size: 6em;
`;

const GnsnWrapper = styled.img`
  /* position: absolute; */
  width: 568px;
  height: 100px;
  /* left: 580px; */
  /* top: 15px; */
  font-family: "Otto Attac Type";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 100px;
  /* identical to box height */

  text-align: center;

  color: #f0f5f9;
`;

const SignUp = styled.div`
  position: absolute;
  width: 146px;
  height: 48px;
  left: 1482px;
  top: 41px;

  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #f0f5f9;
  h5 {
    font-family: "Poison";
  }
`;

const Buttons = styled.span`
  margin-top: 15px;
  justify-self: center;
  padding-top: 0.4em;
`;

// Functionality

function HomeTitle() {
  return (
    <HomeWrapper>
      <Container>
        <Buttons>
          <LineWrapper1 src={l1img}></LineWrapper1>
          <LineWrapper2 src={l2img}></LineWrapper2>
          {/* <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg> */}
        </Buttons>
        <Title>
          <GnsnWrapper src={gnsnimg}></GnsnWrapper>
        </Title>
        <SignUp>
          <h5>Sign Up</h5>
        </SignUp>
      </Container>


      <BodyWrapper>
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
      </BodyWrapper>
    </HomeWrapper>
  );
}

const BodyWrapper =styled.div`

`

const BodyText = styled.div`
  position: absolute;
width: 1012px;
height: 120px;
left: 358px;
top: 440px;

font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 60px;
display: flex;
align-items: center;
text-align: center;

color: #F0F5F9;

  /* text-align: center;
  padding: 4em 5em;
  padding-bottom: 2em;
  font-size: 3em;
  font-weight: 100;
  color: gray; */
`;

const Button = styled.button`
display: flex;
    align-items: center;
    justify-content: center;
box-sizing: border-box;

position: absolute;
width: 363px;
height: 73px;
left: 683px;
top: 602px;
background: transparent;
border: 2px solid #F0F5F9;

font-family: 'Poison';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 36px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em;

color: #F0F5F9

  /* justify-self: center;
  height: 3em;
  width: 11em;
  font-size: 2em;
  background: transparent; */
`;

const Logo = styled.img`
position: absolute;
width: 1533px;
height: 270px;
left: 98px;
top: 847px;

font-family: 'Otto Attac Type';
font-style: normal;
font-weight: 400;
font-size: 270px;
line-height: 270px;
/* identical to box height */

text-align: center;

color: #F0F5F9;


  /* font-family: monospace;
  font-size: 18em;
  font-weight: 400;
  margin-top: 0.3em;
  justify-self: center;
  font-style: italic; */
`;


export default HomeTitle;
