import React from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { HamburgerButton } from "react-hamburger-button";
import Logo from "../../assets/logo/Dark.svg";
import { withRouter, Link } from "react-router-dom";
import Colors from "../../constants/Colors";
import LogoMark from "../../assets/logo/LogoMark Dark.png";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import LinkedIn from "../../assets/icons/Linkedin.svg";

const MobileNavbar = ({ location }) => {
    const navbarOpen = useSelector((state) => state.GlobalState.navbarOpen);
    const dispatch = useDispatch();
    const isHome = location.pathname === "/";

    const CloseNavbar = () => {
        return dispatch({ type: "TOGGLE_NAVBAR" });
    };

    return (
        <Component>
            <div className='menu'>
                <HamburgerButton
                    open={navbarOpen}
                    className='menu-btn'
                    onClick={CloseNavbar}
                    width={24}
                    height={15}
                    strokeWidth={3}
                    color='black'
                    animationDuration={0.3}
                />
            </div>
            {!isHome && (
                <Link to='/'>
                    <img src={Logo} alt='agm logo' className='logo' />
                </Link>
            )}
            <Drawer anchor='left' open={navbarOpen} onClose={CloseNavbar}>
                <Sidebar>
                    <Link to='/' onClick={CloseNavbar}>
                        <img src={LogoMark} alt='AGM Logo' className='logo-mark' />
                    </Link>
                    <div className='nav-links'>
                        <Link to='/about' onClick={CloseNavbar}>
                            About
                        </Link>
                        <Link to='/branding' onClick={CloseNavbar}>
                            Branding
                        </Link>
                        <Link to='/contact' onClick={CloseNavbar}>
                            Clients
                        </Link>
                        <Link to='/contact' onClick={CloseNavbar}>
                            Contact
                        </Link>
                    </div>
                    <div className='social-links'>
                        <a href='#'>
                            <img src={Instagram} alt='' />
                        </a>
                        <a href='#'>
                            <img src={Twitter} alt='' />
                        </a>
                        <a href='#'>
                            <img src={LinkedIn} alt='' />
                        </a>
                    </div>
                </Sidebar>
            </Drawer>
        </Component>
    );
};
const Component = styled.div`
    z-index: 1000;
    position: fixed;
    width: 100%;
    padding: 32px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
        cursor: pointer;
    }
    .logo {
        width: 98px;
        height: auto;
    }
    @media (min-width: 768px) {
        display: none;
    }
`;

const Sidebar = styled.div`
    padding: 32px 16px 64px 16px;
    height: 100%;
    width: 50vw;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.white};
    .logo-mark {
        width: 56px;
        margin-bottom: 56px;
    }
    .nav-links {
        display: grid;
        grid-row-gap: 32px;
        a {
            color: ${Colors.black};
            font-weight: 400;
        }
    }
    .social-links {
        margin-top: auto;
        img {
            margin-right: 24px;
        }
    }
`;
export default withRouter(MobileNavbar);
