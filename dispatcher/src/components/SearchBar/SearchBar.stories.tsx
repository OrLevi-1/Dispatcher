import SearchBar from "./SearchBar";
import { Story, Meta } from "@storybook/react";
import { SearchBarProps } from "./SearchBar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/Search",
  component: SearchBar,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => (
  <MemoryRouter>
    <SearchBar />
  </MemoryRouter>
);

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;
