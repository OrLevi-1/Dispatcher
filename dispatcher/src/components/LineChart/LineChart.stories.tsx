import LineChart from "./LineChart";
import { Story, Meta } from "@storybook/react";
import { LineChartProps } from "./LineChart";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Home/LineChart",
  component: LineChart,
  decorators: [(Story) => <Story />],
  argTypes: {},
} as Meta;

export const Chart = () => (
  <MemoryRouter>
    <LineChart />
  </MemoryRouter>
);

const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;
