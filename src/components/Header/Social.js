import React from 'react'
import styled from 'styled-components';
import IconFacebook from '../icons/facebook';
import IconGitHub from '../icons/github';
import IconLinkedin from '../icons/linkedin';

const StyledSocialLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64FFDA;
    height: inherit;
        transform: translateY(5px);

    li{
        list-style: none;
        margin-left: 20px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    svg{
        color: var(--green);
        transition: all 0.2s;
        &:hover{
            transform: scale(1.2);
        }
    }
    @media (max-width: 700px){
        display: none;
    }
`;

const Social = () => {
  return (
    <>
        <StyledSocialLinks className='social'>
            <li><a href="https://github.com/KishorBhagat" rel="noreferrer" target="_blank" title='Github'><IconGitHub /></a></li>
            <li><a href="https://www.linkedin.com/in/kishor-bhagat-10b3aa22b" rel="noreferrer" target="_blank" title='LinkedIn'><IconLinkedin /></a></li>
            <li><a href="https://www.facebook.com/kishore.bhagat.923" rel="noreferrer" target="_blank" title='Facebook'><IconFacebook /></a></li>
        </StyledSocialLinks>
    </>
  )
}

export default Social