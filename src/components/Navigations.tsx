import React from 'react';
import {Link} from 'react-router-dom';

import styled from '@emotion/styled';

const NavigationLinkContainer = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    width: 100%;
    margin: 0;
    padding-inline-start: 0;
  }

  li {
    margin: 0 20px;
    a {
      color: #ffffff;
      text-decoration: none;
      padding: 0 2px;

      :hover {
        background-color: white;
        color: #550ded;
      }
    }

    ::marker {
      display: none;
    }
  }
`;

export default function Navigations() {
  return (
    <NavigationLinkContainer>
      <ul>
        <li>
          <Link to="/">Browse</Link>
        </li>
        <li>
          <Link to="/about">Discover</Link>
        </li>
        <li>
          <Link to="/users">Mint an item</Link>
        </li>
        <li>
          <Link to="/users">Vote/DAO</Link>
        </li>
      </ul>
    </NavigationLinkContainer>
  );
}
