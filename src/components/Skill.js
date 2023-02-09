import React from 'react'
import styled from 'styled-components'

const StyledSkill = styled.div`
    margin: 30px 0;
    /* background-color: var(--light-navy);
    padding: 35px 15px;
    border-radius: 4px;
    box-shadow: 0 10px 30px -15px var(--navy-shadow); */

    h3{
        font-family: var(--font-mono);
        color: var(--lightest-slate);
        font-size: 16px;
        margin-bottom: 10px;
        /* font-weight: 400; */
    }
    .progress-bar{
        height: 6px;
        width: 500px;
        background-color: var(--lightest-navy);
        border-radius: 8px;
        .progress{
            height: 100%;
            /* width: 80%; */
            background-color: var(--green);
            border-radius: 8px 0 0 8px;
            /* animation: progress 3s linear; */
            .percent{
                background-color: var(--lightest-navy);
                border-radius: 2px;
                padding: 4px 6px;
                position: relative;
                top: -32px;
                left: calc(100% - 16px);
                font-size: 12px;
                color: var(--light-slate);
                font-family: var(--font-mono);
                width: fit-content;
                &::before{
                    content: "";
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    right: calc(50% - 2.5px);
                    top: 20px;
                    transform-origin: center;
                    transform: rotate(45deg);
                    background-color: var(--lightest-navy);
                }
            }
            /* @keyframes progress {
                from{width: 0%;}
                to{width: 100%}
            } */
        }
    }
    @media (max-width: 700px){
        margin: 0 0 30px 0;
        .progress-bar{
            width: 100%;            
        }
    }
`;
const Skill = (props) => {
  return (
    <StyledSkill>
        <h3>{props.name}</h3>
        <div className="progress-bar">
            <div className="progress" style={{width: `${props.progress}%`}}><div className="percent">{props.progress}%</div></div>
        </div>
    </StyledSkill>
  )
}

export default Skill