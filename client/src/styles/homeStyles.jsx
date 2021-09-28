import styled from "styled-components";

export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;

  section {
    flex-grow: 1;

    * {
      margin: 10px 0;
    }
    .main_text {
      font-size: 2rem;
      font-weight: bold;
      margin: 15px 0;
    }
    p {
      color: var(--dark-color);
      font-size: 0.9rem;
      max-width: 400px;
      line-height: 1.5;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .buttons {
      display: flex;
      flex-direction: column;

      button {
        max-width: 200px;
        cursor: pointer;
        outline: none;
        border: none;
        color: white;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.9rem;

        span {
          margin-right: 7px;
        }

        &:first-child {
          background-color: var(--primary-color);
          &:hover {
            background-color: #3e50f7;
          }
        }
        &:nth-child(2) {
          background-color: var(--secondary-color);
          &:hover {
            background-color: #73970e;
          }
        }

        &:last-child {
          background-color: var(--dark-color);
          &:hover {
            background-color: #3b3b3b;
          }
        }
      }
    }
  }

  #home_img {
    flex-grow: 1;
    height: 300px;
    width: 30%;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #home_img {
      order: 1;
      width: 60%;
      height: 100px;
    }

    section {
      order: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        text-align: center;
      }

      .buttons > button {
        padding: 5px 15px;
      }
    }
  }
`;

export const SecondSection = styled.div`
  h2 {
    margin: 10px 0;
    color: var(--primary-color);
  }

  h4 {
    text-align: center;
    margin: 20px 0;
    color: var(--dark-color);
    font-style: italic;
  }

  .example_code {
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
  }

  .example_response {
    margin: 60px 0;
  }

  .routes_section {
    margin: 70px 0;

    p {
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      color: var(--dark-color);
      margin: 20px 0;
      font-weight: 500;
    }

    ul {
      list-style: none;
      max-width: 400px;
      margin: 10px 0;
      border-top: 1px solid lightgray;

      li {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;

        &:first-child {
          span {
            text-decoration: underline;
          }
        }

        a {
          text-decoration: none;
          color: var(--primary-color);
          &:hover {
            text-decoration: underline;
          }
        }
      }
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
  }
`;

export const Footer = styled.footer`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240);
  position: relative;
  z-index: 10;
  font-size: 1.3rem;
  font-weight: 600;

  span > svg {
    color: tomato;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 750px) {
    height: 10vh;
    font-size: 1rem;
  }
`;
