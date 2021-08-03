import MobileSearch from "./MobileSearch";
import { Story, Meta } from "@storybook/react";
import { MobileSearchProps } from "./MobileSearch";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/MobileSearch",
  component: MobileSearch,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Search = () => (
  <MemoryRouter>{/* <MobileSearch onBackClick={() => {}} /> */}</MemoryRouter>
);

const Template: Story<MobileSearchProps> = (args) => <MobileSearch {...args} />;
