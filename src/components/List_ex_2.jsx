import React from 'react';

const ListaDeFrutas = () => {
  // Array de frutas
  const frutas = ['Maçã', 'Banana', 'Laranja'];

  return (
    <div>
      <h1>Lista de Frutas:</h1>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>Minha fruta preferida é {fruta}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeFrutas;