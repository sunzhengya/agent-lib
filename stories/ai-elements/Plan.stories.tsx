import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Plan,
  PlanHeader,
  PlanTitle,
  PlanDescription,
  PlanAction,
  PlanContent,
  PlanFooter,
  PlanTrigger,
} from "@/components/ai-elements/plan";
import { Button } from "@/components/ui/button";

const meta = {
  title: "AI Elements/Plan",
  component: Plan,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Plan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <Plan>
        <PlanHeader>
          <div>
            <PlanTitle>Refactor Authentication System</PlanTitle>
            <PlanDescription>
              Modernize the authentication system with OAuth 2.0 support
            </PlanDescription>
          </div>
          <PlanAction>
            <PlanTrigger />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Step 1: Update Dependencies</h4>
              <p className="text-sm text-muted-foreground">
                Install OAuth libraries and update authentication packages
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Step 2: Implement OAuth Flow</h4>
              <p className="text-sm text-muted-foreground">
                Create OAuth endpoints and configure provider settings
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Step 3: Update UI Components</h4>
              <p className="text-sm text-muted-foreground">
                Add OAuth login buttons and update authentication forms
              </p>
            </div>
          </div>
        </PlanContent>
        <PlanFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Execute Plan</Button>
        </PlanFooter>
      </Plan>
    </div>
  ),
};

export const Streaming: Story = {
  render: () => (
    <div className="w-[600px]">
      <Plan isStreaming defaultOpen>
        <PlanHeader>
          <div>
            <PlanTitle>Building New Feature</PlanTitle>
            <PlanDescription>
              Creating a real-time chat component with WebSocket support
            </PlanDescription>
          </div>
          <PlanAction>
            <PlanTrigger />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Analyzing requirements...</h4>
            </div>
          </div>
        </PlanContent>
      </Plan>
    </div>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <div className="w-[600px]">
      <Plan defaultOpen={false}>
        <PlanHeader>
          <div>
            <PlanTitle>Database Migration</PlanTitle>
            <PlanDescription>
              Migrate from PostgreSQL to MongoDB
            </PlanDescription>
          </div>
          <PlanAction>
            <PlanTrigger />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Phase 1: Schema Design</h4>
              <p className="text-sm text-muted-foreground">
                Design MongoDB schema based on existing PostgreSQL structure
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Phase 2: Data Migration</h4>
              <p className="text-sm text-muted-foreground">
                Write migration scripts and test data transfer
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Phase 3: Update Application</h4>
              <p className="text-sm text-muted-foreground">
                Update database queries and ORM configuration
              </p>
            </div>
          </div>
        </PlanContent>
      </Plan>
    </div>
  ),
};

export const WithDetailedSteps: Story = {
  render: () => (
    <div className="w-[700px]">
      <Plan defaultOpen>
        <PlanHeader>
          <div>
            <PlanTitle>E-commerce Checkout Flow</PlanTitle>
            <PlanDescription>
              Implement complete checkout process with payment integration
            </PlanDescription>
          </div>
          <PlanAction>
            <PlanTrigger />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-semibold mb-2">1. Cart Management</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Create cart state management</li>
                <li>• Add/remove items functionality</li>
                <li>• Update quantities</li>
                <li>• Calculate totals and taxes</li>
              </ul>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-semibold mb-2">2. Shipping Information</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Address validation form</li>
                <li>• Shipping options selection</li>
                <li>• Calculate shipping costs</li>
              </ul>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-semibold mb-2">3. Payment Processing</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Integrate Stripe payment</li>
                <li>• Handle payment confirmation</li>
                <li>• Error handling and retries</li>
              </ul>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <h4 className="font-semibold mb-2 text-muted-foreground">4. Order Confirmation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Generate order ID</li>
                <li>• Send confirmation email</li>
                <li>• Display success page</li>
              </ul>
            </div>
          </div>
        </PlanContent>
        <PlanFooter className="flex justify-between">
          <Button variant="ghost">Save Draft</Button>
          <div className="flex gap-2">
            <Button variant="outline">Review</Button>
            <Button>Start Implementation</Button>
          </div>
        </PlanFooter>
      </Plan>
    </div>
  ),
};


