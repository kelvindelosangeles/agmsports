import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/Colors";
const HomeAccents = () => {
    return (
        <React.Fragment>
            <Square />
            <OutlinedSquare />
            <Meticulous>Meticulous</Meticulous>
            <Disruptive>Disruptive</Disruptive>
            <Tenacious>Tenacious</Tenacious>
        </React.Fragment>
    );
};

const Accent = styled.div`
    position: absolute;
    z-index: -1;
`;
const Text = styled.p`
    position: absolute;
    z-index: -1;
    font-size: 48px;
    text-transform: uppercase;
    font-weight: 800;
    color: ${Colors.lightGrey};
    @media (min-width: 768px) {
        font-size: 88px;
    }
    @media (min-width: 1024px) {
        font-size: 102px;
    }
    @media (min-width: 1200px) {
        font-size: 144px;
    }
`;

const OutlinedSquare = styled(Accent)`
    border: 1px solid ${Colors.magenta};
    bottom: 20%;
    right: -10px;
    width: 109px;
    height: 34px;
    @media (min-width: 768px) {
        top: 226px;
        height: 53px;
    }
    @media (min-width: 1024px) {
        height: 134px;
    }
    @media (min-width: 1200px) {
        top: 408px;
        height: 188px;
    }
`;
const Square = styled(Accent)`
    background-color: ${Colors.lightGreyO};
    height: 138px;
    width: 138px;
    top: 0;
    right: 0;
    @media (min-width: 768px) {
        height: 252px;
        width: 252px;
    }
    @media (min-width: 1200px) {
        height: 532px;
        width: 506px;
    }
`;
const Meticulous = styled(Text)`
    top: 0;
    right: -20%;
    @media (min-width: 768px) {
        right: -110px;
    }
    @media (min-width: 1024px) {
        right: -200px;
    }
    @media (min-width: 1200px) {
        right: -315px;
    }
`;
const Disruptive = styled(Text)`
    left: 28px;
    bottom: -10px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    @media (min-width: 768px) {
        left: 0px;
        bottom: 32px;
    }
    @media (min-width: 1200px) {
        bottom: 134px;
    }
`;
const Tenacious = styled(Text)`
    bottom: 32px;
    right: -5%;
    @media (min-width: 768px) {
        right: -124px;
    }
    @media (min-width: 1200px) {
        right: 112px;
        bottom: 0;
    }
`;

// const Square = styled.div`
// `;
export default HomeAccents;
