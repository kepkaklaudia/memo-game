import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  border-radius: 25px;
  padding: 10px;
  background-color: rgba(255,255,255,0.5); 
  max-width: 700px; 
`;

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: 0px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255,255,255,0.5);
  padding: 10px;
  margin: 16px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(77, 77, 77, 0.5);

  ${({ responsive }) => responsive && css`
    @media (max-width: 485px) {
      display: grid;
      grid-gap: 10px;
    }
  `}
`;

export const Button = styled.button`
  width: 120px;
  justify-self: center;
  padding: 10px;
  margin: 16px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba(77, 77, 77, 0.5);
  cursor: pointer;
`;