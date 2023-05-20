import styled from 'styled-components';

type SpinnerProps = {
  height: string;
  width: string;
  borderthickness: string;
};

export const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.borderthickness} solid #f3f3f3;
  border-top: ${(props) => props.borderthickness} solid #383636;
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
