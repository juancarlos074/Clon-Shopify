import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWrapper from './App.jsx' 
import { AutenContextProvider } from "./supabase/AutenContextProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutenContextProvider>
      <AppWrapper />
    </AutenContextProvider>
  </StrictMode>,
)
