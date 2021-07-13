import SearchBar from "./SearchBar";
import { Story, Meta } from "@storybook/react";
import { SearchBarProps } from "./SearchBar";

export default {
  title: "Home/Search",
  component: SearchBar,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => <SearchBar />;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;
