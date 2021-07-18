import React from 'react';
import styled from '@emotion/styled';

const SearchInput = styled.input`
  height: 40px;
  border-top-left-radius: 33px;
  border-bottom-left-radius: 33px;
  background-color: #ffffff;
  padding-left: 17px;
  box-sizing: border-box;
  color: #727272;
  border: none;
  border-right: 1px solid #eaeaff;
`;

const FilterSelect = styled.select`
  width: 100px;
  padding: 3px;
  border: none;
  padding-left: 26px;
`;

const SearchBarContainer = styled.div`
  width: auto;
  background-color: #ffffff;
  border-radius: 33px;
  padding: 3px;
  display: grid;
  grid-template-columns: 6fr 2fr 1fr;
`;

const SearchButton = styled.button`
  background-image: url(assets/search-button.svg);
  background-repeat: no-repeat;
  background-position: center;
  width: 72px;
  background-color: #550ded;
  border-radius: 33px;
  border: none;
`;

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput placeholder="Search For Anything" />
      <FilterSelect value="All" defaultValue="All">
        <option value="All">All</option>
      </FilterSelect>
      <SearchButton />
    </SearchBarContainer>
  );
}
