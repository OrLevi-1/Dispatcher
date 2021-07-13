import Header from "./Header";
import { Story, Meta } from "@storybook/react";
import { HeaderProps } from "./Header";

export default {
  title: "Home/Header",
  component: Header,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const HeaderBar = () => <Header />;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;
