import React from "react";
import styled from "styled-components";
import Page from "../../global/Page";
import AboutAccents from "./components/AboutAccents";
import Colors from "../../constants/Colors";
import image3 from "../../assets/logo/Dark.svg";

import Envelope from "../../assets/icons/animated/Envelope.js";
import TwitterFeed from "./components/TwitterFeed";
import Jennifer from "../../assets/images/profile images/Jennifer Profile.jpeg";
import Polina from "../../assets/images/profile images/polina.jpeg";
import { withRouter } from "react-router-dom";

const About = () => {
    const envelopeClickHandler = () => {
        console.log("open envelope");
    };

    return (
        <Page>
            <AboutAccents />
            <Grid>
                <Card className='card1'>
                    <Image1 image={Jennifer}>
                        <div className='accent' />
                    </Image1>
                    <div className='name'>Jennifer Jacques</div>
                    <Envelope email='Jennifer@agmsports.nyc' />
                    <div className='line' />
                    <div className='blurb'>
                        Jennifer is a certified NCAA, NBPA, WNBA, FIBA agent. Jennifer has successfully negotiated 2-Way Contracts as well as NBA
                        Contracts with the Denver Nuggets and the Philadelphia 76ers.  Jennifer also handles off the court branding and non-profit
                        initiatives on behalf of her clients. Jennifer also serves as a managing partner at{" "}
                        <a href='http://jacqueslawfirm.com/jennifer-jacques-attorney-corporate-sports-entertainment-law' target='blank'>
                            Jacques & Associates
                        </a>{" "}
                        where she specializes in sports law as well as corporate transactions.
                    </div>
                </Card>
                <Card className='card2'>
                    <Image2 image={Polina}>
                        <div className='accent' />
                    </Image2>
                    <div className='name'>Polina Manis</div>
                    <Envelope email='contact@agmsports.nyc' />
                    <div className='line' />

                    <div className='blurb'>
                        <span />
                        Polina handles Marketing and Communication matters at AGM.
                    </div>
                </Card>
                {/* <Card className='card3'>
                    <Image3 image={image3}>
                        <div className='accent' />
                    </Image3>
                    <div className='name'>Riley Parker </div>
                    <Envelope email='contact@agmsports.nyc' />
                    <div className='blurb'>Riley is an Executive Assistant at AGM.</div>
                </Card> */}
            </Grid>
            {/* <TwitterFeed /> */}
        </Page>
    );
};
const Grid = styled.div`
    display: grid;
    max-width: 1200px;
    margin: auto;
    grid-row-gap: 80px;
    margin-bottom: 120px;
    @media (min-width: 1200px) {
        grid-row-gap: 20px;
    }
    .card2 {
        justify-self: flex-end;
    }

    @media (min-width: 768px) {
        .card2 {
            margin-top: -20%;
            margin-right: 40px;
        }
        .card3 {
            margin-left: 2%;
        }
    }
    @media (min-width: 900px) {
        .card3 {
            margin-top: -10%;
        }
    }
`;
const Card = styled.div`
    display: grid;
    max-width: 343px;
    width: 100%;
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
        "image image"
        "name icon"
        "line ."
        "blurb blurb";
    .name {
        grid-area: name;
        font-size: 16px;
        align-self: flex-end;
    }
    .icon {
        grid-area: icon;
        justify-self: right;
        cursor: pointer;
        width: 32px;
    }
    .line {
        grid-area: line;
        width: 80px;
        height: 1px;
        background-color: black;
        margin-top: 12px;
    }
    .blurb {
        margin-top: 16px;
        grid-area: blurb;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
        a {
            font-weight: 500;
        }
        span {
            margin-top: -4px;
            margin-bottom: 16px;
            width: 60px;
            height: 1px;
            background-color: ${Colors.black};
        }
    }
    .image {
        grid-area: image;
    }
`;

const Image1 = styled.div`
        margin-bottom: 54px;
        position: relative;
        height: 240px;
        width: 240px;
        background-image: url("${({ image }) => image}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: -20px;
        .accent {
            height: 240px;
        width: 240px;
            border-bottom: 1px solid ${Colors.magenta};
            border-right: 1px solid ${Colors.magenta};
            position: absolute;
            right: -14px;
            bottom: -14px;
            z-index: -2;
        }
        @media(min-width: 1024px){
            height: 331px;
        width: 331px;
        .accent{
            height: 331px;
        width: 331px;

        }
        }
    
`;
const Image2 = styled.div`
        position: relative;
        height: 240px;
        width: 240px;
        background-image: url("${({ image }) => image}");
        background-size: cover;
        background-position: center;
        margin-left: 14px;
        margin-top: 14px;
        margin-bottom: 40px;
        .accent {
            height: 240px;
            width: 240px;
            background-color: ${Colors.lightGrey};
            position: absolute;
            right: 14px;
            bottom: 14px;
            z-index: -2;
        }
        @media(min-width: 1024px){
        height: 331px;
        width: 331px;
        .accent {
            height: 331px;
        width: 331px;
        }
        }
        
`;
const Image3 = styled.div`
        position: relative;
        height: 240px;
        width: 300px;
        background-image: url("${({ image }) => image}");
        background-size: cover;
        background-position: center;
        margin-bottom: 54px;
        /* ====== Until theres an image for Riley  */
        background-size: contain;
        background-repeat: no-repeat;
        background-color: white;
        .accent {
            height: 240px;
            width: 300px;
        /* ====== Until theres an image for Riley  */
            /* background-color: ${Colors.black}; */
            position: absolute;
            right: -14px;
            bottom: -14px;
            z-index: -2;
        }    
        @media(min-width: 1024px){
            height: 331px;
            width: 460px;
            .accent{
                height: 331px;
               width: 460px;
            }
         }
`;

export default withRouter(About);
