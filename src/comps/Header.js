import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "./Header.css";
import Sidebar from "./Sidebar";

function Header() {
  // click

  const [click, setClick] = useState(false);

  const sidebarActive = () => {
    setClick(!click);
    console.log(click);
  };
  //  scroll
  const [scroll, setScroll] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <>
      <Container>
        <Ham onClick={sidebarActive}>
          <span></span>
          <span></span>
          <span></span>
        </Ham>
        <Logo>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt=""
            srcset=""
          />
        </Logo>
        <Free className={scroll ? "sign active" : "sign"}>
        Free Shipping
        </Free>
        <Sign>Sign In</Sign>
      </Container>
      {click && <Sidebar sidebarActive={sidebarActive} click={click}/>}
    </>
  );
}

export default Header;

const Container = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 5;
  width: 100vw;
  position: fixed;
  top: 5px;
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
  width: 15px;

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
  height: 30px;
  width: auto;
  img {
    height: 100%;
  }
`;

const Sign = styled.button`
  cursor: pointer;
  position: absolute;
  right: 100px;

  margin: 30px 10px;
  color: white;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 7px;
  padding: 10px 30px;
  background-color: transparent;
`;

const Free = styled(Sign)`
  position: absolute;
  right: 270px;
  background-color: #1e7b85;
  border: 0.1px #f1f1f1 solid;
  &:hover {
    background-color: rgba(30, 123, 133, 0.7);
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
