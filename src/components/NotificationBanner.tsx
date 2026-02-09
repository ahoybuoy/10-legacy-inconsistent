import React, { useState } from 'react';

export interface NotificationBannerProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  type = 'info',
  title,
  message,
  dismissible = true,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const typeStyles = {
    info: {
      backgroundColor: '#EBF5FF',
      borderColor: '#3B82F6',
      iconColor: '#2563EB',
      titleColor: '#1E40AF',
    },
    success: {
      backgroundColor: '#F0FDF4',
      borderColor: '#22C55E',
      iconColor: '#16A34A',
      titleColor: '#166534',
    },
    warning: {
      backgroundColor: '#FFFBEB',
      borderColor: '#F59E0B',
      iconColor: '#D97706',
      titleColor: '#92400E',
    },
    error: {
      backgroundColor: '#FEF2F2',
      borderColor: '#EF4444',
      iconColor: '#DC2626',
      titleColor: '#991B1B',
    },
  };

  const colors = typeStyles[type];

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '16px 20px',
        backgroundColor: colors.backgroundColor,
        borderLeft: `4px solid ${colors.borderColor}`,
        borderRadius: '0 8px 8px 0',
        marginBottom: '16px',
      }}
      role="alert"
    >
      <div style={{ flexShrink: 0, marginTop: '2px' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill={colors.iconColor}>
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1" fill="none" />
          <text x="10" y="14" textAnchor="middle" fontSize="12" fill="currentColor">!</text>
        </svg>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontWeight: 600,
            fontSize: '15px',
            color: colors.titleColor,
            marginBottom: '4px',
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.5 }}>
          {message}
        </div>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: '#9CA3AF',
            fontSize: '18px',
            lineHeight: 1,
          }}
          aria-label="Dismiss notification"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default NotificationBanner;
