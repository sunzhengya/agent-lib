import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Conversation,
  ConversationMessages,
  ConversationActions,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { Button } from "@/components/ui/button";

const meta = {
  title: "AI Elements/Conversation",
  component: Conversation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Conversation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[700px] h-[600px]">
      <Conversation>
        <ConversationMessages>
          <Message from="user">
            <MessageContent>
              <p>Hello! Can you help me with React?</p>
            </MessageContent>
          </Message>

          <Message from="assistant">
            <MessageContent>
              <MessageResponse>
                Of course! I'd be happy to help you with React. What specific topic or issue would you like to discuss?
              </MessageResponse>
            </MessageContent>
          </Message>

          <Message from="user">
            <MessageContent>
              <p>How do I use useState hook?</p>
            </MessageContent>
          </Message>

          <Message from="assistant">
            <MessageContent>
              <MessageResponse>
                {`The useState hook is used to add state to functional components. Here's a basic example:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

The hook returns an array with two elements: the current state value and a function to update it.`}
              </MessageResponse>
            </MessageContent>
          </Message>
        </ConversationMessages>

        <ConversationActions>
          <Button variant="outline" className="w-full">
            Start New Conversation
          </Button>
        </ConversationActions>
      </Conversation>
    </div>
  ),
};

export const LongConversation: Story = {
  render: () => (
    <div className="w-[700px] h-[600px]">
      <Conversation>
        <ConversationMessages>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>
              <Message from="user">
                <MessageContent>
                  <p>User message {i + 1}</p>
                </MessageContent>
              </Message>
              <Message from="assistant">
                <MessageContent>
                  <MessageResponse>
                    This is assistant response {i + 1}. Here's some helpful information about your question.
                  </MessageResponse>
                </MessageContent>
              </Message>
            </div>
          ))}
        </ConversationMessages>
      </Conversation>
    </div>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <div className="w-[700px] h-[600px]">
      <Conversation>
        <ConversationMessages>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-xl font-semibold mb-2">Start a Conversation</h3>
            <p className="text-muted-foreground mb-4">
              Ask me anything about coding, design, or technology
            </p>
            <Button>Ask a Question</Button>
          </div>
        </ConversationMessages>
      </Conversation>
    </div>
  ),
};


