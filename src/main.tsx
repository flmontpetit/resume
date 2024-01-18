import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './static/translation.json';

i18next.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "en",
  resources: translation,
  interpolation: {
    escapeValue: false
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
