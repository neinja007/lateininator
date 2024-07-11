import Button from "@/components/common/Button"
import "../app/globals.css"
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta: Meta<typeof Button> = { component: Button };
export default meta;

type Story = StoryObj<typeof Button>;

export const Normal: Story = { args: { children: "LOGIN" } };