import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  perspective: 700px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 7px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  ${({ flipped }) => flipped && css`
    transform: rotateY(180deg);
  `}
`;

export const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.25s ease-in-out;

  ${({ front }) => front && css`
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      background: rgba(255, 255, 255, 0.5);
      transition: all 0.25s ease-in-out;
    }`
  }

  ${({ back }) => back && css`
    transform: rotateY(180deg);`
  }

  ${({ found }) => found && css`
    background: rgba(15, 42, 51, 0.7);

    &:hover {
      transform: none;
      box-shadow: none;
      cursor: not-allowed;
      background: rgba(15, 42, 51, 0.7);
    }`
  }
`;

export const Image = styled.img`
  border-radius: 7px;
`;
