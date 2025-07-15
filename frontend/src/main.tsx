import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline'; // Good for consistent base styles
import AppTheme from './shared-theme/AppTheme.tsx'; // Import the shared theme
// import './index.css'; // Remove or comment this line

// (!) is explicitly asserting to the TypeScript compiler that, at this specific point in the code, 
// the expression document.getElementById('root') will definitely not be null (or undefined).
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Use AppTheme as a component, it already contains its own ThemeProvider */}
      <AppTheme>
        <CssBaseline /> {/* CssBaseline should be inside the theming context */}
        <App />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>,
);