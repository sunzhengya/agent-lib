import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import {
  Message,
  MessageContent,
  MessageActions,
  MessageAction,
  MessageResponse,
  MessageBranch,
  MessageBranchContent,
  MessageBranchSelector,
  MessageBranchPrevious,
  MessageBranchNext,
  MessageBranchPage,
  MessageAttachment,
  MessageAttachments,
  MessageToolbar,
} from "@/components/ai-elements/message";
import { CopyIcon, ThumbsUpIcon, ThumbsDownIcon } from "lucide-react";

const meta = {
  title: "AI Elements/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  render: () => (
    <div className="w-[600px]">
      <Message from="user">
        <MessageContent>
          <p>How do I create a React component?</p>
        </MessageContent>
      </Message>
    </div>
  ),
};

export const AssistantMessage: Story = {
  render: () => (
    <div className="w-[600px]">
      <Message from="assistant">
        <MessageContent>
          <MessageResponse>
            {`To create a React component, you can use either a function or a class. Here's a simple example:

\`\`\`jsx
function MyComponent() {
  return <div>Hello World</div>;
}
\`\`\``}
          </MessageResponse>
        </MessageContent>
        <MessageActions>
          <MessageAction tooltip="Copy" onClick={fn()}>
            <CopyIcon />
          </MessageAction>
          <MessageAction tooltip="Good response" onClick={fn()}>
            <ThumbsUpIcon />
          </MessageAction>
          <MessageAction tooltip="Bad response" onClick={fn()}>
            <ThumbsDownIcon />
          </MessageAction>
        </MessageActions>
      </Message>
    </div>
  ),
};

export const MessageWithBranches: Story = {
  render: () => (
    <div className="w-[700px]">
      <MessageBranch defaultBranch={0}>
        <Message from="assistant">
          <MessageBranchContent>
            <MessageContent key="branch1">
              <MessageResponse>
                This is the first version of the response. It provides one approach to solving the problem.
              </MessageResponse>
            </MessageContent>
            <MessageContent key="branch2">
              <MessageResponse>
                This is an alternative response. It suggests a different approach that might be more suitable.
              </MessageResponse>
            </MessageContent>
            <MessageContent key="branch3">
              <MessageResponse>
                Here's a third option. This combines elements from both previous approaches for a balanced solution.
              </MessageResponse>
            </MessageContent>
          </MessageBranchContent>
          <MessageBranchSelector from="assistant">
            <MessageBranchPrevious />
            <MessageBranchPage />
            <MessageBranchNext />
          </MessageBranchSelector>
        </Message>
      </MessageBranch>
    </div>
  ),
};

export const Conversation: Story = {
  render: () => (
    <div className="w-[700px] space-y-4">
      <Message from="user">
        <MessageContent>
          <p>Can you help me debug this code?</p>
        </MessageContent>
      </Message>

      <Message from="assistant">
        <MessageContent>
          <MessageResponse>
            Of course! I'd be happy to help you debug your code. 
            Could you please share the code that's causing issues?
          </MessageResponse>
        </MessageContent>
      </Message>

      <Message from="user">
        <MessageContent>
          <MessageResponse>
            {`\`\`\`javascript
function sum(a, b) {
  return a + b;
}
\`\`\``}
          </MessageResponse>
        </MessageContent>
      </Message>

      <Message from="assistant">
        <MessageContent>
          <MessageResponse>
            Your code looks good! The function will add two numbers together. 
            Is there a specific issue you're experiencing?
          </MessageResponse>
        </MessageContent>
        <MessageActions>
          <MessageAction tooltip="Copy" onClick={fn()}>
            <CopyIcon />
          </MessageAction>
          <MessageAction tooltip="Good response" onClick={fn()}>
            <ThumbsUpIcon />
          </MessageAction>
        </MessageActions>
      </Message>
    </div>
  ),
};

export const WithAttachments: Story = {
  render: () => (
    <div className="w-[700px]">
      <Message from="user">
        <MessageAttachments>
          <MessageAttachment
            data={{
              filename: "screenshot.png",
              mediaType: "image/png",
              url: "https://via.placeholder.com/100",
            }}
            onRemove={fn()}
          />
          <MessageAttachment
            data={{
              filename: "document.pdf",
              mediaType: "application/pdf",
            }}
            onRemove={fn()}
          />
        </MessageAttachments>
        <MessageContent>
          <p>Here are the files you requested</p>
        </MessageContent>
      </Message>
    </div>
  ),
};


