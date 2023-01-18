import React from 'react';
import ButtonNaviagte from '../components/ButtonNaviagte';

const Character = () => {

  const buttonNavigateLocation = <ButtonNaviagte
  text={'Regresar a Location'}
  path='/location'
  />
  const buttonNavigateHome= <ButtonNaviagte
  text={'Regresar a Home'}
  path='/'
  />

  return (
    <div>
      <h2>CHARAACTER</h2>
      {buttonNavigateLocation}
      {buttonNavigateHome}
      
    </div>
  );
};

export default Character;