import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AIImage } from "@/components/ai-elements/image";

const meta = {
  title: "AI Elements/Image",
  component: AIImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AIImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "Placeholder image",
  },
};

export const WithDimensions: Story = {
  args: {
    src: "https://via.placeholder.com/800x600",
    alt: "Large placeholder",
    width: 800,
    height: 600,
  },
};

export const Portrait: Story = {
  args: {
    src: "https://via.placeholder.com/300x400",
    alt: "Portrait image",
  },
};


