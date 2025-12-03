import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Loader } from "@/components/ai-elements/loader";

const meta = {
  title: "AI Elements/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "range", min: 12, max: 64, step: 4 },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

export const Small: Story = {
  args: {
    size: 12,
  },
};

export const Large: Story = {
  args: {
    size: 32,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 48,
  },
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Loader size={16} />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  ),
};


