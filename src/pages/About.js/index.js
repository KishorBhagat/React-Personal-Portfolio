import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.section`
  /* background-color: green; */
  min-height: 100vh;
  padding: 100px 40px;
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

  .inner{
    display: flex;
    justify-content: center;
    gap: 70px;
    flex-grow: 1;
    flex-shrink: 1;
    .aboutPic {
      /* background-color: red; */
      flex-basis: 30%;
      img{
        /* height: 350px; */
        /* width: 350px; */
        width: 100%;
        aspect-ratio: 1;
        border-radius: 4px;
        box-shadow: rgba(100, 255, 218, 0.55) 0 0 25px;
      }
    }  
    .aboutText{
      /* background-color: green; */
      flex-basis: 70%;
      flex-grow: 1;
    }
  }

  @media (min-width: 700px) and (max-width: 1200px) {
    padding: 100px 0px;
    /* .inner{
      gap: 50px;
      .aboutPic{
        img{
          height: 300px;
        }
      }
      .aboutText{

      }
    } */
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    padding: 100px 0px;
    /* .inner{
      gap: 50px;
      .aboutPic{
        img{
          height: 300px;
        }
      }
      .aboutText{

      }
    } */
  }
  @media (min-width: 700px) and (max-width: 900px) {
    /* padding: 100px 0px; */
    .inner{
      gap: 50px;
      .aboutPic{
        flex-basis: 40%;
        /* img{
          height: 300px;
        } */
      }
      .aboutText{
        flex-basis: 60%;
      }
    }
  }
  
  @media (max-width: 700px) {
    padding: 80px 0 0 0;
    h1{
      font-size: 22px;
    }
    .heading {
      /* margin-top: 50px; */
      .left-divider, .right-divider{
        width: 50px;
      }
    }
    .inner{
      flex-direction: column-reverse;
      gap: 0;
      .aboutPic{
        display: flex;
        justify-content: center;
        margin-top: 50px;
        img{
          box-shadow: rgba(100, 255, 218, 0.55) 0 0 25px;
          /* height: 250px; */
          width: 250px;
        }
      }
    }
  }
`;
const About = () => {
  return (
    <StyledAbout id='about'>
      <div className="heading">
        <div className='left-divider'></div><h1>About <span>Me</span></h1><div className="right-divider"></div>
      </div>
      <div className="inner">
        <div className="aboutPic">
          <img src="/images/me2.jpg" alt="" />
        </div>
        <div className="aboutText">
          <p>
            Hello! My name is Kishor Bhagat, a Computer Science and Engineering undergraduate from Veer Surendra Sai University of technology, Burla. A coding enthusiast and a passionate learner.
          </p><br />
          <p>
            I started learning to code in high school, and my interest in web development began to flourish as soon as I entered college. Eager to enhance my skills, I joined the coding club of my college, immersing myself in various projects. Among these, I contributed to creating websites for college techno-cultural fests, developed interfaces for coding contests, and collaboratively worked in the club's own projects.
          </p><br />
          <p>
            Currently, my primary focus is on building a diverse portfolio of projects that showcase my abilities and reflect my growth as a developer. I am continuously trying to seek new opportunities that challenge me and help me expand my knowledge and expertise in the field.
          </p>
        </div>

      </div>
    </StyledAbout>
  )
}

export default About