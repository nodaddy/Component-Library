import { FC } from "react";
import Stitches from "@stitches/react";
import { MouseEvent } from "react";
declare const StyledButton: import("@stitches/react/types/styled-component").StyledComponent<"button", {
    type?: "link" | undefined;
    effect?: "blink" | undefined;
    size?: "small" | "large" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        background: string;
        text: string;
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        shadow: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    fonts: {
        untitled: string;
        mono: string;
    };
    fontWeights: {
        1: string;
        2: string;
        3: string;
    };
    lineHeights: unknown;
    letterSpacings: unknown;
    sizes: unknown;
    borderWidths: {
        0: string;
        1: string;
        2: string;
    };
    borderStyles: unknown;
    radii: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    shadows: {
        0: string;
        1: string;
        2: string;
        3: string;
    };
    zIndices: unknown;
    transitions: unknown;
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>;
interface StyledButtonOwnProps {
    label: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => any;
    theme?: "default" | "dark";
    loading?: boolean;
}
type ButtonWrapVariants = Stitches.VariantProps<typeof StyledButton>;
type StyledButtonProps = StyledButtonOwnProps & ButtonWrapVariants;
declare const Button: FC<StyledButtonProps>;
export default Button;
