import CardTag from "./CardTag";
import { Story, Meta } from "@storybook/react";
import { CardTagProps } from "./CardTag";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/CardTag",
  component: CardTag,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Tag = () => (
  <MemoryRouter>
    <CardTag />
  </MemoryRouter>
);

const Template: Story<CardTagProps> = (args) => <CardTag {...args} />;
