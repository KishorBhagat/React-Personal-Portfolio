import React from 'react'
import styled from 'styled-components'

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
            width: fit-content;
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
  return (
    <StyledContactForm>
        <h1>Contact Me!</h1>
        <form action="">
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="email" name="email" placeholder="Your Email"/>
            <textarea name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </StyledContactForm>
  )
}

export default ContactForm