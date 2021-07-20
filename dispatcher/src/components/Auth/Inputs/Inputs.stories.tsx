import React from "react";
import Inputs from "./Inputs";
import { Story, Meta } from "@storybook/react";
import { InputsProps } from "./Inputs";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Auth Components/Inputs",
  component: Inputs,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const InputList = () => (
  <MemoryRouter>
    <Inputs />
  </MemoryRouter>
);

const Template: Story<InputsProps> = (args) => <Inputs {...args} />;
