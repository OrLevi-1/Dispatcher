import MsHeader from "./MsHeader";
import { Story, Meta } from "@storybook/react";
import { MsHeaderProps } from "./MsHeader";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/MsHeader",
  component: MsHeader,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => (
  <MemoryRouter>
    <MsHeader />
  </MemoryRouter>
);

const Template: Story<MsHeaderProps> = (args) => <MsHeader {...args} />;
