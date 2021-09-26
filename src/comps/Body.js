import React from "react";
import styled from "styled-components";

export default function Body() {
  return (
    <Container>
      <Text>
        <h1>
          Endless entertainment
          <br />
          and knowledge
        </h1>
        <h5>Read or listen anytime, anywhere.</h5>
        <button>Read free for 30 days</button>
        <p>Only R299/maonth after. Cancel anytime.</p>
      </Text>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60vh;
  /* padding: 0 3.5vw; */
  margin: -8px;
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("https://s-f.scribdassets.com/webpack/assets/images/hero_banner/1024_en@1x.1e21351b.jpg")
      top center / cover no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Text = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 120px 10%;
  color: white;
  h1 {
    font-size: 45px;
    margin: 10px 0px;
    font-weight: 700;
  }
  h5 {
    font-size: 20px;
    margin: 10px 0px;
  }
  p {
    font-size: 15px;
  }
  button {
    margin-top: 30px;
    background: #fff;
    color: #001927;
    font-size: 15px;
    font-weight: 600;
    
    border: 2px solid white;
    border-radius: 4px;
    padding: 15px 50px;
    &:hover {
      background: #001927;
      color:#fff ;
    }
  }

  @media only screen and (max-width: 700px) {
    transform: scale(0.9);
    padding: 120px 40px;
  }
`;
