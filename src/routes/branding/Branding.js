import React, { useState } from "react";
import styled from "styled-components";
import Page from "../../global/Page";
import Colors from "../../constants/Colors";
import BrandingAccents from "./components/BrandingAccents";
import TeamAccent from "../../assets/accents/Accent.svg";
import PhilanthropyImage from "../../assets/images/philanthropy.jpeg";
import SloganSVG from "../../assets/accents/Slogan.png";
import KatLogo from "../../assets/logo/KAT Team Logo 8.PNG";

import FsLightbox from "fslightbox-react";

import img1 from "../../assets/gallery/5B12B73B-C47D-46B0-8A55-B71719695EB6-min.JPG";
import img2 from "../../assets/gallery/IMG_2820-min.jpeg";
import img3 from "../../assets/gallery/IMG_3230-min.jpeg";
import img4 from "../../assets/gallery/IMG_6324_Facetune_18-01-2018-20-39-03-min.JPG";
import img5 from "../../assets/gallery/IMG_6328_Facetune_18-01-2018-18-54-56-min.JPG";
import img6 from "../../assets/gallery/IMG_9082_Facetune_08-12-2018-17-05-28-min.jpeg";
import img7 from "../../assets/gallery/IMG_9412-min.jpeg";
import img8 from "../../assets/gallery/IMG_9420-min.jpeg";
import img9 from "../../assets/gallery/IMG_9576-min.jpeg";
import img10 from "../../assets/gallery/IMG_9598_Facetune_10-02-2019-07-07-40-min.jpeg";

const Branding = () => {
    const [toggler, setToggler] = useState({ open: false, slide: 1 });
    let Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <Page>
            <BrandingAccents />

            <AGMTeam>
                <p className='heading'>Off The Court</p>
                <p className='description'>
                    AGM is disrupting the Sports industry through its branding and un-parallel marketing initiatives.  AGM connects our athletes to a
                    global demographic creating endless opportunities and a marketable brand.  We work as a team to provide the best off the court
                    opportunities.
                </p>
                <img src={TeamAccent} />
            </AGMTeam>

            <Philanthropy>
                <div className='img'>
                    <img src={PhilanthropyImage} alt='Charity Event' />
                    <div className='img-accent'></div>
                </div>
                <p className='heading'>Philanthropy</p>
                <p className='description'>
                    At AGM our team thrives to “do well and do good.” Our team has created partnerships and countless community initiatives for our
                    clients to give back through their own foundations. AGM works with families and athletes to continue to serve underserved
                    communities.
                </p>
                {/* <button>Learn more</button> */}
            </Philanthropy>

            <Slogan>
                <img className='mantra' src={SloganSVG} />
                <p className='description'>
                    Our team has negotiated contracts on behalf of our clients with NBA Teams as well as International Teams.
                </p>
                <img className='kat-logo' src={KatLogo} />
            </Slogan>

            <OffCourtWork>
                <div className='blurb'>
                    <p className='heading'>Branding</p>
                    <p className='description'>
                        We create opportunities for our athletes through sponsorships and endorsement opportunities, while also working meticulously
                        to protect their brand.
                    </p>
                </div>
                <div className='blurb'>
                    <p className='heading'>Empowering our Athletes</p>
                    <p className='description'>
                        AGM Sports creates opportunities for our clients beyond the court.  We leverage their brand and advocate on their behalf. We
                        connect our athletes to a global demographic, which create endless business opportunities and a soaring brand.
                    </p>
                </div>
                <div className='blurb'>
                    <p className='heading'>Giving back to the community</p>
                    <p className='description'>
                        AGM is instrumental in working with our athletes and their families to highlight initiatives in their communities. Our
                        athletes are passionate about education and we create the non-profit that fits their initiative and educate them on building a
                        proper board and well-funded foundation. AGM has helped athletes such as Karl-Anthony Towns of the Minnesota Timberwolves with{" "}
                        <a href='https://www.katteam.org/' target='blank'>
                            KAT Team
                        </a>{" "}
                        and Hassan Whiteside of the Portland Trail Blazers with Nassan’s Place.
                    </p>
                </div>
                <div className='blurb'>
                    <p className='heading'>NBA Draft Preparation</p>
                    <p className='description'>
                        AGM Sports creates opportunities for our clients beyond the court.  We leverage their brand and advocate on their behalf. We
                        AGM provides individually customized training programs to improve each player’s strength through drills that stimulate
                        pre-draft workouts.
                    </p>
                </div>
                <div className='blurb'>
                    <p className='heading'>Contract Negotiations</p>
                    <p className='description'>
                        AGM is unparalleled in its ability to work with domestic and international teams negotiating the best deals for our athletes.
                        Our agents are NCAA certified, NBPA certified, WNBA certified, FIBA certified attorneys who handle multi-million dollar
                        corporate transactions.
                    </p>
                </div>
            </OffCourtWork>

            <Gallery>
                <p className='heading'>Gallery</p>
                <div className='image-grid'>
                    {Images.map((i, index) => {
                        return <Image img={i} onClick={() => setToggler({ open: !toggler.open, slide: index + 1 })} />;
                    })}
                </div>
            </Gallery>
            <FsLightbox toggler={toggler.open} slide={toggler.slide} sources={Images} />
        </Page>
    );
};

