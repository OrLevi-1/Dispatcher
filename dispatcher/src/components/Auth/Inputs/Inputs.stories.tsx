import React from "react";
import Inputs from "./Inputs";
import { Story, Meta } from "@storybook/react";
import { InputsProps } from "./Inputs";

export default {
  title: "Auth Components/Inputs",
  component: Inputs,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const InputList = () => <Inputs />;

const Template: Story<InputsProps> = (args) => <Inputs {...args} />;
