# Test Repo 10: Legacy Inconsistent Codebase

## Purpose
Tests Buoy's ability to analyze legacy codebases with mixed patterns and inconsistencies.

## What This Tests
- **Mixed component patterns**: Class components vs function components vs hooks
- **Styling chaos**: CSS modules, styled-components, inline styles all mixed
- **Naming inconsistencies**: Button vs Btn vs ButtonComponent vs ButtonWrapper
- **Deprecated patterns**: Old React patterns like componentWillMount
- **Gradual migration**: Some files modernized, others legacy

## Structure
```
10-legacy-inconsistent/
├── src/
│   ├── components/
│   │   ├── Button.jsx           # Old class component
│   │   ├── Btn.tsx              # Newer function component
│   │   ├── ButtonComponent.js   # Another button variant
│   │   ├── Card.jsx             # Class component with inline styles
│   │   ├── CardNew.tsx          # Modern function component
│   │   ├── Modal.jsx            # Uses styled-components
│   │   ├── ModalWrapper.tsx     # Uses CSS modules
│   │   ├── Input.jsx            # Legacy with PropTypes
│   │   └── InputField.tsx       # Modern with TypeScript
│   ├── pages/
│   │   └── Dashboard.jsx        # Mix of everything
│   ├── utils/
│   │   └── styles.js            # Utility style functions
│   └── styles/
│       ├── variables.css        # Old CSS variables
│       ├── Modal.module.css     # CSS module
│       └── global.scss          # SCSS file
└── package.json
```

## Expected Findings
1. **Naming inconsistencies**: Multiple components with similar purposes but different names
2. **Style strategy chaos**: No consistent approach to styling
3. **React pattern mix**: Old class lifecycle vs modern hooks
4. **Type system gap**: Some TS, some JS, some with PropTypes
5. **Token-like values scattered**: Colors/spacing repeated inconsistently
