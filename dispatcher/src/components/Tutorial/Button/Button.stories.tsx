import React from "react";
import Button from "./Button";
import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "./Button";
import { InputProps } from "../Input/Input";
import { Center } from "../Center/Center";

export default {
  title: "Basic/Button",
  component: Button,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

export const Log = () => (
  <Button onClick={() => console.log("Button clicked")}>Log</Button>
);

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
