import styled from "styled-components";

export default function PageNotFound() {
  return (
    <NotFound>
      <h2>404 ERR</h2>
      <div>Page you are trying to access is not available!</div>
    </NotFound>
  );
}

const NotFound = styled.div`
  height: 90vh;
  justify-content: center;
  align-items: center;
  h2 {
    color: tomato;
  }
  div {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
  }
`;
