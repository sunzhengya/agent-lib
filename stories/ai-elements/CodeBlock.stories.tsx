import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { CodeBlock, CodeBlockCopyButton } from "@/components/ai-elements/code-block";

const meta = {
  title: "AI Elements/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleJavaScript = `function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');`;

const sampleTypeScript = `interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return {
    id,
    name: 'John Doe',
    email: 'john@example.com'
  };
}`;

const samplePython = `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Calculate first 10 numbers
for i in range(10):
    print(fibonacci(i))`;

export const JavaScript: Story = {
  args: {
    code: sampleJavaScript,
    language: "javascript",
  },
  render: (args) => (
    <div className="w-[600px]">
      <CodeBlock {...args} />
    </div>
  ),
};

export const TypeScript: Story = {
  args: {
    code: sampleTypeScript,
    language: "typescript",
  },
  render: (args) => (
    <div className="w-[600px]">
      <CodeBlock {...args} />
    </div>
  ),
};

export const Python: Story = {
  args: {
    code: samplePython,
    language: "python",
  },
  render: (args) => (
    <div className="w-[600px]">
      <CodeBlock {...args} />
    </div>
  ),
};

export const WithLineNumbers: Story = {
  args: {
    code: sampleTypeScript,
    language: "typescript",
    showLineNumbers: true,
  },
  render: (args) => (
    <div className="w-[600px]">
      <CodeBlock {...args} />
    </div>
  ),
};

export const WithCopyButton: Story = {
  render: () => (
    <div className="w-[600px]">
      <CodeBlock code={sampleJavaScript} language="javascript">
        <CodeBlockCopyButton onCopy={fn()} onError={fn()} />
      </CodeBlock>
    </div>
  ),
};

export const JSX: Story = {
  args: {
    code: `function Button({ children, onClick }) {
  return (
    <button 
      className="btn btn-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
    language: "jsx",
  },
  render: (args) => (
    <div className="w-[600px]">
      <CodeBlock {...args}>
        <CodeBlockCopyButton />
      </CodeBlock>
    </div>
  ),
};

export const CSS: Story = {
  args: {
    code: `.button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
  transition: all 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}`,
    language: "css",
    showLineNumbers: true,
  },
  render: (args) => (
    <div className="w-[600px]">
      <CodeBlock {...args}>
        <CodeBlockCopyButton />
      </CodeBlock>
    </div>
  ),
};


