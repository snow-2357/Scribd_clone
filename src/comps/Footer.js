import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <h1>Copyright 2019</h1>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  margin: 8px -8px 0 -8px;
  padding: 1px 50px;
  background-color: rgba(0, 41, 63, 0.9);
  color: white;
  h1{
      font-size:12px ;
  }
`;
