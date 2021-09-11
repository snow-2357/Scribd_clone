import React from 'react'
import styled from "styled-components";
function Lowerbody() {
    return (
        <Quote>
            <p> <span>"</span> Scribd is overall the best and most <br/>convenient deal for online reading.</p>
      </Quote>
    )
}

export default Lowerbody;

const Quote= styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
    text-align: center;

    p{  
        font-family: 'Sacramento', cursive;
        font-size: 40px;
        color: rgba(120,120,120);
        span{
            font-size: 80px;
        }
    }
    @media only screen and (max-width: 700px) {
    transform: scale(.9);
    padding: 0px 40px;
    p{
     
        font-size: 20px;
        span{
            font-size: 40px;
        }
    }
  }
`;