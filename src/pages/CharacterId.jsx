import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonNaviagte from '../components/ButtonNaviagte';
import ResidentInfo from '../components/ResidentInfo';
import dataApi from '../customHooks/dataApi';

const CharacterId = () => {

  const { characterId } = useParams();


  const buttonNavigateHome = <ButtonNaviagte
    text={'Regresar a Home'}
    path='/'
  />;
  
  const { data } = dataApi(`https://rickandmortyapi.com/api/location/${characterId}`,characterId);
  
  const residentsInfo = <ResidentInfo data={data}/>;
 
  return (
    <div>
      <h2>CHARACTER</h2>
      
      {buttonNavigateHome}
      <h1>{characterId}</h1>
      {residentsInfo}
    </div>
  );
};

export default CharacterId;