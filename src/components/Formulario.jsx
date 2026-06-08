import { useState } from 'react'

function Formulario({ onRegistrar, isFull }) {
  const [patente, setPatente] = useState('')
  const [tipo, setTipo] = useState('Auto')
  const [hora, setHora] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFull) {
      alert('El estacionamiento está lleno. No se pueden registrar más vehículos.')
      return
    }

    if (!patente.trim() || !hora) {
      alert('Por favor, completa todos los campos del formulario.')
      return
    }

    onRegistrar({
      patente: patente.trim().toUpperCase(),
      tipo,
      hora,
    })

    setPatente('')
    setTipo('Auto')
    setHora('')
  }

  return (
    <section style={{ background: 'var(--code-bg)', padding: '24px', borderRadius: '8px', border: '1px solid var(--border)', width: '100%', boxSizing: 'border-box' }}>
      <h2 style={{ marginTop: 0, marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Registrar Ingreso</span>
        {isFull && (
          <span style={{ color: '#ef4444', fontSize: '13px', background: 'rgba(239, 68, 68, 0.15)', padding: '4px 10px', borderRadius: '4px', fontWeight: 'bold' }}>
            ⚠️ CAPACIDAD MÁXIMA ALCANZADA
          </span>
        )}
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-end' }}>
        
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="patente" style={{ fontWeight: '500', color: 'var(--text-h)' }}>Patente:</label>
          <input
            id="patente"
            type="text"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
            placeholder="AAAA11 o AA1111"
            disabled={isFull}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-h)', opacity: isFull ? 0.5 : 1 }}
            required
          />
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="tipo" style={{ fontWeight: '500', color: 'var(--text-h)' }}>Tipo de Vehículo:</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            disabled={isFull}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-h)', cursor: isFull ? 'not-allowed' : 'pointer', opacity: isFull ? 0.5 : 1 }}
          >
            <option value="Auto">🚗 Auto</option>
            <option value="Moto">🏍️ Moto</option>
            <option value="Camioneta">🛻 Camioneta</option>
          </select>
        </div>

        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="hora" style={{ fontWeight: '500', color: 'var(--text-h)' }}>Hora de Ingreso:</label>
          <input
            id="hora"
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            disabled={isFull}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-h)', opacity: isFull ? 0.5 : 1 }}
            required
          />
        </div>

        <button 
          type="submit" 
          className="counter" 
          disabled={isFull}
          style={{ 
            margin: 0, 
            height: '42px', 
            cursor: isFull ? 'not-allowed' : 'pointer', 
            fontWeight: 'bold',
            opacity: isFull ? 0.6 : 1,
            backgroundColor: isFull ? 'rgba(239, 68, 68, 0.1)' : 'var(--accent-bg)',
            color: isFull ? '#ef4444' : 'var(--accent)',
            border: isFull ? '1px solid rgba(239, 68, 68, 0.3)' : '1px solid var(--border)'
          }}
        >
          {isFull ? 'Lleno' : 'Ingresar Vehículo'}
        </button>
      </form>
    </section>
  )
}

export default Formulario