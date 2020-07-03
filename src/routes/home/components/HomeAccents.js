import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Colors from "../../../constants/Colors";
import { animated, useSpring, config, useChain } from "react-spring";
import { useMediaQuery } from "react-responsive";

const HomeAccents = () => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        setToggle(true);
    }, []);

    // Responsive sizes to determine heights and widths for animations
    const sm = useMediaQuery({ query: "(max-width:767px)" });
    const md = useMediaQuery({ query: "(min-width:768px, max-width:1199px)" });
    const lg = useMediaQuery({ query: "(min-width:1200px)" });

    const squareRef = useRef();
    const SquareAnimation = useSpring({
        ref: squareRef,
        from: {
            transform: "translateX(100%)",
        },
        to: {
            transform: "translateX(0%)",
        },
        config: config.molasses,
    });
    const outlineRef = useRef();
    const OutlineAnimation = useSpring({
        ref: outlineRef,
        from: { transform: "scale(0)" },
        to: { transform: "scale(1)" },
        config: config.molasses,
    });
    const fadeRef = useRef();
    const FadeIn = useSpring({
        ref: fadeRef,
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2500 },
    });
    const upRef = useRef();
    const SlideUp = useSpring({
        ref: upRef,
        from: { transform: "translateY(0px)" },
        to: { transform: "translateY(-500px)" },
        config: { duration: 30000 },
    });
    const rightRef = useRef();
    const SlideRight = useSpring({
        ref: rightRef,
        from: { transform: "translateX(0px)" },
        to: { transform: "translateX(-500px)" },
        config: { duration: 30000 },
    });
    const leftRef = useRef();
    const SlideLeft = useSpring({
        ref: leftRef,
        from: { transform: "translateX(0px)" },
        to: { transform: "translateX(500px)" },
        config: { duration: 30000 },
    });

    useChain([squareRef, outlineRef, fadeRef, leftRef, rightRef, upRef], [0, 0.5, 1, 1.5, 2, 2.5], 1000);

    return (
        <Component>
            <Square style={SquareAnimation} />
            <OutlinedSquare style={OutlineAnimation} />
            <Meticulous style={{ ...FadeIn, ...SlideLeft }}>Meticulous</Meticulous>
            <Disruptive style={{ ...FadeIn, ...SlideUp }}>Disruptive</Disruptive>
            <Tenacious style={{ ...FadeIn, ...SlideRight }}>Tenacious</Tenacious>
        </Component>
    );
};
const Component = styled.div`
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
`;
const Accent = styled(animated.div)`
    position: absolute;
    z-index: -1;
`;
const Text = styled(animated.p)`
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
    border: 2px solid ${Colors.magenta};
    bottom: 30%;
    right: -10px;
    width: 109px;
    height: 80px;
    @media (min-width: 768px) {
        top: 226px;
        right: 8%;
    }
    @media (min-width: 1024px) {
        height: 134px;
    }
    @media (min-width: 1200px) {
        right: 4%;
        top: 408px;
        height: 188px;
    }
`;
const Square = styled(Accent)`
    /* background-color: ${Colors.lightGreyO}; */
    background-color: rgba(214,214,214,.34);
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
        width: 532px;
    }
`;
const Meticulous = styled(Text)`
    top: 0;
    left: 20%;
    color: #e6e6e687;
    @media (min-width: 768px) {
        left: 110px;
    }
    @media (min-width: 1024px) {
        left: 200px;
    }
    @media (min-width: 1200px) {
        left: 200px;
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
