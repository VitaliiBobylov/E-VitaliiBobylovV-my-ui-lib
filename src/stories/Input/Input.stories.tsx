import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
};

export const WithClear: Story = {
  args: {
    type: "text",
    clearable: true,
    placeholder: "Clearable input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const PasswordWithClear: Story = {
  args: {
    type: "password",
    clearable: true,
    placeholder: "Password + clear button",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "123",
  },
};
