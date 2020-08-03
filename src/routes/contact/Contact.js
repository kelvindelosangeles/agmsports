import React, { useEffect } from "react";
import styled from "styled-components";
import Page from "../../global/Page";
import ContactAccents from "./components/ContactAccents";
import Colors from "../../constants/Colors";
import { useForm as formCarry } from "@formcarry/react";
import { useState } from "react";

const Contact = () => {
    const { state, submit } = formCarry({
        id: "ZezzGlB0zOmU",
    });
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const changeHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "phone":
                setPhone(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            default:
                break;
        }
    };
    const clearForms = () => {
        setEmail("");
        setName("");
        setPhone("");
    };
    useEffect(() => {
        state.submitted && clearForms();
    }, [state.submitted]);
    return (
        <Page>
            <ContactAccents />
            <FormGrid>
                <Header>
                    <p className='header'>Current or prospective clients</p>
                    <p className='sub-header'>We are always pleased to hear from you. Please feel free to contact us</p>
                </Header>

                <Form onSubmit={submit}>
                    {state.submitted && <p className='thankyou'>Thank you for contacting us, we will get back to you shortly.</p>}
                    <input name='name' placeholder='Full Name' onChange={changeHandler} value={name} required />
                    <input name='phone' placeholder='Phone' onChange={changeHandler} value={phone} required />
                    <input name='email' placeholder='Email' type='email' onChange={changeHandler} value={email} required />

                    <button type='submit'>
                        <p>Send</p>
                    </button>
                </Form>

                <ContactDetails>
                    <p>Avant Garde Management Sports</p>
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
    .thankyou {
        font-size: 16px;
        font-weight: 600;
    }
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
        padding: 12px 0;
        width: calc(100% - 70px);
        outline: none;
        background-color: ${Colors.magenta};
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        color: ${Colors.black};
        border-radius: 2px;
        :hover {
            color: ${Colors.white};
            background-color: ${Colors.black};
            transition: all 150ms ease-in-out;
        }
    }
    @media (min-width: 1200px) {
        max-width: unset;
        button {
            /* justify-self: end; */
            width: calc(100% - 156px);
            min-width: 320px;
        }
        input {
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
