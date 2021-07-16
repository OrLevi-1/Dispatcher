import MobileSearch from "./MobileSearch";
import { Story, Meta } from "@storybook/react";
import { MobileSearchProps } from "./MobileSearch";

export default {
  title: "Home/MobileSearch",
  component: MobileSearch,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => <MobileSearch />;

const Template: Story<MobileSearchProps> = (args) => <MobileSearch {...args} />;
