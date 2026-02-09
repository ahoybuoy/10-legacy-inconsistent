import React, { useState } from 'react';

interface SettingsField {
  label: string;
  value: string;
  type: 'text' | 'email' | 'select';
  options?: string[];
}

export const UserSettingsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = ['profile', 'notifications', 'security'];

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '32px 24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '24px' }}>
        Settings
      </h2>

      {/* Tab Navigation */}
      <div
        style={{
          display: 'flex',
          gap: '0',
          borderBottom: '2px solid #E5E7EB',
          marginBottom: '32px',
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: activeTab === tab ? 600 : 400,
              color: activeTab === tab ? '#4F46E5' : '#6B7280',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid #4F46E5' : '2px solid transparent',
              cursor: 'pointer',
              textTransform: 'capitalize',
              marginBottom: '-2px',
              transition: 'all 150ms ease',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Form */}
      {activeTab === 'profile' && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '15px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                outline: 'none',
                color: '#111827',
                backgroundColor: '#FFFFFF',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Email
            </label>
            <input
              type="email"
              defaultValue="john@example.com"
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '15px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                outline: 'none',
                color: '#111827',
                backgroundColor: '#FFFFFF',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
              Bio
            </label>
            <textarea
              rows={4}
              defaultValue="Software developer"
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '15px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                outline: 'none',
                color: '#111827',
                backgroundColor: '#FFFFFF',
                resize: 'vertical',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#374151',
                backgroundColor: '#F3F4F6',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#FFFFFF',
                backgroundColor: '#4F46E5',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSettingsPanel;
