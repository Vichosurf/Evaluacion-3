/* eslint-disable */
import React from 'react';

function CardVehiculo({ vehiculo, onRetirar }) {
  // Usamos el tipo para aplicar clases dinámicas definidas en tu App.css
  const tipoClase = `card-vehiculo vehiculo-${vehiculo.tipo.toLowerCase()}`;

  return (
    <div className={tipoClase} style={{ 
      background: 'var(--code-bg)', 
      padding: '20px', 
      borderRadius: '12px', 
      border: '1px solid var(--border)',
      flex: '1 1 280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      textAlign: 'left'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ 
          fontSize: '11px', 
          fontWeight: 'bold', 
          color: 'var(--accent)', 
          background: 'var(--accent-bg)', 
          padding: '2px 8px', 
          borderRadius: '4px',
          textTransform: 'uppercase'
        }}>
          {vehiculo.tipo === 'Auto' ? '🚗 Auto' : vehiculo.tipo === 'Moto' ? '🏍️ Moto' : '🛻 Camioneta'}
        </span>
        <span style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--mono)' }}>
          {vehiculo.hora}
        </span>
      </div>
      
      <div style={{ 
        fontSize: '28px', 
        fontWeight: 'bold', 
        color: 'var(--text-h)', 
        fontFamily: 'var(--mono)',
        margin: '8px 0' 
      }}>
        {vehiculo.patente}
      </div>

      <button 
        onClick={() => onRetirar(vehiculo.id)}
        className="counter"
        style={{ 
          width: '100%', 
          marginTop: '10px',
          borderColor: '#ef4444',
          color: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.05)'
        }}
      >
        Registrar Salida
      </button>
    </div>
  );
}

export default CardVehiculo;