import CardTag from "./CardTag";
import { Story, Meta } from "@storybook/react";
import { CardTagProps } from "./CardTag";

export default {
  title: "Home/CardTag",
  component: CardTag,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Tag = () => <CardTag />;

const Template: Story<CardTagProps> = (args) => <CardTag {...args} />;
