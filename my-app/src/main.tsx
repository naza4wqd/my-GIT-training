import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material' // <--- ВАЖНО: Сброс стилей

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline /> {/*<--- ВАЖНО: Вставь это сюда*/}
    <App />
  </React.StrictMode>,
)