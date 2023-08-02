import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import IconSpinner from '../components/icons/spinner'

const StyledContactForm = styled.div`
    background-color: #163545;
    border-radius: 4px;
    width: calc(100% + 70px);
    padding: 40px 30px 40px 100px;
    right: 0px;
    height: fit-content;
    flex: 1;
    position: absolute;
    h1{
        margin-bottom: 20px;
        color: var(--lightest-slate);
        text-align: center;
        font-weight: 600;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        input{
            background-color: transparent;
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            border-radius: 4px;
            padding: 5px 10px;
            border: 1px solid var(--green);
            color: var(--lightest-slate);
            &:focus{
                outline: none;
            }
            &::placeholder{
                color: var(--slate);
            }
        }
        textarea{
            background-color: transparent;
            width: 100%;
            height: 160px;
            border-radius: 4px;
            padding: 5px 10px;
            border: 1px solid var(--green);
            color: var(--lightest-slate);
            resize: none;
            &:focus{
                outline: none;
            }
            &::placeholder{
                color: var(--slate);
            }
        }
        button{
            width: 80px;
            border: 1px solid var(--green);
            border-radius: 4px;
            color: var(--green);
            background-color: transparent;
            font-family: var(--font-mono);
            padding: 10px 20px;
            margin-top: 20px;
            font-size: large;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            justify-content: center;
            &:hover{
              background-color: var(--green-tint);
            }
        }
    }

    @media (max-width: 700px) {
        background-color: transparent;
        width: 100%;
        padding: 0px;
        position: static;
    }
`;

const ContactForm = () => {

    const initialFormData = {
        name: "",
        email: "",
        message: ""
    }

    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const EMAILJS_SERVICE_ID = "service_7wi1kq6";
    const EMAILJS_TEMPLATE_ID = "template_d81cqjo";
    const EMAILJS_PUBLIC_KEY = "41o-HMEFC3EPZ5ON4";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, e.target, EMAILJS_PUBLIC_KEY);
            console.log('Email sent successfully!', result.text);
            setFormData(initialFormData);
            setLoading(false);
        } catch (error) {
            console.error('Error sending email:', error);
            // alert('Failed to send email. Please try again later.');
        }
    }
    return (
        <StyledContactForm>
            <h1>Contact Me!</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    onChange={handleChange}
                    value={formData.message}
                    required
                />
                {
                    loading ? <button type='button'><IconSpinner /></button> : <button type="submit">Send</button>
                }
            </form>
        </StyledContactForm>
    )
}

export default ContactForm