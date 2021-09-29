import styled from "styled-components";

export const TopSection = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    flex-grow: 1;
    h2 {
      color: var(--primary-color);
      margin: 10px 0;
    }
    p {
      line-height: 1.5;
      letter-spacing: 0.5px;
      font-weight: 500;
      max-width: 400px;
    }
  }

  img {
    flex-grow: 1;
    width: 40%;
    height: 300px;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      order: 1;
      flex-grow: 2;
      width: 70%;
      height: 100px;
    }

    section {
      order: 2;
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export const TestSection = styled.div`
  h1 {
    text-align: center;
    text-decoration: underline;
    font-style: italic;
    color: var(--primary-color);
    margin: 10px 0;
  }
`;

export const CodeTest = styled.div`
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 2px solid lightgray;

  .example_response {
    position: relative;
    h2 {
      color: var(--primary-color);
      margin: 15px 0;
    }
    pre > button {
      cursor: pointer;
      position: absolute;
      right: 10px;
      margin: 0 10px;
      background-color: #d3472e;
      color: white;

      &:hover {
        background-color: tomato;
      }
    }
  }

  .test_name {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 20px 0;
    color: var(--dark-color);
  }

  .note {
    margin: 10px 0;
    font-weight: 500;
    font-size: 0.8rem;
    color: var(--dark-color);
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;

    background-color: var(--primary-color);
    &:hover {
      background-color: #3e50f7;
    }
  }
`;
