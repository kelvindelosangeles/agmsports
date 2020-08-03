import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Colors from "../../constants/Colors";

const Navbar = () => {
    return (
        <Component>
            <div className='navlinks'>
                <Link to='/contact'>Contact</Link>
                <Link to='/contact'>Clients</Link>
                <Link to='/branding'>Branding</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='social-links'>
                <a href='#'>
                    <img src={Instagram} alt='' />
                </a>
                <a href='#'>
                    <img src={Twitter} alt='' />
                </a>
                <a href='#'>
                    <img src={Linkedin} alt='' />
                </a>
            </div>
        </Component>
    );
};
const Component = styled.div`
    display: none;
    grid-area: navbar;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    max-height: 100vh;
    position: fixed;
    width: 75px;
    height: 100%;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 80px 0;
    }
    .navlinks {
        grid-template-columns: repeat(3, 1fr);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: rotate(180deg);
        a {
            padding: 20px 0;
            font-size: 16px;
            text-transform: uppercase;
        }
    }
    .social-links {
        display: grid;
        grid-template-columns: min-content;
        grid-row-gap: 40px;
        justify-items: center;
    }
`;
export default Navbar;
