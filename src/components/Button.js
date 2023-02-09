import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
  border: 1px solid var(--green);
  border-radius: 4px;
  /* border-radius: 0px 20px 20px  20px; */
  color: var(--green);
  background-color: transparent;
  font-family: var(--font-mono);
  padding: 10px 20px;
  margin-top: 40px;
  font-size: large;
  cursor: pointer;
  transition: all 0.3s;

  &:hover{
    background-color: var(--green-tint);
  }
`;
const Button = (props) => {
  return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <StyledButton>
          {props.value}
        </StyledButton>
      </a>
  )
}

export default Button