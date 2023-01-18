import React from 'react';

const CardLocation = ({ data }) => {
  const a = data.results
  console.log(a);
  return (
    <ul>
      {
        a?.map((elemnt, index) =>
          <li key={index}>
            <h2>Nombre: {elemnt?.name}</h2>
            <h2>Tipo: {elemnt?.type}</h2>
            <h2>Dimensión: 
              {elemnt.dimension === 'unknown'
                ? ' Desconocida'
                :
                ` ${elemnt.dimension}`}
            </h2>
            <h2>Residentes: {elemnt?.residents.length}</h2>

          </li>)
      }

    </ul>
  );
};

export default CardLocation;