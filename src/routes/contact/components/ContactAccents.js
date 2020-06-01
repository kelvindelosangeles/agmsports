import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/Colors";
const ContactAccents = () => {
    return (
        <React.Fragment>
            <About>Get in Touch</About>
        </React.Fragment>
    );
};
const Text = styled.p`
    position: absolute;
    z-index: -1;
    font-size: 48px;
    text-transform: uppercase;
    font-weight: 800;
    color: ${Colors.lightGrey};
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    top: 96px;
    right: 10px;
    @media (min-width: 768px) {
        font-size: 88px;
    }
    @media (min-width: 1024px) {
        font-size: 102px;
    }
    /* @media (min-width: 1200px) {
        font-size: 144px;
    } */
`;

const About = styled(Text)``;
export default ContactAccents;
