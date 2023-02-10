import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    margin: 0 20px;
    background-color: rgba(0,140,150,1);
    background-image: linear-gradient(41deg, rgba(0,92,96,1) 0%, rgba(0,140,150,1) 35%, rgba(0,255,132,1) 100%);
    background-size: 300%;
    animation: animatedGradient 20s ease infinite;

    @keyframes animatedGradient { 
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  h1 {
    font-family: 'Permanent Marker', cursive;
    text-align:center;
  }
`;
