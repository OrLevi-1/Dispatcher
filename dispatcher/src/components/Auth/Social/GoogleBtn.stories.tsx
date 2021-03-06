import React from "react";
import GoogleBtn from "./GoogleBtn";
import { Story, Meta } from "@storybook/react";
import { GoogleBtnProps } from "./GoogleBtn";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Auth Components/Buttons/GoogleButton",
  component: GoogleBtn,
  decorators: [(Story) => <Story />],
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

export const Primary = () => (
  <MemoryRouter>
    <GoogleBtn />
  </MemoryRouter>
);

// export const Log = () => (
//   <LoginBtn onClick={() => console.log("Button clicked")}>Log</LoginBtn>
// );

const Template: Story<GoogleBtnProps> = (args) => <GoogleBtn {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary Args",
// };
