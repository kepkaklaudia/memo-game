import styled, { css } from "styled-components";

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