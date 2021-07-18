import React from 'react';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';
import Navigations from './Navigations';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 81px;
  align-items: center;
  background: radial-gradient(
    25.78% 25.77% at 50% 50%,
    rgba(112, 0, 255, 0.51) 0%,
    #550ded 100%
  );
  justify-content: space-around;
`;

const CompanyLogo = styled.img`
  width: 27px;
  height: 24.77px;
`;

// This can be themed but I will not do due to time constraint
const Button = styled.button<{color: string; backgroundColor: string}>`
  height: 40px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: 58px;
  padding: 13px 20px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
`;

export default function AppHeader() {
  return (
    <HeaderContainer>
      <CompanyLogo src="assets/mint-logo.svg" alt="company logo" />
      <SearchBar />
      <Navigations />
      <Button color="#ffffff" backgroundColor="transparent">
        Login
      </Button>
      <Button
        color="#4805D6"
        backgroundColor="#FFFFFF"
        style={{fontWeight: 'bold'}}
      >
        Sign Up
      </Button>
    </HeaderContainer>
  );
}
