import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Shimmer, ShimmerList, ShimmerListItem } from "@/components/ai-elements/shimmer";

const meta = {
  title: "AI Elements/Shimmer",
  component: Shimmer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Shimmer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Shimmer className="h-12 w-full" />
      <Shimmer className="h-4 w-3/4" />
      <Shimmer className="h-4 w-1/2" />
    </div>
  ),
};

export const ShimmerCard: Story = {
  render: () => (
    <div className="w-[300px] rounded-lg border p-4">
      <div className="space-y-3">
        <Shimmer className="h-32 w-full" />
        <Shimmer className="h-4 w-2/3" />
        <Shimmer className="h-4 w-1/2" />
      </div>
    </div>
  ),
};

export const ShimmerListExample: Story = {
  render: () => (
    <div className="w-[400px]">
      <ShimmerList>
        <ShimmerListItem>
          <Shimmer className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Shimmer className="h-4 w-3/4" />
            <Shimmer className="h-3 w-1/2" />
          </div>
        </ShimmerListItem>
        <ShimmerListItem>
          <Shimmer className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Shimmer className="h-4 w-2/3" />
            <Shimmer className="h-3 w-1/3" />
          </div>
        </ShimmerListItem>
        <ShimmerListItem>
          <Shimmer className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Shimmer className="h-4 w-full" />
            <Shimmer className="h-3 w-2/3" />
          </div>
        </ShimmerListItem>
      </ShimmerList>
    </div>
  ),
};

export const ProfileShimmer: Story = {
  render: () => (
    <div className="w-[400px] rounded-lg border p-6">
      <div className="flex items-start gap-4">
        <Shimmer className="h-20 w-20 rounded-full" />
        <div className="flex-1 space-y-3">
          <Shimmer className="h-6 w-1/2" />
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-3/4" />
          <div className="flex gap-2 pt-2">
            <Shimmer className="h-8 w-20 rounded-full" />
            <Shimmer className="h-8 w-20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  ),
};


