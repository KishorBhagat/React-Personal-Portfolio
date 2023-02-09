import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --dark-navy: #020c1b;
        --navy: #0a192f;
        /* --navy: #1d1e21; */
        --light-navy: #112240;
        /* --light-navy: #2d2f33; */
        --lightest-navy: #233554;
        --navy-shadow: rgba(2,12,27,0.7);
        --dark-slate: #495670;
        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate: #ccd6f6;
        --white: #e6f1ff;
        --green: #64ffda;
        --green-tint: rgba(100,255,218,0.1);
        --pink: #f57dff;
        --blue: #57cbff;

        --new-color: #25262a;
        --light-new-color: #2d2f33;

        --font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
        /* --font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace; */
        --font-mono: monospace;
        --font-poppins: 'Poppins', sans-serif;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: var(--font-poppins);
    }
    ::selection {
        color: var(--lightest-slate);
        background: var(--lightest-navy);
    }
    body{
        background-color: var(--navy);
        color: var(--slate);
    }
    body::-webkit-scrollbar {
        width: 7.5px;
        /* height: 7.5px; */
    }
    body::-webkit-scrollbar-track {
        background: var(--navy);
    }
    body::-webkit-scrollbar-thumb {
        background: var(--dark-slate);
        border-radius: 10px;
    }
    .blur{
        /* background-color: red; */
        backdrop-filter: blur(5px);
    }
`;

export default GlobalStyle;
