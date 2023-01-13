import React, { useRef, useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Social from './Social'
import styled from 'styled-components'
import IconHamburgerMenu from '../icons/menuicon'
import IconClose from '../icons/close'
import NavbarResponsive from './NavbarResponsive'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: inherit; */
    height: 100px;
    width: 100%;
    padding: 0px 50px;
    position: fixed;
    top: 0;
    z-index: 100;
    transition: all 0.3s;

    .responsiveMenu{
        display: none;
        .menuIcon{
            color: var(--green);
            position: relative;
            z-index: 1000;
            cursor: pointer;
            svg{
                height: fit-content;
            }
            /* .bi-x{
                animation-name: rotate;
                animation-duration: 0.3s;
            }
            @keyframes rotate {
                from {transform: rotate(0deg);}
                to {transform: rotate(180deg);}
            } */
        }

        @media (width < 700px){
            display: block;
        }
    }

    @media (width < 700px){
        padding: 0px 25px;
    }
`;

const Div = styled.div`
    .scroll-down{
        transform: translateY(-100px);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
    }
    .scroll-up{
        height: 70px;
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
        backdrop-filter: blur(8px);
    }
`;

const Header = () => {
    const [scrollBehavior, setScrollBehavior] = useState("");

    const [lastScroll, setLastScroll] = useState(0);
    
    const [navVisibility, setNavVisibility] = useState(false);
    // const navRef = useRef();

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if(currentScroll <= 0){
            setScrollBehavior("");
        }
        if(currentScroll > lastScroll && (scrollBehavior === "scroll-up" || scrollBehavior === "" )) {
            setScrollBehavior("scroll-down");
        }
        if(currentScroll < lastScroll && scrollBehavior !== "scroll-up") {
            setScrollBehavior("scroll-up");
        }
        if(currentScroll > lastScroll && navVisibility) {
            setNavVisibility(!navVisibility);
            document.body.style.overflow = "visible";
        }
        setLastScroll(currentScroll);
    });

    const showNavbar = () => {
        setNavVisibility(!navVisibility);
        if(!navVisibility){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow = "visible";
        }
    }
  return (
    <>
    <Div>
        <StyledHeader className={`nav ${scrollBehavior}`}>
            <Logo />
            <Navbar/> 
            <Social />
            <div className='responsiveMenu' onClick={showNavbar}>
                <div className="menuIcon">{ !navVisibility ? <IconHamburgerMenu/> : <IconClose /> }</div>                  
                <NavbarResponsive  navVisibility={navVisibility}/>
            </div>
        </StyledHeader>
    </Div>
    </>
  )
}

export default Header