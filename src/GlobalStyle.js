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
    font-family: 'Montserrat', sans-serif;
    margin: 0 20px;
    background-color: rgb(0,143,255);
    overflow-x: hidden;
    overflow-y: scroll;

  h1 {
    font-family: 'Permanent Marker', cursive;
    text-align:center;
  }
`;