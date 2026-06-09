/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// CAMBIO AQUÍ: Aseguramos las extensiones .jsx explicitamente
import Formulario from './components/Formulario.jsx'
import ListaVehiculos from './components/ListaVehiculos.jsx'
import './App.css'

const CAPACIDAD_MAXIMA = 10;

function App() {
  const [count, setCount] = useState(0)

  const [vehiculos, setVehiculos] = useState(() => {
    const datosAlmacenados = localStorage.getItem('estacionamiento_vehiculos')
    if (datosAlmacenados) return JSON.parse(datosAlmacenados)
    return [
      { id: crypto.randomUUID(), patente: 'ABC123', tipo: 'Auto', hora: '08:00' },
      { id: crypto.randomUUID(), patente: 'XYZ789', tipo: 'Moto', hora: '09:30' },
      { id: crypto.randomUUID(), patente: 'DEF456', tipo: 'Camioneta', hora: '10:15' }
    ]
  })

  useEffect(() => {
    localStorage.setItem('estacionamiento_vehiculos', JSON.stringify(vehiculos))
  }, [vehiculos])

  const registrarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= CAPACIDAD_MAXIMA) {
      alert('El estacionamiento está lleno.')
      return
    }
    setVehiculos((prev) => [...prev, { ...nuevoVehiculo, id: crypto.randomUUID() }])
    setCount((prev) => prev + 1)
  }

  const retirarVehiculo = (id) => {
    setVehiculos((prev) => prev.filter((vehiculo) => vehiculo.id !== id))
    setCount((prev) => prev + 1)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h1>Control de Estacionamientos</h1>
          <p>
            Registro de flujos vehiculares, ocupación en tiempo real y almacenamiento local permanente.
          </p>
        </div>

        <div className="app-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', textAlign: 'left', marginBottom: '24px' }}>
          <Formulario onRegistrar={registrarVehiculo} isFull={vehiculos.length >= CAPACIDAD_MAXIMA} />
          <ListaVehiculos vehiculos={vehiculos} onRetirar={retirarVehiculo} capacidad={CAPACIDAD_MAXIMA} />
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Operaciones registradas: {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noopener noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App