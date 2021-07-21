import React from "react";
import Logo from "./Logo";
import { Story, Meta } from "@storybook/react";
import { LogoProps } from "./Logo";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Auth Components/Logo",
  component: Logo,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const AuthLogo = () => (
  <MemoryRouter>
    <Logo />
  </MemoryRouter>
);

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary Args",
// };
