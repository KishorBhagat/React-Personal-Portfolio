import React from 'react'
import { Link } from 'react-scroll';
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
                cursor: pointer;
                
                 &:hover {
                    color: var(--green);
                }
                span{
                    color: var(--green);
                    font-size: 14px;
                    font-family: "Consolas";
                }
            }
            .active{
                color: var(--green);
            }
        }
    }
    @media (min-width: 700px){
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
                    <li><Link activeClass='active' spy to="home"><span></span>Home</Link></li>
                    <li><Link activeClass='active' spy to="about"><span></span>About</Link></li>
                    <li><Link activeClass='active' spy to="skills"><span></span>Skills</Link></li>
                    <li><Link activeClass='active' spy to="projects"><span></span>Projects</Link></li>
                    <li><Link activeClass='active' spy to="contact"><span></span>Contact</Link></li>
                </ul>
            </StyledWrapper>
        </Div>
    )
}

export default NavbarResponsive