const AGMTeam = styled.div`
    display: grid;
    margin-top: 120px;
    margin-bottom: 80px;
    max-width: 1200px;
    grid-template-areas:
        "heading"
        "description"
        "accent";
    .heading {
        grid-area: heading;
        font-weight: 200;
        font-size: 24px;
        margin-bottom: 32px;
        text-transform: uppercase;
    }
    .description {
        grid-area: description;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 80px;
    }
    img {
        grid-area: accent;
        justify-self: end;
        margin-right: -200px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 6fr 4fr;
        grid-template-areas:
            "heading heading"
            "description accent";
        .heading {
            font-size: 48px;
            letter-spacing: 0;
            line-height: 32px;
        }
        .description {
            font-size: 18px;
            line-height: 38px;
        }
    }
    @media (min-width: 1200px) {
        margin: auto;
        margin-top: 200px;
        img {
            margin-right: 0;
        }
    }
`;
const Philanthropy = styled.div`
    max-width: 1200px;
    margin: auto;
    margin-bottom: 120px;
    display: grid;
    grid-template-areas:
        "img"
        "heading"
        "description"
        "button";
    .img {
        grid-area: img;
        position: relative;
        margin-bottom: 32px;
        align-self: flex-start;
        img {
            width: 287px;
            height: auto;
        }
        .img-accent {
            position: absolute;
            z-index: -1;
            height: 100%;
            width: 287px;
            background-color: ${Colors.magenta};
            left: 10px;
            top: 5px;
        }
    }
    .heading {
        grid-area: heading;
        font-weight: 200;
        font-size: 24px;
        margin-bottom: 24px;
        text-transform: uppercase;
    }
    .description {
        grid-area: description;
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 40px;
    }
    button {
        grid-area: button;
        justify-self: end;
        padding: 12px 50px;
        text-transform: uppercase;
        font-size: 16px;
        border: none;
        border-right: 1px solid ${Colors.magenta};
        border-bottom: 1px solid ${Colors.magenta};
        background-color: white;
        outline: none;
    }
    @media (min-width: 1024px) {
        grid-template-areas:
            ". heading"
            "img description"
            ". button";
        grid-column-gap: 80px;
        .heading {
            font-size: 48px;
            text-align: right;
        }
        .description {
            font-size: 18px;
            line-height: 38px;
        }
    }
    @media (min-width: 1200px) {
        .img {
            img {
                width: 410px;
            }
            .img-accent {
                width: 410px;
            }
        }
    }
`;
const Slogan = styled.div`
    display: grid;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 56px;
    grid-template-columns: 1fr min-content;
    grid-template-areas:
        "mantra kat"
        "description description";
    .description {
        grid-area: description;
        margin-top: 24px;
        font-size: 16px;
        font-weight: 300;
    }
    .mantra {
        grid-area: mantra;
        width: 100%;
        max-width: 295px;
    }
    .kat-logo {
        grid-area: kat;
        width: 56px;
        justify-self: right;
    }
    @media (min-width: 556px) {
        grid-column-gap: 40px;
        .mantra,
        .description {
            max-width: 460px;
        }
        .kat-logo {
            width: 80px;
        }
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr min-content;
        justify-content: space-between;
        grid-column-gap: 80px;
        grid-template-areas:
            "mantra kat"
            "description kat";
        margin-bottom: 80px;
        .kat-logo {
            width: 120px;
        }
    }
    @media (min-width: 1024px) {
        margin-bottom: 80px;
        .description {
            padding-top: 40px;
            font-size: 18px;
            font-weight: 300;
            line-height: 32px;
        }
        .mantra,
        .description {
            max-width: 638px;
        }
        .kat-logo {
            width: 132px;
        }
    }
    @media (min-width: 1200px) {
        margin-bottom: 120px;
        .mantra {
            width: 664px;
        }
        .kat-logo {
            width: 170px;
        }
    }
`;

const OffCourtWork = styled.div`
    max-width: 1200px;
    margin: auto;
    display: grid;
    grid-row-gap: 40px;
    margin-bottom: 80px;
    .blurb {
        .heading {
            font-size: 16px;

            margin-bottom: 24px;
            font-weight: 500;
        }
        .description {
            font-weight: 300;
            font-size: 14px;
            line-height: 24px;
            a {
                font-weight: 600;
            }
        }
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, auto);
        justify-items: center;
        justify-content: space-between;
        grid-column-gap: 56px;

        .blurb {
            /* max-width: 262px; */
        }
    }
    @media (min-width: 1024px) {
        margin-bottom: 120px;
        .blurb {
            /* max-width: 294px; */
        }
    }
`;

const Gallery = styled.div`
    max-width: 1200px;
    margin: auto;
    margin-bottom: 80px;
    touch-action: manipulation;

    .heading {
        margin-bottom: 40px;
        font-size: 32px;
        font-weight: 300;
    }
    .image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;
    }
    @media (min-width: 768px) {
        margin-bottom: 120px;
        .image-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;

const Image = styled.div`
    cursor: pointer;
    height: 100%;
    padding-top: 100%;
    background-color: ${Colors.lightGrey};
    background-image: url(${({ img }) => img});
    background-size: cover;
    background-position: center;
    position: relative;
    img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
    }
`;
export default Branding;
