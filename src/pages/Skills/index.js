import React from 'react'
import styled from 'styled-components'
import Skill from '../../components/Skill';
import IconNodejs from '../../components/icons/nodejs';
import IconHtml5 from '../../components/icons/html5';
import IconJavascript from '../../components/icons/javascript';
import IconCss from '../../components/icons/css';
import IconC from '../../components/icons/c';
import IconReact from '../../components/icons/react';
import IconMongoDB from '../../components/icons/mongoDB';
import IconExpress from '../../components/icons/express';
import IconNextJS from '../../components/icons/nextjs';
import IconJava from '../../components/icons/java';
import IconPython from '../../components/icons/python';
import IconMySql from '../../components/icons/mysql';
import IconPostegreSql from '../../components/icons/postegresql';

const StyledSkills = styled.section`
  /* background-color: blue; */
  min-height: 100vh;
  padding: 100px 0px;
  h1{
    font-size: 30px;
    white-space: nowrap;
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: 700px){
      /* flex-direction: column; */
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
        <Skill name={"Node.js"} icon={<IconNodejs />}/>
        <Skill name={"React"} icon={<IconReact />}/>
        <Skill name={"Html"} icon={<IconHtml5 />}/>
        <Skill name={"CSS"} icon={<IconCss />}/>
        <Skill name={"Javascript"} icon={<IconJavascript />}/>
        <Skill name={"MongoDB"} icon={<IconMongoDB />}/>
        <Skill name={"Express"} icon={<IconExpress />}/>
        <Skill name={"Next"} icon={<IconNextJS />}/>
        <Skill name={"Java"} icon={<IconJava />}/>
        <Skill name={"Python"} icon={<IconPython />}/>
        {/* <Skill name={"C"} icon={<IconC />}/>
        <Skill name={"MySQL"} icon={<IconMySql />}/>
        <Skill name={"PostgreSQL"} icon={<IconPostegreSql />}/> */}
      </div>
    </StyledSkills>
  )
}

export default Skills