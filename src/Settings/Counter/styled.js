import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline: 1.2px solid;
  }

  &:active {
    scale: 1.2;  
  }
`;

export const Arrow = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  animation: animate 1s infinite alternate;

  @keyframes animate {
    0% {
      transform: rotate(315deg) translate(-8px, -8px);
    }

    100% {
      transform: rotate(315deg) translate(2px, 2px);
    }
  }

  ${({ decrement }) => decrement && css`
    animation: animateD 1s infinite alternate;

    @keyframes animateD {
      0% {
        transform: rotate(135deg) translate(-8px, -8px);
      }

      100% {
        transform: rotate(135deg) translate(2px, 2px);
      }
    }
  `}
`;