import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Task,
  TaskTrigger,
  TaskContent,
  TaskItem,
  TaskItemFile,
} from "@/components/ai-elements/task";

const meta = {
  title: "AI Elements/Task",
  component: Task,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <Task>
        <TaskTrigger title="Searching codebase" />
        <TaskContent>
          <TaskItem>Found 3 relevant files</TaskItem>
          <TaskItem>
            <TaskItemFile>src/components/Button.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>
            <TaskItemFile>src/components/Input.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>
            <TaskItemFile>src/components/Card.tsx</TaskItemFile>
          </TaskItem>
        </TaskContent>
      </Task>
    </div>
  ),
};

export const MultipleTasks: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <Task>
        <TaskTrigger title="Analyzing requirements" />
        <TaskContent>
          <TaskItem>✓ Parsed user input</TaskItem>
          <TaskItem>✓ Identified key components</TaskItem>
          <TaskItem>✓ Created task plan</TaskItem>
        </TaskContent>
      </Task>

      <Task>
        <TaskTrigger title="Generating code" />
        <TaskContent>
          <TaskItem>Creating component structure</TaskItem>
          <TaskItem>
            <TaskItemFile>src/components/NewFeature.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>Adding type definitions</TaskItem>
        </TaskContent>
      </Task>

      <Task defaultOpen={false}>
        <TaskTrigger title="Running tests" />
        <TaskContent>
          <TaskItem>Test suite passed</TaskItem>
          <TaskItem>12/12 tests passing</TaskItem>
        </TaskContent>
      </Task>
    </div>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <div className="w-[600px]">
      <Task>
        <TaskTrigger title="Refactoring components" />
        <TaskContent>
          <TaskItem>
            Analyzing component dependencies in the project
          </TaskItem>
          <TaskItem>
            <TaskItemFile>src/components/forms/LoginForm.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>
            <TaskItemFile>src/components/forms/SignupForm.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>
            <TaskItemFile>src/components/auth/AuthProvider.tsx</TaskItemFile>
          </TaskItem>
          <TaskItem>
            <TaskItemFile>src/hooks/useAuth.ts</TaskItemFile>
          </TaskItem>
          <TaskItem>
            Extracting common logic into shared utilities
          </TaskItem>
          <TaskItem>
            Creating new abstraction layer for authentication
          </TaskItem>
        </TaskContent>
      </Task>
    </div>
  ),
};

export const CollapsedByDefault: Story = {
  render: () => (
    <div className="w-[500px]">
      <Task defaultOpen={false}>
        <TaskTrigger title="Installing dependencies" />
        <TaskContent>
          <TaskItem>npm install completed</TaskItem>
          <TaskItem>32 packages installed</TaskItem>
        </TaskContent>
      </Task>
    </div>
  ),
};


