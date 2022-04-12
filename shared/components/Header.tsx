import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: greenyellow;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  );
};

export default Header;
