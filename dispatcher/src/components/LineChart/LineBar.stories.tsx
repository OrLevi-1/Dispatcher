import LineBar from "./LineBar";
import { Story, Meta } from "@storybook/react";
import { LineBarProps } from "./LineBar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/LineBar",
  component: LineBar,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Line = () => (
  <MemoryRouter>
    <LineBar />
  </MemoryRouter>
);

const Template: Story<LineBarProps> = (args) => <LineBar {...args} />;
