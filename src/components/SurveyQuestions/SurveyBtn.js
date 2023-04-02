import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 363px;
    height: 73px;
    background-color: "#f0f5f9";
    border: 2px solid;
    font-size: 30px;
    padding: 2.2em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function SurveyBtn(props) {
    return <Button>{props.title}</Button>;
}

export default SurveyBtn;
