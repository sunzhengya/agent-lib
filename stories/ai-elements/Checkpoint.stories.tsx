import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import {
  Checkpoint,
  CheckpointIcon,
  CheckpointTrigger,
} from "@/components/ai-elements/checkpoint";
import { BookmarkIcon, CheckIcon, XIcon } from "lucide-react";

const meta = {
  title: "AI Elements/Checkpoint",
  component: Checkpoint,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkpoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <Checkpoint>
        <CheckpointIcon />
        <span className="text-sm">Checkpoint 1: Initial Setup</span>
        <CheckpointTrigger onClick={fn()}>
          Complete
        </CheckpointTrigger>
      </Checkpoint>
    </div>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <div className="w-[600px]">
      <Checkpoint>
        <CheckpointIcon>
          <CheckIcon className="size-4 text-green-500" />
        </CheckpointIcon>
        <span className="text-sm">Checkpoint 2: Configuration Complete</span>
        <CheckpointTrigger variant="ghost" size="sm" onClick={fn()}>
          View Details
        </CheckpointTrigger>
      </Checkpoint>
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div className="w-[600px]">
      <Checkpoint>
        <CheckpointIcon />
        <span className="text-sm">Checkpoint 3: Database Migration</span>
        <CheckpointTrigger 
          tooltip="Click to start migration"
          onClick={fn()}
        >
          Start
        </CheckpointTrigger>
      </Checkpoint>
    </div>
  ),
};

export const MultipleCheckpoints: Story = {
  render: () => (
    <div className="w-[600px] space-y-2">
      <Checkpoint>
        <CheckpointIcon>
          <CheckIcon className="size-4 text-green-500" />
        </CheckpointIcon>
        <span className="text-sm">Step 1: Dependencies installed</span>
        <CheckpointTrigger variant="ghost" size="sm" disabled>
          Completed
        </CheckpointTrigger>
      </Checkpoint>

      <Checkpoint>
        <CheckpointIcon>
          <CheckIcon className="size-4 text-green-500" />
        </CheckpointIcon>
        <span className="text-sm">Step 2: Configuration validated</span>
        <CheckpointTrigger variant="ghost" size="sm" disabled>
          Completed
        </CheckpointTrigger>
      </Checkpoint>

      <Checkpoint>
        <CheckpointIcon />
        <span className="text-sm">Step 3: Running tests</span>
        <CheckpointTrigger onClick={fn()}>
          Skip
        </CheckpointTrigger>
      </Checkpoint>

      <Checkpoint className="opacity-50">
        <CheckpointIcon />
        <span className="text-sm">Step 4: Deploy to production</span>
        <CheckpointTrigger disabled>
          Pending
        </CheckpointTrigger>
      </Checkpoint>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="w-[600px]">
      <Checkpoint>
        <CheckpointIcon />
        <span className="text-sm">Review changes before deploying</span>
        <CheckpointTrigger 
          variant="outline" 
          size="sm"
          onClick={fn()}
        >
          <XIcon className="size-3" />
          Cancel
        </CheckpointTrigger>
        <CheckpointTrigger 
          size="sm"
          onClick={fn()}
        >
          <CheckIcon className="size-3" />
          Approve
        </CheckpointTrigger>
      </Checkpoint>
    </div>
  ),
};


