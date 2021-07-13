import React from "react";
import { LoginPage } from "./components/Auth/Login-page/LoginPage.stories";
import { RegisterPage } from "./components/Auth/Register-page/RegisterPage.stories";
import Header from "./components/Header/Header";
import styled from "styled-components";
import "typeface-roboto";

function App() {
  return (
    <>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <Header />
    </>
  );
}

export default App;
