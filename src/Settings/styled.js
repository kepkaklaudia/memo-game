import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  border-radius: 25px;
  padding: 10px;
  background-color: rgba(255,255,255,0.5);
`;

export const Heading = styled.h2`
  text-align: center;
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255,255,255,0.5);
  padding: 10px;
  margin: 16px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.5);
  `;

  export const Button = styled.button`
  width: 120px;
  justify-self: center;
  padding: 10px;
  margin: 16px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  `;