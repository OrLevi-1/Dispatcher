import Graph from "./Graph";
import { Story, Meta } from "@storybook/react";
import { GraphProps } from "./Graph";

export default {
  title: "Home/Graph",
  component: Graph,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const GraphChart = () => <Graph />;

const Template: Story<GraphProps> = (args) => <Graph {...args} />;
