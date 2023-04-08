import React from "react";
import styled from "styled-components";
import SurveyBtn from "./SurveyBtn";
import { Link } from "react-router-dom";
import gnsnimg from "../../images/GnsnAlvero.png";

const CenterHeading = styled.p`
  text-align: center;
  font-size: 50px;
  font-style: "monospace";
  font-weight: 200;
  line-height: 4;
  margin-top: 2.4em;
`;

const ButtonContainer = styled.div`
  width: 75%;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4em auto;
  margin-left: 12em;
`;

const Footer = styled.div`
  position: relative;
  top: 6.2em;
  left: 4em;
  height: 60px;
  width: 1356px;
  font-size: 25px;
  text-align: center;
`;

function UseTypeScreen() {
  return (
    <div >
      <Logo>
        <GnsnWrapper src={gnsnimg}></GnsnWrapper>
      </Logo>
      <CenterHeading>HOW DO YOU WANNA USE THE APP?</CenterHeading>
      <ButtonContainer>
        <SurveyBtn title={"AS A CUSTOMER"} />
        <Link style={{ textDecoration: "none" }} to={"/servicetype"}>
          <SurveyBtn title={"AS A PARTNER"} />
        </Link>
      </ButtonContainer>

      <Footer>
        ALL YOUR INFORMATIONS ARE PRIVATE. WE DON’T SHARE OR SELL YOUR PERSONAL
        INFORMATION. WE’RE JUST CONDUCTING THIS SURVEY TO PROVIDE YOU THE BEST
        SERVICE.
      </Footer>
    </div>
  );
}


const Logo =styled.div`
z-index:2;
    position: absolute;
width: 568px;
height: 100px;
left: 580px;
top: 35px;
`

const GnsnWrapper = styled.img`
    filter: brightness(0);
    z-index:2;
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
export default UseTypeScreen;
