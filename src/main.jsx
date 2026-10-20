import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

// <BrowserRouter>: liga o roteamento usando a URL do navegador. Envolve o app uma vez só, no main.jsx

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

// Pega o <div id="root"> do index.html e diz pro React: “monta o app aqui dentro”.

  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
