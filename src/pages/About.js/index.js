import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.section`
  /* background-color: green; */
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

  .inner{
    display: flex;
    /* align-items: center; */
    justify-content: space-around;
    flex-grow: 1;
    flex-shrink: 1;
    .aboutPic {
      img{
        height: 350px;
        width: 350px;
        flex-basis: 40%;
        border-radius: 2px;
        box-shadow: rgba(100, 255, 218, 0.55) 0 0 25px;
      }
    }  
    .aboutText{
      flex-basis: 60%;
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
      .aboutPic{
        display: flex;
        justify-content: center;
        margin-top: 50px;
        img{
          box-shadow: rgba(100, 255, 218, 0.55) 0 0 25px;
          height: 250px;
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
          </p>
        </div>
        
      </div>
    </StyledAbout>
  )
}

export default About