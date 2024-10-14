import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Text } from "./text";

type StoryProps = ComponentProps<typeof Text>;

const meta: Meta<StoryProps> = {
  component: Text,
  argTypes: { color: { control: { type: "color" } } },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Color: Story = {
  args: {
    color: "red",
    children: "Hello worlds",
  },
};
