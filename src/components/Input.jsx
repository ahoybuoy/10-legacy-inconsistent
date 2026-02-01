import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Input - Legacy class component with inline styles
 * Original form input from 2018
 * @deprecated Use InputField.tsx
 */
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      value: props.defaultValue || '',
    };
    this.inputRef = React.createRef();
  }

  // Deprecated lifecycle
  componentWillMount() {
    if (this.props.value !== undefined) {
      this.setState({ value: this.props.value });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== undefined && nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  handleChange = (e) => {
    const value = e.target.value;
    if (this.props.value === undefined) {
      this.setState({ value });
    }
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  focus() {
    this.inputRef.current.focus();
  }

  render() {
    const {
      type,
      name,
      placeholder,
      label,
      error,
      helperText,
      disabled,
      required,
      size,
    } = this.props;
    const { isFocused, value } = this.state;

    // Hardcoded color values - inconsistent with other components
    const wrapperStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    };

    const labelStyle = {
      fontSize: '14px',
      fontWeight: 500,
      color: '#344054',
      marginBottom: '6px',
    };

    const inputStyle = {
      padding: size === 'sm' ? '8px 12px' : size === 'lg' ? '14px 16px' : '10px 14px',
      fontSize: size === 'sm' ? '13px' : size === 'lg' ? '16px' : '14px',
      border: `1px solid ${error ? '#F04438' : isFocused ? '#7F56D9' : '#D0D5DD'}`,
      borderRadius: '8px',
      outline: 'none',
      backgroundColor: disabled ? '#F9FAFB' : '#FFFFFF',
      color: '#101828',
      fontFamily: 'Inter, system-ui, sans-serif',
      transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
      boxShadow: isFocused
        ? error
          ? '0 0 0 4px #FEE4E2'
          : '0 0 0 4px #F4EBFF'
        : 'none',
    };

    const helperStyle = {
      fontSize: '12px',
      color: error ? '#F04438' : '#667085',
      marginTop: '4px',
    };

    return (
      <div style={wrapperStyle}>
        {label && (
          <label style={labelStyle}>
            {label}
            {required && <span style={{ color: '#F04438' }}> *</span>}
          </label>
        )}
        <input
          ref={this.inputRef}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          style={inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
        {helperText && <span style={helperStyle}>{helperText}</span>}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url']),
  name: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  size: 'md',
  disabled: false,
  required: false,
  error: false,
};

export default Input;
