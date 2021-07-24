import NewsCard from "./NewsCard";
import { Story, Meta } from "@storybook/react";
import { NewsCardProps } from "./NewsCard";
import { MemoryRouter } from "react-router-dom";
import store from "../../store/store";
import { Provider } from "react-redux";

export default {
  title: "Home/NewsCard",
  component: NewsCard,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const NewsPost = () => (
  <MemoryRouter>
    <Provider store={store}>
      <NewsCard />
    </Provider>
  </MemoryRouter>
);

const Template: Story<NewsCardProps> = (args) => <NewsCard {...args} />;
