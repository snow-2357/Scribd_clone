import React from "react";
import styled from "styled-components";
function Logincard() {
  return (
    <Container>
      <Context>
        <h1>Sign In to Scribd</h1>
        <ButtonF>
          {" "}
          <img src="/icon/fb.png" alt="fb" />{" "}
          <span>Continue with Facebook</span>{" "}
        </ButtonF>
        <ButtonG>
          {" "}
          <img src="/icon/g.png" alt="fb" /> <span> Continue with Google </span>{" "}
        </ButtonG>
        <span></span>
        <div className="bar"/>
        <div className="new">
          New to Scribd?<span> Sign Up</span>
        </div>
      </Context>
    </Container>
  );
}

export default Logincard;

const Container = styled.div`
  position: fixed;
  margin-left: -8px;
  width: 100vw;
  height: 100vh;

  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  z-index: 10;


  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Context = styled.div`
padding: 70px;
border:1px solid #001927;
background-color:#001927;
border-radius:10px;
margin-top: 30vh;
    align-items: center;

  display: flex;
  flex-direction: column;

color:white;
  .new {
    padding-top:30px;
    margin-bottom: 0px;
    span {
      color: blue;
      cursor: pointer;
    }
  }
  .bar{
    margin:20px;
    width:100%;
    border:1px solid #fff;
  }
  @media only screen and (max-width: 510px) {
    transform: scale(0.7);

  }
`;
const ButtonF = styled.button`
  cursor: pointer;
  position: relative;
  width: 350px;
  padding: 10px 20px;
  background-color: rgba(66, 103, 178);
  font-size: 17px;
  font-weight: 700;
  color: white;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  margin: 10px;
  &:hover {
    background-color: rgba(50, 90, 180);
  }
  img {
    width: 30px;
  }
  span {
    position: relative;
    top: -7px;
  }
`;

const ButtonG = styled(ButtonF)`
  background-color: #fff;
  color: #000;
  &:hover {
    background-color: rgba(245, 245, 245, 0.9);
  }
`;
