import React from 'react';

type AlertType = 'info' | 'success' | 'warn' | 'danger';

interface AlertBannerProps {
  type?: AlertType;
  title: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

// Yet another component naming convention in this codebase...
const AlertBanner: React.FC<AlertBannerProps> = ({
  type = 'info',
  title,
  message,
  dismissible,
  onDismiss,
}) => {
  const styles: Record<AlertType, { bg: string; border: string; title: string; text: string }> = {
    info: { bg: '#eff6ff', border: '#3b82f6', title: '#1d4ed8', text: '#1e40af' },
    success: { bg: '#f0fdf4', border: '#22c55e', title: '#15803d', text: '#166534' },
    warn: { bg: '#fffbeb', border: '#f59e0b', title: '#b45309', text: '#92400e' },
    danger: { bg: '#fef2f2', border: '#ef4444', title: '#b91c1c', text: '#991b1b' },
  };

  const s = styles[type];

  return (
    <div
      style={{
        backgroundColor: s.bg,
        borderLeft: `4px solid ${s.border}`,
        borderRadius: '6px',
        padding: '16px 20px',
        marginBottom: '16px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ color: s.title, fontSize: '15px', fontWeight: 600, margin: '0 0 4px 0' }}>
            {title}
          </h4>
          <p style={{ color: s.text, fontSize: '14px', margin: 0, lineHeight: 1.5 }}>
            {message}
          </p>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            style={{
              background: 'none',
              border: 'none',
              color: s.title,
              cursor: 'pointer',
              fontSize: '20px',
              lineHeight: 1,
              padding: '0 0 0 16px',
            }}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;
