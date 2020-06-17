import React, { useEffect } from "react";
import styled from "styled-components";
import Colors from "../../../constants/Colors";
import { Timeline } from "react-twitter-widgets";
import Axios from "axios";

const TwitterFeed = () => {
    useEffect(() => {
        Axios.get("https://api.twitter.com/1.1/statuses/user_timeline.json?kelvin623=twitterapi&count=2")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Component>
            <TwitterLink>
                <i className='fab fa-twitter' />
                <a href='http://twitter.com' target='blank'>
                    Follow us on twitter
                </a>
            </TwitterLink>

            <Feed>
                <div className='post'>
                    <p className='handle'>
                        AGM Management <span>@AGM</span>
                    </p>
                    <p className='date'>Apr 6th</p>
                    <div className='post-content'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquam culpa facere assumenda rerum adipisci expedita
                        labore at et eligendi!
                    </div>
                </div>
                <div className='post'>
                    <p className='handle'>
                        AGM Management <span>@AGM</span>
                    </p>
                    <p className='date'>Apr 6th</p>
                    <div className='post-content'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquam culpa facere assumenda rerum adipisci expedita
                        labore at et eligendi!
                    </div>
                </div>
                <div className='post'>
                    <p className='handle'>
                        AGM Management <span>@AGM</span>
                    </p>
                    <p className='date'>Apr 6th</p>
                    <div className='post-content'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia aliquam culpa facere assumenda rerum adipisci expedita
                        labore at et eligendi!
                    </div>
                </div>
            </Feed>
        </Component>
    );
};
const Component = styled.div`
    margin-left: -16px;
    margin-right: -16px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.black};
    padding: 0 16px 80px 16px;
`;

const TwitterLink = styled.div`
    margin-left: auto;
    margin-right: -16px;
    margin-bottom: 104px;
    background-color: ${Colors.magenta};
    color: ${Colors.white};
    max-width: 252px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
        margin-right: 11px;
        font-size: 18px;
    }
    a {
        color: ${Colors.white};
    }
`;

const Feed = styled.div`
    display: grid;
    grid-row-gap: 64px;
    justify-items: center;
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        .post {
            max-width: 343px;
        }
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        .post {
            max-width: 343px;
        }
    }
    .post {
        color: ${Colors.white};
        display: grid;
        grid-template-areas:
            "handle date"
            "post-content post-content";
        .handle {
            grid-area: handle;
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 16px;
            span {
                margin-left: 8px;
                font-size: 14px;
                font-weight: 300;
            }
        }
        .date {
            grid-area: date;
            justify-self: right;
            font-size: 14px;
            font-weight: 300;
        }
        .post-content {
            grid-area: post-content;
            font-weight: 300;
            font-size: 14px;
            line-height: 28px;
        }
    }
`;
export default TwitterFeed;
