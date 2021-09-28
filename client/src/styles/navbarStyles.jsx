import styled from "styled-components";

export const NavBar = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  padding: 10px 0;
  margin: 0 auto;

  #site_logo {
    a {
      text-decoration: none;
      color: black;
    }
    flex-grow: 1;
    font-size: 1.5rem;
    font-weight: bold;
    span {
      color: var(--primary-color);
    }
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 1;

    a {
      text-decoration: none;
      color: var(--dark-color);
    }
    li {
      list-style: none;
      font-size: 0.8rem;
      font-weight: 600;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  @media (max-width: 750px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    #site_logo {
      font-size: 1.2rem;
    }

    ul {
      display: none;
    }
  }
`;
