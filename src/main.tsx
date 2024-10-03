import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Router from './components/Router.tsx'
import PrivyIdProvider from './components/PrivyIdProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <PrivyIdProvider>
        <App />
      </PrivyIdProvider>
    </Router>
  </StrictMode>,
)
