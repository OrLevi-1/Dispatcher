import Graph from "./Graph";
import { Story, Meta } from "@storybook/react";
import { GraphProps } from "./Graph";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/Graph",
  component: Graph,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const GraphChart = () => (
  <MemoryRouter>
    <Graph />
  </MemoryRouter>
);

const Template: Story<GraphProps> = (args) => <Graph {...args} />;
