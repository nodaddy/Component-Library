import React, { FC } from "react";
import { StyledButtonOwnProps } from "./button.types";
import { scaleUp, styled, targetTheme } from "../stitches";
import Stitches from '@stitches/react';



const StyledButton = styled('button', {
    padding: '$2 $3',
    fontSize: '$2',
    borderWidth: '$1',
    cursor: 'pointer',
    borderRadius: '$2',
    background: '$background',
    borderColor: '$shadow',
    color: '$primary',
    boxShadow: '$2',
    variants: {
        type: {
            link: {
                borderWidth: '$0',
                boxShadow: '$0',
                background: 'transparent'
            }
        },
        effect: {
            blink: {
                animation: `${scaleUp} 1s ease-in-out infinite`,
            }
        },
        size: {
            small: {
                fontSize: '$1',
                padding: '$1 $3'
            },
            large: {
                fontSize: '$3',
                padding: '$3 calc($3 + $2)'
            }
        }
    },
    
});


// extract variants from StyledButton component. This ensures your variants support responsive syntax.
type ButtonWrapVariants = Stitches.VariantProps<typeof StyledButton>

type StyledButtonProps = StyledButtonOwnProps & ButtonWrapVariants;

const Button:FC<StyledButtonProps> = (props: StyledButtonProps) => {
    const { theme, label, onClick } = props;
    return <StyledButton {...props} onClick={onClick} className={targetTheme(theme)}> { label } </StyledButton>;
}

export default Button;