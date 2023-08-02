import React from 'react'
import styled from 'styled-components'


const StyledLogo = styled.div`
    color: var(--green);
    font-size: 20px;
    /* padding: 0 4px; */
    /* border: 2px solid var(--green); */
    font-weight: 600;
    font-size: 26px;
    @media (max-width: 700px) {
      font-size: 30px;
    }
`;

const Logo = () => {
  return (
    <a href="/" style={{"textDecoration": "none"}}>
        <StyledLogo>
            Kishor.
        </StyledLogo>
    </a>
    
  )
}

export default Logo