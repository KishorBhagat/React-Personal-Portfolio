import React from 'react'
import styled from 'styled-components'


const StyledFooter = styled.footer`
    background-color: inherit;
    color: var(--slate);
    height: auto;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    .footer{
      @media (max-width: 700px) {
        display: none;
      }
    }
    .responsiveFooter{
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
          © 2023 copyright all rights reserved
        </div>
    </StyledFooter>
  )
}

export default Footer