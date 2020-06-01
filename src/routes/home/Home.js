import React from "react";
import styled from "styled-components";
import HomeAccents from "./components/HomeAccents";
import Page from "../../global/Page";

import Logo from "../../assets/logo/Dark.svg";
import Colors from "../../constants/Colors";
const Home = () => {
    return (
        <Page>
            <HomeAccents />
            <Branding>
                <img src={Logo} alt='agm logo' className='logo' />
                <p className='slogan'>
                    maximising your experience <span>off</span> and on the <span>court</span>
                </p>
            </Branding>
        </Page>
    );
};

const Branding = styled.div`
    .logo {
        margin-top: 88px;
        width: 280px;
        margin-bottom: 24px;
    }
    .slogan {
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 0.2px;
        max-width: 334px;
    }
    span {
        color: ${Colors.magenta};
    }

    @media (min-width: 768px) {
        padding-left: 88px;
        .logo {
            width: 307px;
        }
        .slogan {
            font-size: 20px;
            letter-spacing: 0.25px;
            line-height: 32px;
            max-width: 446px;
        }
    }
    @media (min-width: 1024px) {
        padding-left: 123px;
        .logo {
            width: 384px;
        }
        .slogan {
            font-size: 24px;
            letter-spacing: 0.3px;
            line-height: 36px;
            max-width: 480px;
        }
    }
    @media (min-width: 1024px) {
        padding-left: 195px;
        .logo {
            width: 480px;
        }
        .slogan {
            font-size: 26px;
        }
    }
`;

export default Home;
