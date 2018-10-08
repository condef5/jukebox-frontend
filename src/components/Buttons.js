import React from 'react';

const Manage = () => (
  <div
    className="list-button"
    style={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      height: '50px'
    }}
  >
    <button type="button" style={{ width: '100%' }}>
      Buscar contenido
    </button>
    <button type="button">home</button>
    <button type="button">teclado</button>
    <button type="button">QA</button>
  </div>
);

export default Manage;
