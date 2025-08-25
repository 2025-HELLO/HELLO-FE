import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css.ts';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((reg) => {
      console.log('[FCM] Service Worker registered:', reg);
    })
    .catch((err) => {
      console.error('[FCM] Service Worker registration failed:', err);
    });
}
