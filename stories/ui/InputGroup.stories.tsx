import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
} from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react";

const meta = {
  title: "UI/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLeftAddon: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <InputLeftAddon>https://</InputLeftAddon>
      <Input placeholder="example.com" />
    </InputGroup>
  ),
};

export const WithRightAddon: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <Input placeholder="username" />
      <InputRightAddon>@example.com</InputRightAddon>
    </InputGroup>
  ),
};

export const WithBothAddons: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <InputLeftAddon>$</InputLeftAddon>
      <Input type="number" placeholder="0.00" />
      <InputRightAddon>USD</InputRightAddon>
    </InputGroup>
  ),
};

export const WithLeftElement: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <InputLeftElement>
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
      </InputLeftElement>
      <Input placeholder="Search..." className="pl-10" />
    </InputGroup>
  ),
};

export const WithRightElement: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <Input type="password" placeholder="Enter password" className="pr-10" />
      <InputRightElement>
        <Button variant="ghost" size="icon-sm" type="button">
          <EyeIcon className="h-4 w-4" />
        </Button>
      </InputRightElement>
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <Input placeholder="Enter your email" />
      <InputRightAddon className="p-0">
        <Button className="rounded-l-none">Subscribe</Button>
      </InputRightAddon>
    </InputGroup>
  ),
};

export const WithLoading: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <Input placeholder="Loading..." className="pr-10" />
      <InputRightElement>
        <LoaderIcon className="h-4 w-4 animate-spin text-muted-foreground" />
      </InputRightElement>
    </InputGroup>
  ),
};


