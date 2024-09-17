import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import './index.css';
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Check if rootElement exists (null check for TypeScript)
if (rootElement) {
  // Create a root and render the App
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

