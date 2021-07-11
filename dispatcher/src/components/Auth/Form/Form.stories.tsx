import React from "react";
import Form from "./Form";
import { Story, Meta } from "@storybook/react";
import { FormProps } from "./Form";

export default {
  title: "Auth Components/AuthForm",
  component: Form,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const AuthForm = () => <Form />;

const Template: Story<FormProps> = (args) => <Form {...args} />;
