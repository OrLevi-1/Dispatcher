import React from "react";
import { LoginPage } from "./components/Auth/Login-page/LoginPage.stories";
import { RegisterPage } from "./components/Auth/Register-page/RegisterPage.stories";
import Header from "./components/Header/Header";
import styled from "styled-components";

const Background = styled.div`
  /* background-color: #c57878; */
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Background>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <Header />
    </Background>
  );
}

export default App;
