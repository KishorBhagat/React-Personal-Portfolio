import React from 'react'
import styled from 'styled-components'

const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin: 5px;
    transition: .3s ease;

    svg{
        fill: var(--slate);
        height: 100px;
        width: 100px;

    }
    span{
        color: var(--lightest-slate);
    }
    &:hover{
        transform: translateY(-5px);
        svg{
            fill: var(--green);
        }
        span{
            color: var(--green);
        }
    }

    @media (max-width: 700px){
        height: 100px;
        width: 100px;
    }
`;
const Skill = ({name, icon}) => {
  return (
    <StyledSkill>
        {icon}
        <span>{name}</span>
    </StyledSkill>
  )
}

export default Skill