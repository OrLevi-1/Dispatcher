import LineBar from "./LineBar";
import { Story, Meta } from "@storybook/react";
import { LineBarProps } from "./LineBar";

export default {
  title: "Home/LineBar",
  component: LineBar,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Line = () => <LineBar />;

const Template: Story<LineBarProps> = (args) => <LineBar {...args} />;
