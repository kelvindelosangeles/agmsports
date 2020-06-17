import React from "react";
import styled from "styled-components";
import Page from "../../global/Page";
import ContactAccents from "./components/ContactAccents";
import { useForm } from "react-hook-form";
import Colors from "../../constants/Colors";

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <Page>
            <ContactAccents />
            <FormGrid>
                <Header>
                    <p className='header'>Current or prospective clients</p>
                    <p className='sub-header'>We are always pleased to hear from you. Please feel free to contact us</p>
                </Header>

                <Form onSubmit={handleSubmit(onSubmit)} action=' https://formsubmit.co/kelvin623@gmail.com ' method='POST'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input name='name' defaultValue='' placeholder='Name' ref={register({ required: true, minLength: 5 })} />
                    <input name='phone' defaultValue='' placeholder='Phone' ref={register({ required: true })} />
                    <input name='email' defaultValue='' placeholder='Email' ref={register({ required: true })} />

                    <button type='submit'>
                        <p>Send</p>
                        <div className='accent' />
                    </button>
                </Form>

                <ContactDetails>
                    <p>Jennifer Jacques-Miller | Managing Attorney </p>
                    <p>The Law Firm of Jacques & Associates</p>
                    <p>295 Madison Avenue, 12th Floor,</p>
                    <p>New York, N.Y. 10017 | </p>
                    <p>T.: +1 212.365.5625 | F: 212.378.0151</p>
                </ContactDetails>
            </FormGrid>
        </Page>
    );
};
const FormGrid = styled.div`
    max-width: 1200px;
    margin: auto;
    padding-bottom: 80px;
    display: grid;
    grid-row-gap: 40px;
    grid-template-areas:
        "header"
        "form"
        "details";
    @media (min-width: 1200px) {
        margin-top: 40px;
        grid-template-columns: 2fr 3fr;
        grid-column-gap: 80px;
        grid-row-gap: 24px;
        justify-content: start;
        grid-template-rows: max-content;

        grid-template-areas:
            "header form "
            "details form ";
    }
`;

const Header = styled.div`
    grid-area: header;
    .header {
        font-size: 20px;
        margin-bottom: 16px;
    }
    .subheader {
        font-weight: 300;
        font-size: 16px;
    }
`;
const Form = styled.form`
grid-area: form;
    display: grid;
    grid-row-gap: 64px;
    margin-bottom: 40px;
    max-width: 400px;
    input {
        padding-bottom: 14px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${Colors.black};
        font-size: 16px;
        color: ${Colors.black};
        margin-right: 72px;
        :focus {
            outline: none;
        }
        ::placeholder {
            font-weight: 300;
            font-size: 14px;
            color: #9c9c9c;
        }
    }
    button {
        position: relative;
        padding: 14px;
        outline: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        /* background-color: ${Colors.magenta}; */
        p {
            position: absolute;
            top: 12px;
            text-align: left;
            padding-left: 24px;
            color: ${Colors.black};
            z-index: 1;
            font-weight: 600;
            font-size: 18px;
        }
        .accent {
            z-index: 0;
            position: absolute;
            left: 0;
            top: 90%;
            background-color: ${Colors.magenta};
            height: 100%;
            width: 100%;
        }
    }
    @media (min-width: 1200px) {
    max-width: unset;
    button{
        justify-self: end;
    min-width: 320px;
    }
    input{
        margin-right: 156px;
    }
    }
`;
const ContactDetails = styled.div`
    align-content: flex-start;
    grid-area: details;
    font-weight: 300;
    font-size: 12px;
    display: grid;
    grid-row-gap: 12px;
`;
export default Contact;
