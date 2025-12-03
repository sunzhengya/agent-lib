import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import {
  Confirmation,
  ConfirmationTitle,
  ConfirmationRequest,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationActions,
  ConfirmationAction,
} from "@/components/ai-elements/confirmation";

const meta = {
  title: "AI Elements/Confirmation",
  component: Confirmation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Confirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ApprovalRequested: Story = {
  render: () => (
    <Confirmation 
      state="approval-requested" 
      approval={{ id: "confirm-1" }}
    >
      <ConfirmationTitle>Delete Project?</ConfirmationTitle>
      <ConfirmationRequest>
        <p className="text-sm text-muted-foreground my-2">
          Are you sure you want to delete this project? This action cannot be undone.
        </p>
        <ConfirmationActions>
          <ConfirmationAction variant="outline" onClick={fn()}>
            Cancel
          </ConfirmationAction>
          <ConfirmationAction variant="destructive" onClick={fn()}>
            Delete
          </ConfirmationAction>
        </ConfirmationActions>
      </ConfirmationRequest>
    </Confirmation>
  ),
};

export const Approved: Story = {
  render: () => (
    <Confirmation 
      state="output-available" 
      approval={{ id: "confirm-2", approved: true }}
    >
      <ConfirmationTitle>✅ Action Approved</ConfirmationTitle>
      <ConfirmationAccepted>
        <p className="text-sm text-muted-foreground my-2">
          The deployment has been approved and will start shortly.
        </p>
      </ConfirmationAccepted>
    </Confirmation>
  ),
};

export const Rejected: Story = {
  render: () => (
    <Confirmation 
      state="output-denied" 
      approval={{ id: "confirm-3", approved: false, reason: "Security concerns" }}
    >
      <ConfirmationTitle>❌ Action Rejected</ConfirmationTitle>
      <ConfirmationRejected>
        <p className="text-sm text-muted-foreground my-2">
          The deployment was rejected due to security concerns.
        </p>
      </ConfirmationRejected>
    </Confirmation>
  ),
};

export const WithDetails: Story = {
  render: () => (
    <Confirmation 
      state="approval-requested" 
      approval={{ id: "confirm-4" }}
    >
      <ConfirmationTitle>Deploy to Production?</ConfirmationTitle>
      <ConfirmationRequest>
        <p className="text-sm text-muted-foreground my-2">
          You're about to deploy version 2.0.0 to production. This will affect all users.
        </p>
        <div className="my-3 rounded-md border p-3 text-sm">
          <p className="font-medium mb-2">Deployment Details:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Branch: main</li>
            <li>• Commit: abc1234</li>
            <li>• Environment: Production</li>
            <li>• Estimated time: 5 minutes</li>
          </ul>
        </div>
        <ConfirmationActions>
          <ConfirmationAction variant="outline" onClick={fn()}>
            Cancel
          </ConfirmationAction>
          <ConfirmationAction onClick={fn()}>
            Deploy
          </ConfirmationAction>
        </ConfirmationActions>
      </ConfirmationRequest>
    </Confirmation>
  ),
};

export const DangerousAction: Story = {
  render: () => (
    <Confirmation 
      state="approval-requested" 
      approval={{ id: "confirm-5" }}
      className="border-destructive/50"
    >
      <ConfirmationTitle>⚠️ Dangerous Action</ConfirmationTitle>
      <ConfirmationRequest>
        <p className="text-sm text-muted-foreground my-2">
          This will permanently delete your account and all associated data. 
          This action is <strong>irreversible</strong>.
        </p>
        <ConfirmationActions>
          <ConfirmationAction variant="outline" onClick={fn()}>
            Keep Account
          </ConfirmationAction>
          <ConfirmationAction variant="destructive" onClick={fn()}>
            Delete Forever
          </ConfirmationAction>
        </ConfirmationActions>
      </ConfirmationRequest>
    </Confirmation>
  ),
};


