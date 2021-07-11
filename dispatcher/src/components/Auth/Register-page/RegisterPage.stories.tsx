import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import RegisterForm from "../Form/RegisterForm";

export default {
  title: "Auth Pages/Register-Page",
};

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 325px;
  height: 100vh;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const RegisterPage = () => (
  <>
    <Page>
      <Logo />
      <RegisterForm />
    </Page>
  </>
);
