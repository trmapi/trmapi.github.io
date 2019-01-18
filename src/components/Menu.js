import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  font-size: 0.85em;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    padding-left: 1em;
    &:first-child {
      padding-left: 0;
    }
    .status {
      border-radius: 50%;
      display: inline-block;
      height: 0.75em;
      margin-right: 0.5em;
      width: 0.75em;
    }
    .up {
      background-color: ${({ theme }) => theme.colors.up};
    }
    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
    }
  }
`;

const Menu = () => {
  return (
    <Ul>
      <li>
        <a href="https://status.trmapi.com">
          <span
            className="status up"
            role="img"
            aria-label="Status: funcionando"
          />
          Status
        </a>
      </li>
      <li>
        <a href="https://docs.trmapi.com">API</a>
      </li>
      <li>
        <a href="https://github.com/trmapi">Código</a>
      </li>
    </Ul>
  );
};

export default Menu;
