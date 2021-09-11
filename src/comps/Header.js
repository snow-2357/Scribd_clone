import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Ham>
        <span></span>
        <span></span>
        <span></span>
      </Ham>
      <Logo>
        <img
          src="https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small_white.svg?0d06fe978"
          alt=""
          srcset=""
        />
      </Logo>
      <Free>Read Free For 30 Days</Free>
      <Sign>Sign In</Sign>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: relative;
  height: 65px;
  margin: -8px;
  display: flex;
  align-items: center;
  padding: 0px 36px;
  overflow-x: hidden;
  background-color: #00293f;
`;
const Ham = styled.div`
  cursor: pointer;
  margin-right: 25px;
  span {
    width: 25px;
    height: 3px;
    margin: 4px -10px;
    display: block;
    background: white;
    border-radius: 20%;
  }
`;
const Logo = styled.div`
  cursor: pointer;
  height: 25px;
  width: auto;
  img {
    height: 100%;
  }
`;

const Sign = styled.button`
  cursor: pointer;
  position: absolute;

  right: 0;
  margin: 30px 10px;
  color: white;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 7px;
  padding: 10px 30px;
  background-color: transparent;
`;

const Free=styled(Sign)`
  right: 140px;
  background-color: #1e7b85;
  border:.1px #f1f1f1 solid;

  @media only screen and (max-width: 700px) {
    display:none;
  }
`;