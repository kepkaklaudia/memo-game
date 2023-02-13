import styled from "styled-components";

export const Loader = styled.span`
  width: 5px;
  height: 5px;
  position: absolute;
  left: 50%;
  top: 30%;
  border-radius: 50%;
  background: #fff;
  animation: wave 1s ease-in infinite;

  @keyframes wave {
    0% {  
      box-shadow:
      0 0 0 0px rgba(255, 255,255, 1),
      0 0 0 10px rgba(255, 255,255, 0.2),
      0 0 0 20px rgba(255, 255,255, 0.6),
      0 0 0 30px rgba(255, 255,255, 0.4),
      0 0 0 40px rgba(255, 255,255, 0.2)
    }

    100% {  
      box-shadow:
      0 0 0 40px rgba(255, 255,255, 0),
      0 0 0 30px rgba(255, 255,255, 0.2),
      0 0 0 20px rgba(255, 255,255, 0.4),
      0 0 0 10px rgba(255, 255,255, 0.6),
      0 0 0 0px rgba(255, 255,255, 1)
    }
  }
`;