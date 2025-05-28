import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeModeProvider } from './Components/ThemeContext';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeModeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeModeProvider>,
)
