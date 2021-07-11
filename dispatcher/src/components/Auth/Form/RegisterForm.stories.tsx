import React from "react";
import RegisterForm from "./RegisterForm";
import { Story, Meta } from "@storybook/react";
import { RegisterFormProps } from "./RegisterForm";

export default {
  title: "Auth Components/RegisterForm",
  component: RegisterForm,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const AuthForm = () => <RegisterForm />;

const Template: Story<RegisterFormProps> = (args) => <RegisterForm {...args} />;
