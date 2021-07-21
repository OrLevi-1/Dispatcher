import FilterMobile from "./FilterMobile";
import { Story, Meta } from "@storybook/react";
import { FilterMobileProps } from "./FilterMobile";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/FilterMobile",
  component: FilterMobile,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Filter = () => (
  <MemoryRouter>
    <FilterMobile />
  </MemoryRouter>
);

const Template: Story<FilterMobileProps> = (args) => <FilterMobile {...args} />;
