import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Button - Legacy class component with inline styles
 * This is the original button from 2019
 * @deprecated Use Btn.tsx instead
 */
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isPressed: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  // Deprecated lifecycle method
  componentWillMount() {
    console.log('Button will mount');
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.buttonRef.focus();
    }
  }

  handleClick(e) {
    if (this.props.disabled) return;
    this.setState({ isPressed: true });
    setTimeout(() => this.setState({ isPressed: false }), 150);
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  getStyles() {
    const { variant, size, disabled } = this.props;
    const { isHovered, isPressed } = this.state;

    // Inconsistent color definitions
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'system-ui, sans-serif',
      fontWeight: 500,
      transition: 'all 0.2s ease',
      opacity: disabled ? 0.5 : 1,
    };

    // Size styles with inconsistent naming
    const sizeStyles = {
      small: { padding: '6px 12px', fontSize: '13px' },
      sm: { padding: '6px 12px', fontSize: '13px' }, // Alias
      medium: { padding: '8px 16px', fontSize: '14px' },
      md: { padding: '8px 16px', fontSize: '14px' }, // Alias
      large: { padding: '12px 24px', fontSize: '16px' },
      lg: { padding: '12px 24px', fontSize: '16px' }, // Alias
    };

    // Variant styles with hardcoded colors
    const variantStyles = {
      primary: {
        backgroundColor: isPressed ? '#3730A3' : isHovered ? '#4338CA' : '#4F46E5',
        color: '#FFFFFF',
      },
      secondary: {
        backgroundColor: isHovered ? '#F3F4F6' : '#FFFFFF',
        color: '#374151',
        border: '1px solid #D1D5DB',
      },
      danger: {
        backgroundColor: isPressed ? '#991B1B' : isHovered ? '#B91C1C' : '#DC2626',
        color: '#FFFFFF',
      },
      // Inconsistent naming: 'ghost' elsewhere called 'text' or 'link'
      ghost: {
        backgroundColor: 'transparent',
        color: '#4F46E5',
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  }

  render() {
    const { children, type, disabled, className } = this.props;

    return (
      <button
        ref={(el) => (this.buttonRef = el)}
        type={type}
        disabled={disabled}
        className={className}
        style={this.getStyles()}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost']),
  size: PropTypes.oneOf(['small', 'sm', 'medium', 'md', 'large', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  disabled: false,
  autoFocus: false,
};

export default Button;
