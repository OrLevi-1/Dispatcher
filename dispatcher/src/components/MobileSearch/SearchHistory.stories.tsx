import SearchHistory from "./SearchHistory";
import { Story, Meta } from "@storybook/react";
import { SearchHistoryProps } from "./SearchHistory";

export default {
  title: "Home/SearchHistory",
  component: SearchHistory,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => <SearchHistory />;

const Template: Story<SearchHistoryProps> = (args) => (
  <SearchHistory {...args} />
);
