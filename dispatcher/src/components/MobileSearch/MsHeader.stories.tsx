import MsHeader from "./MsHeader";
import { Story, Meta } from "@storybook/react";
import { MsHeaderProps } from "./MsHeader";

export default {
  title: "Home/MsHeader",
  component: MsHeader,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => <MsHeader />;

const Template: Story<MsHeaderProps> = (args) => <MsHeader {...args} />;
