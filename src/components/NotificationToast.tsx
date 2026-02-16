import React from 'react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

export function NotificationToast({ type, message, onClose }: { type: ToastType; message: string; onClose: () => void }) {
  const colors: Record<ToastType, { bg: string; border: string; icon: string }> = {
    success: { bg: '#f0fdf4', border: '#86efac', icon: '#16a34a' },
    error: { bg: '#fef2f2', border: '#fca5a5', icon: '#dc2626' },
    warning: { bg: '#fffbeb', border: '#fcd34d', icon: '#d97706' },
    info: { bg: '#eff6ff', border: '#93c5fd', icon: '#2563eb' },
  };
  const c = colors[type];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 18px',
      backgroundColor: c.bg,
      border: `1px solid ${c.border}`,
      borderRadius: '10px',
      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
      maxWidth: '420px',
      animation: 'slideIn 300ms ease-out',
    }}>
      <div style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: c.icon,
        flexShrink: 0,
      }} />
      <p style={{ fontSize: '14px', color: '#1f2937', flex: 1, margin: 0, lineHeight: 1.4 }}>
        {message}
      </p>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#9ca3af',
          fontSize: '18px',
          padding: '2px',
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}
