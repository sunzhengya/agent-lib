import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";

const meta = {
  title: "AI Elements/Suggestion",
  component: Suggestion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "ghost", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Suggestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    suggestion: "Tell me a joke",
  },
};

export const Multiple: Story = {
  render: () => (
    <Suggestions className="w-[600px]">
      <Suggestion suggestion="Tell me a joke" onClick={fn()} />
      <Suggestion suggestion="What's the weather?" onClick={fn()} />
      <Suggestion suggestion="Explain quantum computing" onClick={fn()} />
      <Suggestion suggestion="Write a poem" onClick={fn()} />
    </Suggestions>
  ),
};

export const LongText: Story = {
  render: () => (
    <Suggestions className="w-[600px]">
      <Suggestion 
        suggestion="Can you help me write a comprehensive business proposal for my startup?"
        onClick={fn()}
      />
      <Suggestion 
        suggestion="What are the key differences between TypeScript and JavaScript?"
        onClick={fn()}
      />
      <Suggestion 
        suggestion="Explain how React hooks work under the hood"
        onClick={fn()}
      />
    </Suggestions>
  ),
};

export const CustomChildren: Story = {
  render: () => (
    <Suggestions>
      <Suggestion suggestion="custom">
        🎨 Design Tips
      </Suggestion>
      <Suggestion suggestion="code">
        💻 Code Examples
      </Suggestion>
      <Suggestion suggestion="docs">
        📚 Documentation
      </Suggestion>
    </Suggestions>
  ),
};


