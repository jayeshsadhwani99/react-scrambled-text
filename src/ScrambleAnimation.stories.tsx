import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ScrambleAnimation from "./ScrambleAnimation";

const meta = {
  title: "Scrambled Animation",
  component: ScrambleAnimation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrambleAnimation>;

export default meta;
type Story = StoryObj<typeof ScrambleAnimation>;

export const Primary: Story = {
  render: () => <ScrambleAnimation />,
};
