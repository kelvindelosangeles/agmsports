import React from "react";
import styled from "styled-components";
import Page from "../../global/Page";
import AboutAccents from "./components/AboutAccents";
import Colors from "../../constants/Colors";
import image2 from "../../assets/images/Rectangle Copy 3.png";
import image3 from "../../assets/images/Rectangle Copy 6.png";
import Envelope from "../../assets/icons/Envelope.svg";
import TwitterFeed from "./components/TwitterFeed";
import Jennifer from "../../assets/images/profile images/Jennifer Profile.jpeg";

const About = () => {
    return (
        <Page>
            <AboutAccents />
            <Grid>
                <Card className='card1'>
                    <Image1 image={Jennifer}>
                        <div className='accent' />
                    </Image1>
                    <div className='name'>Jennifer Jacques</div>
                    <img src={Envelope} alt='' className='icon' />
                    <div className='blurb'>
                        Jennifer is a certified NCAA, NBPA, WNBA, FIBA agent. Jennifer has successfully negotiated 2-Way Contracts as well as NBA
                        Contracts with the Denver Nuggets and the Philadelphia 76ers.  Jennifer also handles off the court branding and non-profit
                        initiatives on behalf of her clients.
                    </div>
                </Card>
                <Card className='card2'>
                    <Image2 image={image2}>
                        <div className='accent' />
                    </Image2>
                    <div className='name'>Riley Parker </div>
                    <img src={Envelope} alt='' className='icon' />
                    <div className='blurb'>Riley is an Executive Assistant at AGM.</div>
                </Card>
                <Card className='card3'>
                    <Image3 image={image3}>
                        <div className='accent' />
                    </Image3>
                    <div className='name'>Polina Manis</div>
                    <img src={Envelope} alt='' className='icon' />
                    <div className='blurb'>Polina handles Marketing and Communication matters at AGM.</div>
                </Card>
            </Grid>
            <TwitterFeed />
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
        "blurb blurb";
    .name {
        grid-area: name;
        margin-bottom: 16px;
        font-size: 16px;
    }
    .icon {
        grid-area: icon;
        justify-self: right;
    }
    .blurb {
        grid-area: blurb;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
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
        .accent {
            height: 240px;
            width: 300px;
            background-color: ${Colors.black};
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

export default About;
