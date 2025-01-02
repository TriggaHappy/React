import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './section 1/section_one_index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
