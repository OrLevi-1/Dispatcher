import React from "react";
import { LoginPage } from "./components/Auth/Login-page/LoginPage.stories";
import { RegisterPage } from "./components/Auth/Register-page/RegisterPage.stories";

function App() {
  return (
    <div>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;
