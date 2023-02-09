import React from 'react'
import styled from 'styled-components'

const StyledEmail = styled.ul`
    position: fixed;
    bottom: 0;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li{
        list-style: none;
        margin: 10px 0px;
    }
    a{
        text-decoration: none;
        color: var(--light-slate);    
        writing-mode: vertical-rl;
        transition: 0.3s all;
        font-size: 14px;
        font-family: var(--font-mono);
        letter-spacing: 1.3px;
        &:hover{
            transform: translateY(-5px);
            color: var(--green);
        }
    }
    .line{
        height: 90px;
        width: 1.6px;
        margin-top: 10px;
        margin-bottom: 0;
        background-color: var(--slate);
    }
    @media (max-width: 700px){
        display: none;
    }
`;
const Email = () => {
  return (
    <>
        <StyledEmail className='socialBox'>
            <li><a href="mailto:kishorebhagat663@gmail.com" rel="noreferrer" target="_blank">kishorebhagat663@gmail.com</a></li>
            <div  className='line'></div>
        </StyledEmail>
    </>
  )
}

export default Email