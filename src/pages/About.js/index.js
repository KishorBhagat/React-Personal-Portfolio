import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.section`
  /* background-color: green; */
  min-height: 100vh;
`;
const About = () => {
  return (
    <StyledAbout id='about'>
        <h1>About</h1>
    </StyledAbout>
  )
}

export default About