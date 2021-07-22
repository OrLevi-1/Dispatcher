import Header from "./Header";
import { Story, Meta } from "@storybook/react";
import { HeaderProps } from "./Header";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/Header",
  component: Header,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const HeaderBar = () => <MemoryRouter>{/* <Header /> */}</MemoryRouter>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;
