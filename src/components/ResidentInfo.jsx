import React from 'react';
import idData from '../customHooks/idData';



const ResidentInfo = ({ data }) => {
const {character,isArrayEmpty,isLoading,isError}=idData(data)




  return (
    <ul>
      {isArrayEmpty&&<h1>No hay residentes</h1>}

      {character?.map((character, index) =>
        <li key={index}>
          <h2>Name: {character?.name}</h2>
          <h3>Type: {character?.type}</h3>
          <h3>Status: {character?.status}</h3>
          <h3>Gender: {character?.gender}</h3>
          <h3>Location: {character?.location?.name}</h3>
          <h3>Episodios: {character?.episode?.length}</h3>
          <img src={`${character?.image}`} alt="" />
        </li>
      )}
    </ul>
  );
}

export default ResidentInfo;