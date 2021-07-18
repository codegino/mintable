import React from 'react';
import {Link} from 'react-router-dom';

import styled from '@emotion/styled';

const NavigationLinkContainer = styled.nav`
  height: 50px;

  ul {
    display: flex;
    list-style-type: none;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding-inline-start: 0;
  }

  li {
    margin: 0 20px;
    a {
      color: #2d2d2d;
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

export default function CategoryLinks() {
  return (
    <NavigationLinkContainer>
      <ul>
        <li>
          <Link to="/art">Art</Link>
        </li>
        <li>
          <Link to="/collectibles">Collectibles</Link>
        </li>
        <li>
          <Link to="/game-items">Game Items</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/domains">Domains</Link>
        </li>
        <li>
          <Link to="/templates">Templates</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
      </ul>
    </NavigationLinkContainer>
  );
}
