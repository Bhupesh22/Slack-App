import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Chat from "./components/Chat";
import "./App.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png"
            alt="logo"
          ></img>
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  {/* Chat Component */}
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
