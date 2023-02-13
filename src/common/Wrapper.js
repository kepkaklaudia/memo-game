import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  border-radius: 25px;
  padding: 10px;
  background-color: rgba(255,255,255,0.5); 
  max-width: 700px;

  ${({ final }) => final && css`
    margin: 20px auto;
    padding-top: 20px;
    border-radius: 10px;
    width: 250px; 
    justify-items: center;
  `}
`;