import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Logo from "../assets/logo/Dark.svg";
const Page = (props) => {
    const isHome = props.location.pathname === "/";

    return (
        <Component>
            <div className='padding' />
            <Link to='/'>{!isHome && <img src={Logo} className='nav-logo' alt='AGM Logo' />}</Link>
            {props.children}
        </Component>
    );
};
const Component = styled.div`
    grid-area: content;
    position: relative;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
    padding: 0 16px;
    .nav-logo {
        display: none;
    }
    .padding {
        padding-top: 96px;
        padding-left: 75px;
    }
    @media (min-width: 768px) {
        .nav-logo {
            display: block;
            width: 213px;
            padding-bottom: 96px;
        }
        padding: 0 24px;
        .padding {
            padding-top: 96px;
            padding-left: 75px;
        }
    }
`;
export default withRouter(Page);
