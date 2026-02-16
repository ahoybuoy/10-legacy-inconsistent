import React from 'react';

export class TestDrift extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#be185d', padding: '20px', borderRadius: '10px' }}>
        <h4 style={{ color: '#1f2937', fontSize: '18px', marginBottom: '12px' }}>
          Legacy Test
        </h4>
        <p style={{ color: '#9ca3af', fontSize: '14px' }}>
          Class component with hardcoded styles in a legacy codebase.
        </p>
        <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>Learn more</a>
      </div>
    );
  }
}
