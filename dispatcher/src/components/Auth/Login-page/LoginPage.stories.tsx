import React from "react";
import Form from "../Form/Form";
import Logo from "../Logo/Logo";
import styled from "styled-components";

export default {
  title: "Auth Pages/Login-Page",
};

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  min-width: 325px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const LoginPage = () => (
  <>
    <Page>
      <Logo />
      <Form />
    </Page>
  </>
);
