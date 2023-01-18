import React from 'react';
import { Link } from 'react-router-dom';

const CardLocation = ({ data }) => {
  const objectData = data.results
  return (
    <ul>
      {
        objectData?.map((elemnt, index) =>
          <li key={index}>

            <Link to={`/location/${elemnt?.id}`}>
              <h2>Nombre: {elemnt?.name}</h2>
              <h2>Tipo: {elemnt?.type}</h2>
              <h2>Dimensión:
                {elemnt.dimension === 'unknown'
                  ? ' Desconocida'
                  :
                  ` ${elemnt.dimension}`}
              </h2>
              <h2>Residentes: {elemnt?.residents.length}</h2>
            </Link>

          </li>)
      }

    </ul>
  );
};

export default CardLocation;