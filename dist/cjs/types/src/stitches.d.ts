/// <reference types="react" />
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
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
}, import("@stitches/react/types/config").DefaultThemeMap, {}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
export declare const darkTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
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
    lineHeights: {};
    letterSpacings: {};
    sizes: {};
    borderWidths: {
        0: string;
        1: string;
        2: string;
    };
    borderStyles: {};
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
    zIndices: {};
    transitions: {};
}, "">;
export declare const targetTheme: (theme: string | undefined) => "" | (string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
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
    lineHeights: {};
    letterSpacings: {};
    sizes: {};
    borderWidths: {
        0: string;
        1: string;
        2: string;
    };
    borderStyles: {};
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
    zIndices: {};
    transitions: {};
}, "">);
export declare const scaleUp: {
    (): string;
    name: string;
};
