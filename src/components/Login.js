import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: var(--slack-color);
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0, 1px, 2px, rgba(0, 0, 0, 0, 24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png"
          alt="logo"
        ></img>
        <h1>Welcome to Slack-Clone</h1>
        <p>Made with &lt;/&gt; by Bhupesh Patil</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
