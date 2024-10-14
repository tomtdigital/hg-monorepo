import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { PreviewLink } from "./preview-link";

type StoryProps = ComponentProps<typeof PreviewLink>;

const meta: Meta<StoryProps> = {
  component: PreviewLink,
};

export default meta;

type Story = StoryObj<typeof PreviewLink>;

export const Color: Story = {
  args: {
    href: "/games",
    children: "Hello worlds",
  },
};
