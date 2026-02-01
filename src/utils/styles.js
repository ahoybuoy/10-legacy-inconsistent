/**
 * Style utility functions - legacy approach
 * Used by older components before styled-components adoption
 */

// Color manipulation utilities
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

export function rgba(hex, alpha) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

// Theme colors - ANOTHER set of colors, different from others!
export const colors = {
  brand: {
    primary: '#5B5BD6',
    secondary: '#F97316',
    accent: '#8B5CF6',
  },
  ui: {
    background: '#FFFFFF',
    foreground: '#18181B',
    muted: '#71717A',
    border: '#E4E4E7',
  },
  status: {
    success: '#22C55E',
    warning: '#FACC15',
    error: '#EF4444',
    info: '#0EA5E9',
  },
};

// Spacing scale helper
export const spacing = (multiplier) => `${multiplier * 4}px`;

// Media query helpers
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const mediaQuery = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
};

// Style merge utility (like classnames but for style objects)
export function mergeStyles(...styles) {
  return styles.reduce((merged, style) => {
    if (!style) return merged;
    return { ...merged, ...style };
  }, {});
}

// Conditional styles helper
export function conditionalStyles(condition, trueStyles, falseStyles = {}) {
  return condition ? trueStyles : falseStyles;
}

// Common style patterns
export const commonStyles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  },
};

// Shadow presets (different from other shadow definitions)
export const shadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
  sm: '0 2px 4px rgba(0, 0, 0, 0.06)',
  md: '0 4px 8px rgba(0, 0, 0, 0.08)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
  xl: '0 16px 32px rgba(0, 0, 0, 0.12)',
  '2xl': '0 24px 48px rgba(0, 0, 0, 0.16)',
};

// Border radius presets (different from CSS variables!)
export const radii = {
  none: '0',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
};
