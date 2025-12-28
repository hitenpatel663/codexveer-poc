import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StylesProvider } from '@mui/styles'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </StrictMode>,
)
