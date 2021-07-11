import React from "react";
import { AuthBtn } from "./AuthBtn";
import { Story, Meta } from "@storybook/react";
import { BtnProps } from "./AuthBtn";

export default {
  title: "Auth Components/Buttons/LoginButton",
  component: AuthBtn,
  decorators: [(Story) => <Story />],
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

export const Primary = () => <AuthBtn BtnText={"Login"} />;

// export const Log = () => (
//   <LoginBtn onClick={() => console.log("Button clicked")}>Log</LoginBtn>
// );

const Template: Story<BtnProps> = (args) => <AuthBtn {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary Args",
// };
