import React, { FC } from 'react';
import { scaleUp, styled, targetTheme } from '../stitches';
import Stitches from '@stitches/react';
import { MouseEvent } from 'react';

const StyledButton = styled('button', {
  // width and height will only be as that of text content + padding, user can't increase the width beyond that, supporting minimalistic design aproach
  padding: '$2 calc($2 + $3)',
  fontSize: '$2',
  borderWidth: '$1',
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
        background: 'transparent',
        textDecoration: 'underline'
      },
    },
    effect: {
      blink: {
        animation: `${scaleUp} 1s ease-in-out infinite`,
      },
    },
    size: {
      small: {
        fontSize: '$1',
        padding: '$1 $3',
      },
      large: {
        fontSize: '$3',
        padding: '$3 calc($3 + $2)',
      },
    },
  },
});

interface StyledButtonOwnProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => any;
  theme?: 'default' | 'dark';
  loading?: boolean;
}

// extract variants from StyledButton component. This ensures your variants support responsive syntax.
type ButtonWrapVariants = Stitches.VariantProps<typeof StyledButton>;

type StyledButtonProps = StyledButtonOwnProps & ButtonWrapVariants;

const Button: FC<StyledButtonProps> = (props: StyledButtonProps) => {
  const { theme, label, onClick, loading } = props;
  return (
    <>
      <StyledButton
        data-testid='button'
        {...props}
        onClick={onClick}
        className={targetTheme(theme)}
        disabled={loading}
      >
        {label}
      </StyledButton>
    </>
  );
};

export default Button;
