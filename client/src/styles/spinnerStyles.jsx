import styled from "styled-components";

export const Box = styled.pre`
  display: none;

  div {
    margin: 0 auto;
  }
  &.active {
    display: block;
  }
`;

export const Loader = styled.div`
  height: 60px;
  width: 60px;
  background: transparent;
  border-radius: 50%;
  border: 3px solid lightgray;
  border-top: 3px solid var(--primary-color);
  animation: loader 0.6s infinite;

  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
