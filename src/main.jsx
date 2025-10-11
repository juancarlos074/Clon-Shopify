import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWrapper from './App.jsx'  // 👈 Importa el AppWrapper (que ya tiene BrowserRouter)
import { AutenContextProvider } from "./supabase/AutenContextProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutenContextProvider>
      <AppWrapper />  {/* ✅ Aquí ya se maneja el BrowserRouter */}
    </AutenContextProvider>
  </StrictMode>,
)
