import FilterMobile from "./FilterMobile";
import { Story, Meta } from "@storybook/react";
import { FilterMobileProps } from "./FilterMobile";

export default {
  title: "Home/FilterMobile",
  component: FilterMobile,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Filter = () => <FilterMobile />;

const Template: Story<FilterMobileProps> = (args) => <FilterMobile {...args} />;
