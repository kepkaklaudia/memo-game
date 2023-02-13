import styled, {css} from "styled-components";

export const Button = styled.button`
  width: 120px;
  justify-self: center;
  padding: 10px;
  margin: 16px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba(77, 77, 77, 0.5);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-family: 'Permanent Marker', cursive;
  font-size: 25px; 

  &:hover {
    box-shadow: 0 0 5px 1px rgba(245,245,245, 1);
    scale: 1.1;
  }
  &:active {
    scale: 1.05;
  }
  &:focus-visible {
    outline: 1px solid;
  } 

  ${({ final }) => final && css`
    width: 180px;
  `}
`;