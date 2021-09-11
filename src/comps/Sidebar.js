import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <Head>
        <Logo>
          <img
            src="https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small.svg?0d06fe978"
            alt=""
          />
        </Logo>
        <Cross>
          <span className="left"></span>
          <span className="right"></span>
        </Cross>
      </Head>
      <Search placeholder="Search ">
          
      </Search>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  margin: -8px;
  height: 100vh;
  width: 240px;
  background-color: violet;
`;
const Head = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
`;
const Logo = styled.div`
  cursor: pointer;
  width: 120px;
  img {
    width: 100%;
  }
`;
const Cross = styled.div`
  cursor: pointer;
  position: absolute;
  right: 35px;
  top: 25px;
  span {
    width: 25px;
    height: 3px;
    margin: 4px -10px;
    display: block;
    background: white;
    border-radius: 20%;
  }
  .left {
    position: absolute;
    top: 2px;
    transform: rotate(-45deg);
  }
  .right {
    position: absolute;
    top: 2px;
    transform: rotate(45deg);
  }
`;

const Search=styled.input`
    border: 1px solid black;
    border-radius: 6px;
padding: 10px 25px;
margin-left: 20px;
`;