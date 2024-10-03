import React from 'react';

const DobroNumeros = () => {
  // Array com três números
  const numeros = [1, 2, 3];

  // Usando o método map para calcular o dobro dos números
  const numerosDobro = numeros.map(numero => numero * 2);

  return (
    <div>
      <h1>Números e seus Dobros:</h1>
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>
            O dobro do número {numero} é {numerosDobro[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DobroNumeros;