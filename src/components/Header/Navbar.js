import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.nav`
    ul{
        display: flex;
        li{
            list-style: none;
            margin: 0 20px;
            a{
                text-decoration: none;
                color: var(--lightest-slate);
                font-size: 16px;
                transition: all 0.1s;
                font-family: var(--font-mono);
                &:hover{
                    color: var(--green);
                }
                span{
                    color: var(--green);
                    font-size: 14px;
                    font-family: "Consolas";
                }
            }
        }
    }

    @media (width < 700px){
        display: none;
    }
`;

const Navbar = () => {
    // console.log(props);
    return (
        <StyledWrapper className={`menu`}>
            <ul>
                <li><a href="#home"><span></span>Home</a></li>
                <li><a href="#about"><span></span>About</a></li>
                <li><a href="#skills"><span></span>Skills</a></li>
                <li><a href="#projects"><span></span>Projects</a></li>
                <li><a href="#contact"><span></span>Contact</a></li>
            </ul>
        </StyledWrapper>
    )
}

export default Navbar