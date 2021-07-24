import SearchBar from "./SearchBar";
import { Story, Meta } from "@storybook/react";
import { SearchBarProps } from "./SearchBar";
import { MemoryRouter } from "react-router-dom";
import store from "../../store/store";
import { Provider } from "react-redux";

export default {
  title: "Home/Search",
  component: SearchBar,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const BarSearch = () => (
  <MemoryRouter>
    <Provider store={store}>
      <SearchBar />
    </Provider>
  </MemoryRouter>
);

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;
