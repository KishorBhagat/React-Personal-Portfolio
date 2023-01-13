import React from 'react'
import IconFacebook from '../icons/facebook'
import IconGitHub from '../icons/github'
import IconLinkedin from '../icons/linkedin'
import styled from 'styled-components'
import IconInstagram from '../icons/instagram'
import IconTwitter from '../icons/twitter'


const StyledSocialLinks = styled.ul`
    position: fixed;
    bottom: 0;
    left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--green);
    height: inherit;

    li{
        list-style: none;
        margin: 10px 0px;
        transition: all 0.3s;
        color: var(--light-slate);
        &:hover{
            transform: translateY(-5px);
            color: var(--green);
        }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    .line{
        height: 90px;
        width: 1.6px;
        margin-top: 10px;
        margin-bottom: 0;
        background-color: var(--slate);
    }
    @media (width < 700px){
        display: none;
    }
`;
const SocialBox = () => {
  return (
    <>
        <StyledSocialLinks className='socialBox'>
            <li><a href="https://github.com/KishorBhagat" rel="noreferrer" target="_blank" title='Github'><IconGitHub /></a></li>
            <li><a href="https://www.instagram.com/kishorbhagat663/" rel="noreferrer" target="_blank" title='Instagram'><IconInstagram /></a></li>
            <li><a href="https://twitter.com/KishorB71957885?t=vzOZOg4HhSA0zcD7EC5LbA&s=09" rel="noreferrer" target="_blank" title='Twitter'><IconTwitter/></a></li>
            <li><a href="https://www.linkedin.com/in/kishor-bhagat-10b3aa22b" rel="noreferrer" target="_blank" title='LinkedIn'><IconLinkedin /></a></li>
            <li><a href="https://www.facebook.com/kishore.bhagat.923" rel="noreferrer" target="_blank" title='Facebook'><IconFacebook /></a></li>
            <div  className='line'></div>
        </StyledSocialLinks>
    </>
  )
}

export default SocialBox