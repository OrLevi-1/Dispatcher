import Dropdown from "./Dropdown";
import { Story, Meta } from "@storybook/react";
import { DropdownProps } from "./Dropdown";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/Dropdown",
  component: Dropdown,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Dropdownlist = () => (
  <MemoryRouter>
    <Dropdown isSearch={true} withArrow={true} />
  </MemoryRouter>
);

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
