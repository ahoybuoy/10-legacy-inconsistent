import React from 'react';

// Alert banner with inconsistent styling (legacy pattern)
interface AlertBannerProps {
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  onDismiss?: () => void;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ type, title, message, onDismiss }) => {
  const colors = {
    info: { bg: '#eff6ff', border: '#3b82f6', text: '#1e40af', icon: 'ℹ️' },
    warning: { bg: '#fffbeb', border: '#f59e0b', text: '#92400e', icon: '⚠️' },
    error: { bg: '#fef2f2', border: '#ef4444', text: '#991b1b', icon: '❌' },
    success: { bg: '#f0fdf4', border: '#22c55e', text: '#166534', icon: '✅' },
  };

  const c = colors[type];

  return (
    <div style={{
      padding: '14px 18px',
      backgroundColor: c.bg,
      borderRadius: '10px',
      borderLeft: `4px solid ${c.border}`,
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      transition: 'all 250ms ease',
      opacity: 0.95,
      zIndex: 100,
    }}>
      <span style={{ fontSize: '18px', lineHeight: 1.4 }}>{c.icon}</span>

      <div style={{ flex: 1 }}>
        <h4 style={{
          fontSize: '15px',
          fontWeight: 600,
          color: c.text,
          marginBottom: '4px',
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: '13px',
          color: c.text,
          opacity: 0.8,
          lineHeight: 1.5,
        }}>
          {message}
        </p>
      </div>

      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            padding: '4px 8px',
            backgroundColor: 'transparent',
            border: `1px solid ${c.border}`,
            borderRadius: '6px',
            color: c.text,
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'opacity 150ms ease',
            opacity: 0.7,
          }}
        >
          Dismiss
        </button>
      )}
    </div>
  );
};
