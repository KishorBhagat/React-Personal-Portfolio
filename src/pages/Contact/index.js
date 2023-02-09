import React from 'react'
import styled from 'styled-components'

const StyledContact = styled.section`
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

  @media (max-width: 700px) {
    /* padding: 0; */
    padding: 80px 0 0 0;

    h1{
      font-size: 22px;
    }
    .heading {
      .left-divider, .right-divider{
        width: 50px;
      }
    }
  }
`;
const Contact = () => {
  return (
    <StyledContact id='contact'>
      <div className="heading">
        <div className='left-divider'></div><h1>Contact <span>Me</span></h1><div className="right-divider"></div>
      </div> 
    </StyledContact>
  )
}

export default Contact