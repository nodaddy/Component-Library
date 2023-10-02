/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("../button/button.types").StyledButtonOwnProps & import("@stitches/react/types/styled-component").TransformProps<{
        type?: "link" | undefined;
        effect?: "blink" | undefined;
        size?: "small" | "large" | undefined;
    }, {}>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        label: {
            control: string;
            description: string;
        };
        type: {
            control: string;
            description: string;
            options: string[];
        };
        size: {
            control: string;
            description: string;
            options: string[];
        };
        effect: {
            control: string;
            description: string;
            options: string[];
        };
        onClick: {
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
