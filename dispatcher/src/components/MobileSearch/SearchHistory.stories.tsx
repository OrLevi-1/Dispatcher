import SearchHistory from "./SearchHistory";
import { Story, Meta } from "@storybook/react";
import { SearchHistoryProps } from "./SearchHistory";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/SearchHistory",
  component: SearchHistory,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => (
  <MemoryRouter>
    <SearchHistory />
  </MemoryRouter>
);

const Template: Story<SearchHistoryProps> = (args) => (
  <SearchHistory {...args} />
);
