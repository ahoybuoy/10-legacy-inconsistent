import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.css'; // External CSS file

/**
 * ButtonComponent - Another button variant using external CSS
 * Created by a contractor in 2020
 * TODO: Consolidate with Button.jsx and Btn.tsx
 */
function ButtonComponent({
  label,
  onClick,
  type = 'button',
  variant = 'default',
  size = 'regular',
  icon,
  iconPosition = 'left',
  isDisabled = false,
  isLoading = false,
  ariaLabel,
}) {
  const classNames = [
    'btn-component',
    `btn-component--${variant}`,
    `btn-component--${size}`,
    isDisabled && 'btn-component--disabled',
    isLoading && 'btn-component--loading',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={isDisabled || isLoading ? undefined : onClick}
      disabled={isDisabled}
      aria-label={ariaLabel || label}
      aria-busy={isLoading}
    >
      {isLoading && (
        <span className="btn-component__spinner" aria-hidden="true" />
      )}
      {!isLoading && icon && iconPosition === 'left' && (
        <span className="btn-component__icon btn-component__icon--left">
          {icon}
        </span>
      )}
      <span className="btn-component__label">{label}</span>
      {!isLoading && icon && iconPosition === 'right' && (
        <span className="btn-component__icon btn-component__icon--right">
          {icon}
        </span>
      )}
    </button>
  );
}

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  // Different variant names than other buttons
  variant: PropTypes.oneOf(['default', 'accent', 'negative', 'subtle']),
  // Different size names than other buttons
  size: PropTypes.oneOf(['compact', 'regular', 'spacious']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default ButtonComponent;
