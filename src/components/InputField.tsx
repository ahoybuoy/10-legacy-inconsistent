import React, { forwardRef, useId, useState } from 'react';
import styled, { css } from 'styled-components';

/**
 * InputField - Modern input component with styled-components
 * Different API and styling than Input.jsx
 */

type InputFieldSize = 'xs' | 'sm' | 'md' | 'lg';
type InputFieldState = 'default' | 'error' | 'success' | 'warning';

interface InputFieldProps {
  id?: string;
  name?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  hint?: string;
  state?: InputFieldState;
  message?: string;
  size?: InputFieldSize;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

// Yet another color system - different from other components
const colors = {
  text: {
    primary: '#18181B',
    secondary: '#71717A',
    disabled: '#A1A1AA',
  },
  border: {
    default: '#D4D4D8',
    focus: '#3B82F6',
    error: '#EF4444',
    success: '#22C55E',
    warning: '#F59E0B',
  },
  background: {
    default: '#FFFFFF',
    disabled: '#FAFAFA',
  },
  ring: {
    default: 'rgba(59, 130, 246, 0.2)',
    error: 'rgba(239, 68, 68, 0.2)',
    success: 'rgba(34, 197, 94, 0.2)',
    warning: 'rgba(245, 158, 11, 0.2)',
  },
};

const sizes = {
  xs: { padding: '6px 10px', fontSize: '12px', height: '28px' },
  sm: { padding: '8px 12px', fontSize: '13px', height: '32px' },
  md: { padding: '10px 14px', fontSize: '14px', height: '40px' },
  lg: { padding: '12px 16px', fontSize: '16px', height: '48px' },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label<{ $required?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.text.primary};

  ${(props) =>
    props.$required &&
    css`
      &::after {
        content: ' *';
        color: ${colors.border.error};
      }
    `}
`;

const Hint = styled.span`
  font-size: 12px;
  color: ${colors.text.secondary};
`;

const InputContainer = styled.div<{
  $size: InputFieldSize;
  $state: InputFieldState;
  $focused: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  height: ${(props) => sizes[props.$size].height};
  padding: ${(props) => sizes[props.$size].padding};
  font-size: ${(props) => sizes[props.$size].fontSize};
  background-color: ${(props) =>
    props.$disabled ? colors.background.disabled : colors.background.default};
  border: 1px solid
    ${(props) => {
      if (props.$state !== 'default') return colors.border[props.$state];
      return props.$focused ? colors.border.focus : colors.border.default;
    }};
  border-radius: 6px;
  transition: all 0.15s ease;

  ${(props) =>
    props.$focused &&
    css`
      box-shadow: 0 0 0 3px
        ${props.$state !== 'default'
          ? colors.ring[props.$state]
          : colors.ring.default};
    `}

  ${(props) =>
    props.$disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  color: ${colors.text.primary};

  &::placeholder {
    color: ${colors.text.secondary};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.text.disabled};
  }
`;

const Addon = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.text.secondary};
`;

const Message = styled.span<{ $state: InputFieldState }>`
  font-size: 12px;
  color: ${(props) =>
    props.$state === 'error'
      ? colors.border.error
      : props.$state === 'success'
      ? colors.border.success
      : props.$state === 'warning'
      ? colors.border.warning
      : colors.text.secondary};
`;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      name,
      type = 'text',
      value,
      defaultValue,
      placeholder,
      label,
      hint,
      state = 'default',
      message,
      size = 'md',
      disabled = false,
      readOnly = false,
      required = false,
      leftAddon,
      rightAddon,
      onChange,
      onBlur,
      onFocus,
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    return (
      <Wrapper>
        {(label || hint) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            {label && (
              <Label htmlFor={inputId} $required={required}>
                {label}
              </Label>
            )}
            {hint && <Hint>{hint}</Hint>}
          </div>
        )}

        <InputContainer
          $size={size}
          $state={state}
          $focused={focused}
          $disabled={disabled}
        >
          {leftAddon && <Addon>{leftAddon}</Addon>}
          <StyledInput
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
          />
          {rightAddon && <Addon>{rightAddon}</Addon>}
        </InputContainer>

        {message && <Message $state={state}>{message}</Message>}
      </Wrapper>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
