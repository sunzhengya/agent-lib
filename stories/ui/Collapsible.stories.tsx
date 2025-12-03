import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

const meta = {
  title: "UI/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px]">
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="w-full justify-between">
          Can I use this in my project?
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pt-2 pb-4">
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const WithMultipleItems: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            Is it accessible?
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pt-2 pb-4">
          Yes. It adheres to the WAI-ARIA design pattern.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            Is it styled?
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pt-2 pb-4">
          Yes. It comes with default styles that match the other components.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};


