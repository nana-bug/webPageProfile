import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Finding the HTML element with id="root" to inject our React app into
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Creating the React root and rendering the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);