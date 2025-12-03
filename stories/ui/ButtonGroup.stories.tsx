import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const meta = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="outline" size="icon">
        <ChevronLeftIcon />
      </Button>
      <ButtonGroupText>Page 1 of 10</ButtonGroupText>
      <Button variant="outline" size="icon">
        <ChevronRightIcon />
      </Button>
    </ButtonGroup>
  ),
};

export const Mixed: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="outline">Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button>Submit</Button>
    </ButtonGroup>
  ),
};


