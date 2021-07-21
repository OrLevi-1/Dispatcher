import React from "react";
import FbButton from "./FbButton";
import { Story, Meta } from "@storybook/react";
import { FbButtonProps } from "./FbButton";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Auth Components/Buttons/FbButton",
  component: FbButton,
  decorators: [(Story) => <Story />],
  argTypes: {
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

export const Primary = () => (
  <MemoryRouter>
    <FbButton />
  </MemoryRouter>
);

// export const Log = () => (
//   <LoginBtn onClick={() => console.log("Button clicked")}>Log</LoginBtn>
// );

const Template: Story<FbButtonProps> = (args) => <FbButton {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary Args",
// };
