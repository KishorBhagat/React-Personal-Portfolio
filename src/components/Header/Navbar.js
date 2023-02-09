import React from 'react'
import { Link } from 'react-scroll';
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
                cursor: pointer;
                &:hover{
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

    @media (max-width: 700px){
        display: none;
    }
`;

const Navbar = () => {
    return (
        <StyledWrapper className={`menu`}>
            <ul>
                <li><Link activeClass='active' spy to="home"><span></span>Home</Link></li>
                <li><Link activeClass='active' spy to="about"><span></span>About</Link></li>
                <li><Link activeClass='active' spy to="skills"><span></span>Skills</Link></li>
                <li><Link activeClass='active' spy to="projects"><span></span>Projects</Link></li>
                <li><Link activeClass='active' spy to="contact"><span></span>Contact</Link></li>
            </ul>
        </StyledWrapper>
    )
}

export default Navbar