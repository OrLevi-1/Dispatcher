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
`;

export const LoginPage = () => (
  <>
    <Page>
      <Logo />
      <Form />
    </Page>
  </>
);
