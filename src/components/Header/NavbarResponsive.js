import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.nav`
    background-color: var(--light-navy);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all;
    transform: translateX(75vw);
    visibility: collapse;
    ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        li { 
            list-style: none;
            margin: 0 20px;
            padding: 20px 0;
            a{
                text-decoration: none;
                color: var(--lightest-slate);
                font-size: 16px;
                transition: all 0.1s;
                font-family: var(--font-mono);
                font-size: 20px;

                 &:hover {
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
    @media (width>700px){
        display: none;
    }
`;

const Div = styled.div`
    .showNavbar{
        visibility: visible;
        transform: translateX(0px);
    }
    .hideNavbar{
        /* transform: translateX(75vw); */
    }
`;

const NavbarResponsive = (props) => {
    return (
        <Div>
            <StyledWrapper className={`menu ${props.navVisibility ? "showNavbar" : ""}`}>
                <ul>
                    <li><a href="#home"><span></span>Home</a></li>
                    <li><a href="#about"><span></span>About</a></li>
                    <li><a href="#skills"><span></span>Skills</a></li>
                    <li><a href="#projects"><span></span>Projects</a></li>
                    <li><a href="#contact"><span></span>Contact</a></li>
                </ul>
            </StyledWrapper>
        </Div>
    )
}

export default NavbarResponsive