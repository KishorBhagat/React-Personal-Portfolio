import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button';


const StyledHero = styled.section`
  
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  .heroText{
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 4.2em;
    flex-basis: 70%;

    h4{
      display: inline;
      color: var(--navy);
      background-color: var(--green);
      padding: 5px 15px;
      border-radius: 16px 16px 16px  0px;
      font-family: var(--font-mono);
      font-size: large;


      background-color: transparent;
      border: 1px solid var(--green);
      color: var(--green);
      font-weight: 100;
    }
    h2{
      color: var(--lightest-slate);
      font-size: 70px;
      font-weight: 600;
    }
    h3{
      font-size: 50px;
      font-weight: 600;
      span{
        color: var(--blue);
        /* color: #3aafc9; */
      }
    }
    p{
      margin: 20px 0px 0px;
      line-height: normal;
      width: 500px;
    }
  }
  .profileImg{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      height: 420px;
      border-radius: 50%;
    }
  } 

  @media (max-width: 700px){
    flex-direction: column-reverse;
    /* align-items: center; */
    justify-content: center;
    .heroText{
      /* padding-top: 100px; */
      line-height: 3em;
      /* min-height: 100vh; */
      h2{
        font-size: 40px;
      }
      h3{
        font-size: 28px;
        line-height: 1.2em;
      }
      p{
        width: 100%;
        margin: 35px 0px 0px;
      }
    }
    .profileImg {
      /* display: none; */
      margin: 30px 0;
      img{
        height: 320px;
        box-shadow: rgba(100, 255, 218, 0.55) 0 0 25px;

      }
    }
  }
  @media (max-width: 400px){
    .profileImg {
      img{
        height: 260px;
      }
    }
  }
`;
const Hero = () => {
  return (
    <StyledHero id='home'>
      <div className="heroText">
          <div><h4>Hello I'm</h4></div>
          <h2 className='heading'>Kishor Bhagat.</h2>
          <h3 className='heading'>A Student and</h3>
          <h3>a <span>Full Stack</span> Web Developer.</h3>
          <p>Zelous about software engineering having a handful of knowledge on web development. Primarily, looking for internships to upskill my existing skill set and gain some industrial work experience.</p>
          <div><Button value="View Resume" link={'/SampleResume.pdf'}/></div>
      </div>
      <div className="profileImg">
        <img src='/images/me.jpg' alt="" />
      </div>
    </StyledHero>
  )
}

export default Hero