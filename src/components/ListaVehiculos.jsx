/* eslint-disable */
import CardVehiculo from './CardVehiculo';

function ListaVehiculos({ vehiculos, onRetirar, capacidad }) {
  const ocupacionPorcentaje = (vehiculos.length / capacidad) * 100

  const obtenerColorBarra = () => {
    if (ocupacionPorcentaje >= 100) return '#ef4444'
    if (ocupacionPorcentaje >= 80) return '#f59e0b'
    return 'var(--accent)'
  }

  return (
    <section style={{ width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2 style={{ margin: 0 }}>Vehículos en Estacionamiento</h2>
        <span style={{ fontWeight: 'bold', color: 'var(--text-h)', fontFamily: 'var(--mono)' }}>
          Ocupación: {vehiculos.length} / {capacidad}
        </span>
      </div>

      <div style={{ width: '100%', height: '8px', background: 'var(--border)', borderRadius: '4px', marginBottom: '24px', overflow: 'hidden' }}>
        <div style={{ 
          width: `${Math.min(ocupacionPorcentaje, 100)}%`, 
          height: '100%', 
          background: obtenerColorBarra(),
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}></div>
      </div>
      
      {vehiculos.length === 0 ? (
        <p style={{ color: 'var(--text)', fontStyle: 'italic', padding: '24px 0', textAlign: 'center' }}>
          No hay vehículos registrados en este momento. El estacionamiento está vacío.
        </p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '100%' }}>
          {vehiculos.map((vehiculo) => (
            // Corrección: Usamos el componente en singular
            <CardVehiculo 
              key={vehiculo.id} 
              vehiculo={vehiculo} 
              onRetirar={onRetirar} 
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ListaVehiculos