import React from 'react'
import styled from 'styled-components'
import Project from '../../components/Project';

const StyledProjects = styled.section`
  /* background-color: red; */
  min-height: 100vh;
  padding: 100px 0px;
  .heading{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    h1{
      font-size: 30px;
      white-space: nowrap;
      /* font-weight: large; */
      color: var(--lightest-slate);
  
      span{
        color: var(--blue);
      }
    }
    /* font-family: var(--font-sans); */
    .left-divider, .right-divider{
      width: 300px;
      height: 1px;
      margin: 20px;
      background-color: var(--lightest-navy);
    }
  }

  .inner{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    /* .project{
      background-color: yellow;
      width: 45%;
      height: fit-content;
      margin-bottom: 40px;
      position: relative;
      .image{
        width: 100%;
        height: 350px;
        border-radius: 2px;
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          transition: 0.3s all;
        }
        &::before{
          transition: 0.3s all;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 100%;
          background-color: var(--blue);
          opacity: 0.5;
        }
        &:hover:before{
          top: 0;
        }
      }
      .overlay{
        position: absolute;
        top: 0;
        width: 100%;
        height: 350px;
        background-color: var(--blue);
        opacity: 0.5;
      }
    } */
  }

  @media (max-width: 700px) {
    /* padding: 0; */
    padding: 50px 0 0 0;

    .heading {
      .left-divider, .right-divider{
        width: 48px;
      }
      h1{
        font-size: 22px;
      }
    }
  }
`;

const Projects = () => {

  const projects = [
    {
      title: "Task App",
      desc: "A simple task management app to keep track of the daily tasks in life and get the satisfation upon completion.",
      github: "",
      external: "https://task-kishorbhagat.vercel.app/",
      tech: ['React', 'Node', 'Express', 'MongoDB']
    },
    {
      title: "Blind Code",
      desc: "A web interface for the Blind Code Contest where participants will not be able to see the code they are typing.",
      github: "",
      external: "https://blind-code-2023.onrender.com/",
      tech: ['React', 'Node', 'Express', 'MongoDB']
    },
  ]

  return (
    <StyledProjects id='projects'>
      <div className="heading">
        <div className='left-divider'></div><h1><span>My </span>Projects</h1><div className="right-divider"></div>
      </div>
      <div className="inner">
        {/* <div className="project">
          <div className="image"><img src="/images/BlindCode.png" alt="" /></div>
        </div> */}
        {
          projects.map(({title, desc, github, external, tech}, idx) => {
            return <Project title={title} desc={desc} github={github} external={external} tech={tech} key={idx}/>
          })
        }
      </div>
    </StyledProjects>
  )
}

export default Projects