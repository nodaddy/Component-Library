import { MouseEvent } from "react";
export interface StyledButtonOwnProps {
    label: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => any;
    theme?: 'default' | 'dark';
}
