import FilterPage from "./FilterPage";
import { Story, Meta } from "@storybook/react";
import { FilterPageProps } from "./FilterPage";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/FilterPage",
  component: FilterPage,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Filter = () => (
  <MemoryRouter>
    <FilterPage />
  </MemoryRouter>
);

const Template: Story<FilterPageProps> = (args) => <FilterPage {...args} />;
