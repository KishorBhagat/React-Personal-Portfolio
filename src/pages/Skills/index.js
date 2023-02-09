import React from 'react'
import styled from 'styled-components'
import Skill from '../../components/Skill';

const StyledSkills = styled.section`
  /* background-color: blue; */
  min-height: 100vh;
  padding: 100px 0px;
  h1{
    font-size: 30px;
    /* font-weight: large; */
    color: var(--lightest-slate);
    span{
      color: var(--blue);
    }
  }
  .heading{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    /* font-family: var(--font-sans); */
    .left-divider, .right-divider{
      width: 300px;
      height: 1px;
      margin: 20px;
      background-color: var(--lightest-navy);
    }
  }

  @media (max-width: 700px) {
    /* padding: 0; */
    padding: 50px 0 0 0;
    h1{
      font-size: 22px;
    }
    .heading {
      .left-divider, .right-divider{
        width: 50px;
      }
    }
  }

  .technologies{
    display: flex;
    justify-content: space-around;
    /* flex-grow: 1;
    flex-shrink: 1; */
    /* .col-1{
      padding: 0 20px;
      background-color: var(--light-navy);
      border-radius: 4px;
      box-shadow: 0 10px 30px -15px var(--navy-shadow);
    }
    .col-2{
      padding: 0 20px;
      background-color: var(--light-navy);
      border-radius: 4px;
      box-shadow: 0 10px 30px -15px var(--navy-shadow);
    } */
    @media (max-width: 700px){
      flex-direction: column;
    }
  }
`;
const Skills = () => {
  return (
    <StyledSkills id='skills'>
      <div className="heading">
        <div className='left-divider'></div><h1><span>My</span> Skills</h1><div className="right-divider"></div>
      </div>
      <div className="technologies">
        <div className="col-1">
          <Skill name={"Javascript"} progress={70}/>
          <Skill name={"HTML"} progress={80}/>
          <Skill name={"CSS"} progress={60}/>
          <Skill name={"React.js"} progress={50}/>
          <Skill name={"Node.js"} progress={50}/>
        </div>
        <div className="col-2">
          <Skill name={"Express.js"} progress={50}/>
          <Skill name={"MongoDB"} progress={30}/>
          <Skill name={"C/C++"} progress={80}/>
          <Skill name={"Java"} progress={60}/>
          <Skill name={"Python"} progress={30}/>
        </div>      
      </div>
    </StyledSkills>
  )
}

export default Skills