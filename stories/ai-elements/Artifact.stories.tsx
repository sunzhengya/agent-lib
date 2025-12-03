import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import {
  Artifact,
  ArtifactHeader,
  ArtifactTitle,
  ArtifactDescription,
  ArtifactActions,
  ArtifactAction,
  ArtifactClose,
  ArtifactContent,
} from "@/components/ai-elements/artifact";
import { Button } from "@/components/ui/button";
import { CodeBlock, CodeBlockCopyButton } from "@/components/ai-elements/code-block";
import { CopyIcon, DownloadIcon, ExternalLinkIcon } from "lucide-react";

const meta = {
  title: "AI Elements/Artifact",
  component: Artifact,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Artifact>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCode = `function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
}`;

export const Default: Story = {
  render: () => (
    <div className="w-[700px]">
      <Artifact>
        <ArtifactHeader>
          <ArtifactTitle>Shopping Cart Calculator</ArtifactTitle>
          <ArtifactActions>
            <ArtifactAction tooltip="Copy" icon={CopyIcon} onClick={fn()} />
            <ArtifactClose onClick={fn()} />
          </ArtifactActions>
        </ArtifactHeader>
        <ArtifactContent>
          <CodeBlock code={sampleCode} language="javascript">
            <CodeBlockCopyButton />
          </CodeBlock>
        </ArtifactContent>
      </Artifact>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="w-[700px]">
      <Artifact>
        <ArtifactHeader>
          <div>
            <ArtifactTitle>React Component</ArtifactTitle>
            <ArtifactDescription>
              A reusable button component with variant support
            </ArtifactDescription>
          </div>
          <ArtifactActions>
            <ArtifactAction tooltip="Copy code" icon={CopyIcon} onClick={fn()} />
            <ArtifactAction tooltip="Download" icon={DownloadIcon} onClick={fn()} />
            <ArtifactClose onClick={fn()} />
          </ArtifactActions>
        </ArtifactHeader>
        <ArtifactContent>
          <CodeBlock
            code={`export function Button({ variant = 'primary', children }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {children}
    </button>
  );
}`}
            language="jsx"
            showLineNumbers
          >
            <CodeBlockCopyButton />
          </CodeBlock>
        </ArtifactContent>
      </Artifact>
    </div>
  ),
};

export const WithTextContent: Story = {
  render: () => (
    <div className="w-[700px]">
      <Artifact>
        <ArtifactHeader>
          <div>
            <ArtifactTitle>Product Requirements Document</ArtifactTitle>
            <ArtifactDescription>Draft v1.0 • Last edited 2 hours ago</ArtifactDescription>
          </div>
          <ArtifactActions>
            <ArtifactAction tooltip="Export" icon={ExternalLinkIcon} onClick={fn()} />
            <ArtifactClose onClick={fn()} />
          </ArtifactActions>
        </ArtifactHeader>
        <ArtifactContent>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>Overview</h3>
            <p>
              This document outlines the requirements for the new user
              authentication system.
            </p>
            <h3>Goals</h3>
            <ul>
              <li>Improve security with OAuth 2.0</li>
              <li>Reduce login friction</li>
              <li>Support multi-factor authentication</li>
            </ul>
            <h3>Technical Requirements</h3>
            <ul>
              <li>Integration with Auth0</li>
              <li>Session management with JWT</li>
              <li>Role-based access control</li>
            </ul>
          </div>
        </ArtifactContent>
      </Artifact>
    </div>
  ),
};


