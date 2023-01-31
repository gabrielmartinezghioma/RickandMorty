import React from 'react';
import idData from '../customHooks/idData';
import residentInfo from '../styles/residentInfo.module.css'

const ResidentInfo = ({ data }) => {
  const { character, isArrayEmpty, isLoading, isError } = idData(data);

  return (
    <ul className={residentInfo.ul}>
      {isArrayEmpty && <h1>No hay residentes</h1>}

      {character?.map((character, index) =>
        <li key={index} className={residentInfo.ulLi}>
          <img className={residentInfo.ulLiImg} src={`${character?.image}`} alt="" />
          <div className={residentInfo.ulLiDiv} >
            <h2>Name: <span className={residentInfo.h2Span}>{character?.name}</span></h2>
            <h3>Type: <span className={residentInfo.h3Span}>{(character?.type) ? character?.type : 'Sin especificación'}</span></h3>
            <h3>Status: <span className={residentInfo.h3Span}>{(character?.status === "unknown") ? 'Desconocido' : character?.status}</span></h3>
            <h3>Gender: <span className={residentInfo.h3Span}>{character?.gender}</span></h3>
            <h3>Location: <span className={residentInfo.h3Span}>{character?.location?.name}</span></h3>
            <h3>Episodios: <span className={residentInfo.h3Span}>{character?.episode?.length}</span></h3>
          </div>
        </li>
      )}
    </ul>
  );
}

export default ResidentInfo;