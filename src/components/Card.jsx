import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Card - Legacy class component with inline styles
 * Original implementation from 2018
 */
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  // Deprecated lifecycle
  componentWillReceiveProps(nextProps) {
    if (nextProps.collapsed !== this.props.collapsed) {
      this.setState({ isExpanded: !nextProps.collapsed });
    }
  }

  toggleExpand = () => {
    if (this.props.expandable) {
      this.setState((prev) => ({ isExpanded: !prev.isExpanded }));
      if (this.props.onToggle) {
        this.props.onToggle(!this.state.isExpanded);
      }
    }
  };

  render() {
    const {
      title,
      subtitle,
      children,
      footer,
      elevation,
      bordered,
      expandable,
    } = this.props;
    const { isExpanded } = this.state;

    // Inline style object with hardcoded values
    const cardStyle = {
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      overflow: 'hidden',
      // Different shadow implementation
      boxShadow:
        elevation === 'high'
          ? '0 10px 40px rgba(0,0,0,0.15)'
          : elevation === 'medium'
          ? '0 4px 12px rgba(0,0,0,0.1)'
          : '0 1px 3px rgba(0,0,0,0.08)',
      border: bordered ? '1px solid #E2E8F0' : 'none',
      transition: 'box-shadow 0.2s ease',
    };

    const headerStyle = {
      padding: '16px 20px',
      borderBottom: title ? '1px solid #EDF2F7' : 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: expandable ? 'pointer' : 'default',
    };

    const titleStyle = {
      margin: 0,
      fontSize: '18px',
      fontWeight: 600,
      color: '#1A202C',
      fontFamily: 'system-ui',
    };

    const subtitleStyle = {
      margin: '4px 0 0',
      fontSize: '14px',
      color: '#718096',
    };

    const bodyStyle = {
      padding: '20px',
      display: expandable && !isExpanded ? 'none' : 'block',
    };

    const footerStyle = {
      padding: '12px 20px',
      borderTop: '1px solid #EDF2F7',
      backgroundColor: '#F7FAFC',
      color: '#5A67D8',
    };

    return (
      <div style={cardStyle}>
        {(title || subtitle) && (
          <div style={headerStyle} onClick={this.toggleExpand}>
            <div>
              {title && <h3 style={titleStyle}>{title}</h3>}
              {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
            </div>
            {expandable && (
              <span
                style={{
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                ▼
              </span>
            )}
          </div>
        )}
        <div style={bodyStyle}>{children}</div>
        {footer && <div style={footerStyle}>{footer}</div>}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  elevation: PropTypes.oneOf(['low', 'medium', 'high']),
  bordered: PropTypes.bool,
  expandable: PropTypes.bool,
  collapsed: PropTypes.bool,
  onToggle: PropTypes.func,
};

Card.defaultProps = {
  elevation: 'low',
  bordered: false,
  expandable: false,
  collapsed: false,
};

export default Card;
