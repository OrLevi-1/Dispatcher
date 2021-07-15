import NewsCard from "./NewsCard";
import { Story, Meta } from "@storybook/react";
import { NewsCardProps } from "./NewsCard";

export default {
  title: "Home/NewsCard",
  component: NewsCard,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const NewsPost = () => <NewsCard />;

const Template: Story<NewsCardProps> = (args) => <NewsCard {...args} />;
