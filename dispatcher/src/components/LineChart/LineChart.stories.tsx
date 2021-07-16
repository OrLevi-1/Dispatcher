import LineChart from "./LineChart";
import { Story, Meta } from "@storybook/react";
import { LineChartProps } from "./LineChart";

export default {
  title: "Home/LineChart",
  component: LineChart,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Chart = () => <LineChart />;

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;
