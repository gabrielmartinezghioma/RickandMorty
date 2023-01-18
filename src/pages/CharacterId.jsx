import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonNaviagte from '../components/ButtonNaviagte';
import dataApi from '../customHooks/dataApi';

const CharacterId = () => {

  const { characterId } = useParams()

  const buttonNavigateLocation = <ButtonNaviagte
    text={'Regresar a Location'}
    path='/location'
  />

  const buttonNavigateHome = <ButtonNaviagte
    text={'Regresar a Home'}
    path='/'
  />

  const { data } = dataApi(`https://rickandmortyapi.com/api/location/${characterId}`);

 const residents = data.residents;
 console.log(residents);
 
  return (
    <div>
      <h2>CHARACTER</h2>
      {buttonNavigateLocation}
      {buttonNavigateHome}
      <h1>{characterId}</h1>
     




    </div>
  );
};

export default CharacterId;