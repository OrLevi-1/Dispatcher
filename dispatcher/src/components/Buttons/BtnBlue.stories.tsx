import React from "react";
import { BtnBlue } from "./BtnBlue";
import { Story, Meta } from "@storybook/react";
import { BtnProps } from "./BtnBlue";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/BlueButton",
  component: BtnBlue,
  decorators: [(Story) => <Story />],
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

export const Primary = () => (
  <MemoryRouter>
    <BtnBlue BtnType={""} BtnText={"Login"} />
  </MemoryRouter>
);

// export const Log = () => (
//   <LoginBtn onClick={() => console.log("Button clicked")}>Log</LoginBtn>
// );

const Template: Story<BtnProps> = (args) => <BtnBlue {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary Args",
// };
