import React from "react";
import styled from "styled-components";
import "./Sidebar.css";
import { useState } from "react";
function Sidebar(props) {
  const [close, setClose] = useState(false);

  const closeSidebar = () => {
    setClose(!close);
    console.log(close)
  };

  return (
    // <div className={close ? "default1" : "active1"}>
      <Container className={props.click ? "active" : "default"}>
        <Head>
          <Logo>
            <img
              src="https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small.svg?0d06fe978"
              alt=""
            />
          </Logo>
          <Cross onClick={closeSidebar}>
            <span className="left"></span>
            <span className="right"></span>
          </Cross>
        </Head>
        <Search placeholder="Search "></Search>
        <div className="bar"></div>
      </Container>
    // </div>
  );
}

export default Sidebar;

const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  margin: -8px;
  height: 105vh;
  width: 240px;
  background-color: rgba(245, 245, 245);
  box-shadow: rgba(100, 100, 100) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  .bar {
    margin: 30px 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
  }
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
    background: rgba(0, 0, 0, 0.5);
    width: 25px;
    height: 3px;
    margin: 4px -10px;
    display: block;

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

const Search = styled.input`
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px;
  margin-left: 20px;
`;
