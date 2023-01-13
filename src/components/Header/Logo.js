import React from 'react'
import styled from 'styled-components'


const StyledLogo = styled.div`
    color: var(--green);
    font-size: 20px;
    padding: 0 4px;
    border: 2px solid var(--green);
`;

const Logo = () => {
  return (
    <a href="/" style={{"textDecoration": "none"}}>
        <StyledLogo>
            KISHOR
        </StyledLogo>
    </a>
    
  )
}

export default Logo