import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 40px;
  background-color: #4805d6;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  p {
    color: white;
  }

  .link {
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

const FilterSelect = styled.select`
  position: absolute;
  right: 20px;
  height: 100%;
  width: 120px;
  background-color: #4805d6;
  padding: 3px;
  border: none;
  color: #ffffff;
  border-left: 1px solid #3400a1;
  border-right: 1px solid #3400a1;
`;

export default function NotificationHeader() {
  return (
    <Container>
      <p>
        🔥 Ben Baller & Nicky Diamonds Limited Edition NFTs Drop is LIVE!{' '}
        <span className="link">Check it out</span>
      </p>
      <FilterSelect value="ETHEREUM" defaultValue="ETHEREUM">
        <option value="ETHEREUM">ETHEREUM</option>
      </FilterSelect>
    </Container>
  );
}
