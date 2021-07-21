import NewsCard from "./NewsCard";
import { Story, Meta } from "@storybook/react";
import { NewsCardProps } from "./NewsCard";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/NewsCard",
  component: NewsCard,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const NewsPost = () => (
  <MemoryRouter>
    <NewsCard />
  </MemoryRouter>
);

const Template: Story<NewsCardProps> = (args) => <NewsCard {...args} />;
