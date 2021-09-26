import React from 'react'
import styled from 'styled-components'
function Logincard() {
    return (
        <Container>
            <h1>Sign In to Scribd</h1>
            <ButtonF>Continue with Facebook</ButtonF>
            <ButtonG>Continue with Google</ButtonG>
            <span></span>
            <div className="new">New to Scribd?<span> Sign Up</span></div>
        </Container>
    )
}

export default Logincard;

const Container=styled.div`
    z-index:10;
`;
const ButtonF=styled.button``;

const ButtonG=styled.button``;