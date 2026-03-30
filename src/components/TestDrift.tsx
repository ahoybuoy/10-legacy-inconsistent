import React from 'react';

export function TestDrift() {
  return (
    <div
      style={{
        background: '#f5f5f5',
        padding: '18px',
        borderRadius: '4px',
        border: '1px solid #d4d4d4',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#3B82F6', color: '#ffffff' }}>
            <th style={{ padding: '10px', textAlign: 'left', fontSize: '13px' }}>Name</th>
            <th style={{ padding: '10px', textAlign: 'left', fontSize: '13px' }}>Status</th>
            <th style={{ padding: '10px', textAlign: 'right', fontSize: '13px' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
            <td style={{ padding: '10px', color: '#171717', fontSize: '14px' }}>Order #1234</td>
            <td style={{ padding: '10px' }}>
              <span
                style={{
                  backgroundColor: '#dcfce7',
                  color: '#166534',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                }}
              >
                Completed
              </span>
            </td>
            <td style={{ padding: '10px', textAlign: 'right', color: '#171717', fontSize: '14px' }}>
              $250.00
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
            <td style={{ padding: '10px', color: '#171717', fontSize: '14px' }}>Order #1235</td>
            <td style={{ padding: '10px' }}>
              <span
                style={{
                  backgroundColor: '#fef9c3',
                  color: '#854d0e',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                }}
              >
                Pending
              </span>
            </td>
            <td style={{ padding: '10px', textAlign: 'right', color: '#171717', fontSize: '14px' }}>
              $180.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
