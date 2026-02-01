import React from 'react';
import styled from 'styled-components';

/**
 * Btn - Modern functional component with styled-components
 * Created during 2022 modernization effort
 * Note: Name is inconsistent with Button.jsx
 */

type BtnVariant = 'primary' | 'secondary' | 'destructive' | 'outline';
type BtnSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BtnProps {
  variant?: BtnVariant;
  size?: BtnSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// Different color palette than Button.jsx
const colors = {
  primary: '#6366F1',
  primaryHover: '#4F46E5',
  destructive: '#EF4444',
  destructiveHover: '#DC2626',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray700: '#374151',
  white: '#FFFFFF',
};

// Different size scale than Button.jsx
const sizes = {
  xs: { padding: '4px 8px', fontSize: '12px' },
  sm: { padding: '6px 12px', fontSize: '13px' },
  md: { padding: '10px 18px', fontSize: '14px' },
  lg: { padding: '14px 24px', fontSize: '16px' },
  xl: { padding: '18px 32px', fontSize: '18px' },
};

const StyledBtn = styled.button<{
  $variant: BtnVariant;
  $size: BtnSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 6px;
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms ease;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};

  padding: ${(props) => sizes[props.$size].padding};
  font-size: ${(props) => sizes[props.$size].fontSize};

  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return `
          background-color: ${colors.primary};
          color: ${colors.white};
          &:hover:not(:disabled) {
            background-color: ${colors.primaryHover};
          }
        `;
      case 'destructive':
        return `
          background-color: ${colors.destructive};
          color: ${colors.white};
          &:hover:not(:disabled) {
            background-color: ${colors.destructiveHover};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${colors.gray700};
          border: 1px solid ${colors.gray200};
          &:hover:not(:disabled) {
            background-color: ${colors.gray100};
          }
        `;
      case 'secondary':
      default:
        return `
          background-color: ${colors.gray100};
          color: ${colors.gray700};
          &:hover:not(:disabled) {
            background-color: ${colors.gray200};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Spinner = styled.span`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
`;

export const Btn: React.FC<BtnProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <StyledBtn
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <Spinner /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </StyledBtn>
  );
};

export default Btn;
