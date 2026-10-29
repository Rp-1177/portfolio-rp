import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { MotionConfig } from 'motion/react'

// <BrowserRouter>: liga o roteamento usando a URL do navegador. Envolve o app uma vez só, no main.jsx

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

// Pega o <div id="root"> do index.html e diz pro React: “monta o app aqui dentro”.

  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">

{/* Com reducedMotion="user", se a pessoa ativou “reduzir movimento” no sistema, o Motion desliga as animações de movimento (deslocamentos e escalas) e mantém só as suaves. É a versão em JavaScript do motion-reduce: */}

        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)
