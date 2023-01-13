import React from 'react'
import styled from 'styled-components'
import About from '../../pages/About.js/index.js'
import Contact from '../../pages/Contact/index.js'
import Hero from '../../pages/Hero.js'
import Projects from '../../pages/Projects/index.js'
import Skills from '../../pages/Skills/index.js'


const StyledMain = styled.main`
    padding: 0 150px;
    color: var(--slate);
    
    @media (400px <= width < 700px){
      padding: 0 50px;
    }
    @media (width < 400px){
      padding: 0 25px;
    }
`;
const Main = () => {
  return (
    <StyledMain>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </StyledMain>
  )
}

export default Main