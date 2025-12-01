import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Toast from "../Toast/toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>;

function ToastWrapper(props: any) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 border rounded-xl"
      >
        Show toast
      </button>
      <Toast {...props} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export const Info: Story = {
  render: () => <ToastWrapper message="Info toast" type="info" />, 
};

export const Success: Story = {
  render: () => <ToastWrapper message="Saved successfully!" type="success" />, 
};

export const Error: Story = {
  render: () => <ToastWrapper message="Something went wrong" type="error" />, 
};

export const Warning: Story = {
  render: () => <ToastWrapper message="Be careful" type="warning" />, 
};

export const WithCloseButton: Story = {
  render: () => <ToastWrapper message="Closable toast" closable={true} />, 
};

export const LongDuration: Story = {
  render: () => <ToastWrapper message="Stays for 6s" duration={6000} />, 
};
