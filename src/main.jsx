
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Guardamos el elemento raíz en una constante
const container = document.getElementById('root')

// Validamos que exista para eliminar la advertencia de posible valor 'null'
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
