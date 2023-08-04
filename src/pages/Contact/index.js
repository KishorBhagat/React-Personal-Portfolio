import React from 'react'
import styled from 'styled-components'
import ContactForm from '../../components/ContactForm';
import IconPhone from '../../components/icons/phone';
import IconEnvelop from '../../components/icons/envelop';
import IconLocation from '../../components/icons/location';

const StyledContact = styled.section`
  /* background-color: green; */
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
  .inner{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 465px;
    .note{
      width: calc(50%);
      height: 60vh;
      display: flex;
      align-items: center;
      position: relative;
      .box{
        height: fit-content;
        width: 100%;
        background-color: var(--light-navy);
        padding: 40px 30px;
        border-radius: 4px;
        position: absolute;
        right: calc(0%);
        z-index: 1;
        h3{
          font-family: var(--font-mono);
          font-size: 16px;
          color: var(--green);
          margin-bottom: 20px;
        }
        span{
          font-family: var(--font-mono);
          font-size: 16px;
          color: var(--green);
          margin-top: 20px;
          display: block;
        }
        .contact-details{
          color: var(--light-slate);
          font-size: 14px;
          display: flex;
          flex-direction: column;
          span{
            color: var(--light-slate);
            display: flex;
            align-items: center;
            font-size: 14px;
            svg{
              stroke: var(--light-slate);
              margin-right: 15px;
            }
            a{
              font-size: 14px;
              color: inherit;
              text-decoration: none;
            }
          }
        }
      }
    }
    .contact{
      display: flex;
      align-items: center;
      position: relative;
      width: calc(50%);
      height: 60vh;
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
        width: 44px;
      }
    }
    .inner{
      flex-direction: column;
      gap: 60px;
      height: fit-content;
      .note{
        align-items: start;
        width: 100%;
        height: fit-content;
        position: static;
      .box{
          position: static;
          padding: 0;
          background-color: transparent;
        }
      }
      .contact{
        width: 100%;
        height: fit-content;
        position: static;
        margin-bottom: 80px;
      }
    }
  }
`;
const Contact = () => {
  return (
    <StyledContact id='contact'>
      <div className="heading">
        <div className='left-divider'></div><h1>Get In <span>Touch</span></h1><div className="right-divider"></div>
      </div>
      <div className="inner">
        <div className="note">
          <div className="box">
            <h3>Hey!</h3>
            <p>
              If you are interested in collaborating or wish to get in touch, please don't hesitate to reach out to me. I would be delighted to explore potential projects or discuss any ideas you may have.
            </p>
            <span>Lets Connect!</span>
            <div className='contact-details'>
              <span><IconEnvelop /> <a href='mailto:kishorebhagat663@gmail.com' target='_blank' rel="noreferrer">kishorebhagat663@gmail.com</a></span>
              <span><IconPhone /> <a href='tel:+91 8658134190'>+91 8658134190</a></span>
              <span><IconLocation /> Burla, Odisha, India</span>
            </div>
          </div>
        </div>
        <div className='contact'>
          <ContactForm />
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact