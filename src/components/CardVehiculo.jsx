function CardVehiculos({ vehiculo, onRetirar }) {
  const { id, patente, tipo, hora } = vehiculo

  const tarjetaClaseDinamica = `card-vehiculo vehiculo-${tipo.toLowerCase()}`

  const estilosBadge = {
    Auto: { bg: 'rgba(170, 59, 255, 0.15)', color: 'var(--accent)' },
    Moto: { bg: 'rgba(16, 185, 129, 0.15)', color: '#10b981' },
    Camioneta: { bg: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }
  }

  const badgeActual = estilosBadge[tipo] || { bg: 'var(--accent-bg)', color: 'var(--accent)' }

  return (
    <div 
      className={tarjetaClaseDinamica}
      style={{ 
        flex: '1 1 calc(33.333% - 16px)',
        minWidth: '280px',
        background: 'var(--code-bg)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ 
          fontSize: '20px', 
          fontWeight: 'bold', 
          fontFamily: 'var(--mono)',
          color: 'var(--text-h)',
          border: '2px solid var(--text-h)',
          padding: '4px 10px',
          borderRadius: '4px',
          background: 'var(--bg)',
          letterSpacing: '1px'
        }}>
          {patente}
        </span>
        <span style={{
          padding: '4px 10px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 'bold',
          backgroundColor: badgeActual.bg,
          color: badgeActual.color
        }}>
          {tipo}
        </span>
      </div>

      <div style={{ fontSize: '15px', color: 'var(--text)' }}>
        <strong>Hora Ingreso:</strong> {hora} hrs
      </div>

      <button 
        type="button"
        onClick={() => onRetirar(id)}
        style={{
          width: '100%',
          padding: '8px 12px',
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#ef4444',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: '6px',
          transition: 'all 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'
          e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.6)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'
          e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)'
        }}
      >
        Registrar Salida
      </button>
    </div>
  )
}

export default CardVehiculos