import React from 'react'
import styled from 'styled-components'
import IconGitHub from '../icons/github';
import IconLinkedin from '../icons/linkedin';
import IconFacebook from '../icons/facebook';
import IconInstagram from '../icons/instagram'


const StyledFooter = styled.footer`
    background-color: inherit;
    color: var(--slate);
    height: auto;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer{
      font-family: var(--font-mono);
      font-size: 16px;
      @media (max-width: 700px) {
        display: none;
      }
    }
    .responsiveFooter{
      font-family: var(--font-mono);
      font-size: 16px;
      .social-icons{
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-bottom: 20px;
        a{
          svg{
            stroke: var(--slate);
            &:hover{
              stroke: var(--green); 
            }
          }
        }
      }
      p{
        margin-bottom: 20px;
      }
      @media (min-width: 700px) {
        display: none;
      }
    }
`;
const Footer = () => {
  return (
    <StyledFooter>
        <div className='footer'>
          © 2023 copyright all rights reserved
        </div>
        <div className='responsiveFooter'>
          <div className="social-icons">
            <a href="https://github.com/KishorBhagat" rel="noreferrer" target="_blank" title='Github'><IconGitHub /></a>
            <a href="https://www.linkedin.com/in/kishor-bhagat-10b3aa22b" rel="noreferrer" target="_blank" title='LinkedIn'><IconLinkedin /></a>
            <a href="https://www.instagram.com/kishorbhagat663/" rel="noreferrer" target="_blank" title='Instagram'><IconInstagram /></a>
            <a href="https://www.facebook.com/kishore.bhagat.923" rel="noreferrer" target="_blank" title='Facebook'><IconFacebook /></a>
          </div>
          <p>© 2023 copyright all rights reserved</p>
        </div>
    </StyledFooter>
  )
}

export default Footer