import React from "react";
import styled from "styled-components";

function Show() {
  return (
    <Parent>
      <Titel>The best books and audiobooks are waiting for you</Titel>
      <Main>
        <Container>
          <Wrap>
            <img src="/images/book1.jpg" alt="" />
          </Wrap>
          <Wrap>
            <img src="/images/book2.png" alt="" />
          </Wrap>
          <Wrap>
            <img src="/images/book3.png" alt="" />
          </Wrap>
          <Wrap>
            <img src="/images/book4.png" alt="" />
          </Wrap>
          <Wrap>
            <img src="/images/book2.png" alt="" />
          </Wrap>
        </Container>
      </Main>
      <Free>Read Free For 30 Days</Free>
      <p>Cancel anytime.</p>
    </Parent>
  );
}

export default Show;
const Parent=styled.div`
margin: -8px;
display: grid;
background-color: #5a1d41;
align-items: center;
justify-content: center;
text-align: center;
p{
    margin-top: -5px;
    margin-bottom: 100px;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:white;
    font-size: 17px;
    
}

`;
const Titel = styled.h1`
padding-top: 40px;
  text-align: center;
  font-weight: 400;
  color: rgba(245, 245, 245, 0.9);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;


    @media only screen and (max-width: 700px) {
    transform: scale(.56);
    padding-top: 20px;
  }
`;

const Main = styled.div`
  margin-top: -40px;
  display: flex;

  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    transform: scale(.56);
    padding-top: 0px;
    margin-top: -100px;
    margin-bottom: -70px;
  }
`;

const Container = styled.div`
  align-items: center;
  width: 700px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 10px;
  padding: 30px 0 26px;
`;
const Wrap = styled.div`
  cursor: pointer;
  
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0, 0.2) 0px 20px 30px -10px;
  transition: all 250ms cubic-bezier(0.17, 0.67, 0.3, 0.83);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    z-index: -1;
  }
  :hover {
    transform: scale(1.05);
  }
`;


const Free=styled.button`
 cursor: pointer;
  margin: 20px 250px;
  color: white;
  font-size: 18px;
  border: 1px solid white;
  border-radius: 7px;
  padding: 10px 30px;
  background-color: transparent;
  background-color: #1e7b85;
  border:.1px #f1f1f1 solid;

  @media only screen and (max-width: 700px) {
    
    transform: scale(.8);
    margin: 10px 220px;
  }
  
`;