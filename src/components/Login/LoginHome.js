import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

//Styles
const Container = styled.div`
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 0.83fr 1fr;
`;

const Section = styled.section`
    grid-area: "left";
    ${(props) =>
        props.left &&
        css`
            border: 2px solid black;
            text-align: center;
            font-size: 50px;
            padding: 25rem 0px;
        `}

    ${(props) =>
        props.right &&
        css`
            grid-area: "right";
            /* border: 2px solid blue; */
            padding: 2em;
            font-size: 30px;
            padding-right: 0px;
            margin-top: 5em;
            margin-left: 1em;
        `}
`;

const Input = styled.input`
    padding: 1rem;
    width: 645px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    margin: 1em;
    border: 0px;
    border-top: 2px solid black;
`;

const Button = styled.button`
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    width: 363px;
    margin-left: 2rem;
    padding: 1rem;
`;

function LoginHome() {
    return (
        <Container>
            <Section left>Image</Section>

            <Section right>
                <span style={{ marginLeft: "1em", marginBottom: "5em" }}>
                    Don't have an account?{" "}
                    <Link style={{ textDecoration: "none" }} to={"./signup"}>
                        Sign Up
                    </Link>
                </span>
                <div>
                    <Input type={"text"} placeholder={"Email"}></Input>
                    <Input type={"password"} placeholder={"Password"}></Input>
                    <Link to={"./loggedin"}>
                        <Button type="submit">Submit</Button>
                    </Link>
                </div>
            </Section>
        </Container>
    );
}

export default LoginHome;
