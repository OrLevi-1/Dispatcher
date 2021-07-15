import Dropdown from "./Dropdown";
import { Story, Meta } from "@storybook/react";
import { DropdownProps } from "./Dropdown";

export default {
  title: "Home/Dropdown",
  component: Dropdown,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Dropdownlist = () => <Dropdown isSearch={true} />;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
