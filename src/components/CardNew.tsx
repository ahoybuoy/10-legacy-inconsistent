import React from 'react';
import styled from 'styled-components';

/**
 * CardNew - Modern card component using styled-components
 * Part of 2023 design system refresh
 * Different API than Card.jsx
 */

interface CardNewProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

// Different design tokens than Card.jsx
const theme = {
  colors: {
    background: '#FFFFFF',
    backgroundSubtle: '#F9FAFB',
    border: '#E5E7EB',
    borderHover: '#D1D5DB',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  radii: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  spacing: {
    none: '0px',
    sm: '12px',
    md: '16px',
    lg: '24px',
  },
};

const StyledCard = styled.div<{
  $variant: string;
  $padding: string;
  $radius: string;
  $interactive: boolean;
}>`
  background-color: ${(props) =>
    props.$variant === 'filled'
      ? theme.colors.backgroundSubtle
      : theme.colors.background};
  border-radius: ${(props) => theme.radii[props.$radius as keyof typeof theme.radii]};
  padding: ${(props) => theme.spacing[props.$padding as keyof typeof theme.spacing]};

  ${(props) => {
    switch (props.$variant) {
      case 'elevated':
        return `box-shadow: ${theme.shadows.md};`;
      case 'outlined':
        return `border: 1px solid ${theme.colors.border};`;
      case 'filled':
      default:
        return '';
    }
  }}

  ${(props) =>
    props.$interactive &&
    `
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      ${
        props.$variant === 'elevated'
          ? `box-shadow: ${theme.shadows.lg};`
          : props.$variant === 'outlined'
          ? `border-color: ${theme.colors.borderHover};`
          : `background-color: ${theme.colors.border};`
      }
    }
  `}
`;

export const CardNew: React.FC<CardNewProps> = ({
  variant = 'elevated',
  padding = 'md',
  radius = 'md',
  interactive = false,
  children,
  onClick,
}) => {
  return (
    <StyledCard
      $variant={variant}
      $padding={padding}
      $radius={radius}
      $interactive={interactive}
      onClick={interactive ? onClick : undefined}
    >
      {children}
    </StyledCard>
  );
};

// Also export a Header and Body for composition
export const CardHeader = styled.div`
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const CardDescription = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: #6b7280;
`;

export const CardBody = styled.div``;

export const CardFooter = styled.div`
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid ${theme.colors.border};
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export default CardNew;
