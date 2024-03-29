import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta = {
    title: 'Component/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'body'
    },
}
export const Title: Story = {
    args: {
        type: 'title'
    },
}