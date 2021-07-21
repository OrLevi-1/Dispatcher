import React from "react";
import Form from "./Form";
import { Story, Meta } from "@storybook/react";
import { FormProps } from "./Form";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Auth Components/AuthForm",
  component: Form,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const AuthForm = () => (
  <MemoryRouter>
    <Form />
  </MemoryRouter>
);

const Template: Story<FormProps> = (args) => <Form {...args} />;
