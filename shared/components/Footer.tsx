import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color: tomato;
`;

const Footer = () => {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  );
};

export default Footer;
