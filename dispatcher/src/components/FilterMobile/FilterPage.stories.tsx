import FilterPage from "./FilterPage";
import { Story, Meta } from "@storybook/react";
import { FilterPageProps } from "./FilterPage";

export default {
  title: "Home/FilterPage",
  component: FilterPage,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Filter = () => <FilterPage />;

const Template: Story<FilterPageProps> = (args) => <FilterPage {...args} />;
