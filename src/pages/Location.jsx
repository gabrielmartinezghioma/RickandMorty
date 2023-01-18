import React from 'react';
import ButtonNaviagte from '../components/ButtonNaviagte';
import dataApi from '../customHooks/dataApi';
import CardLocation from '../components/CardLocation';  

const Location = () => {
 
  const buttonNavigate = <ButtonNaviagte
  text='regresar a home'
  path='/'
  />

  const {data,isLoading,isError}=dataApi('https://rickandmortyapi.com/api/location');

  // console.log(data);
  const cardLocation = <CardLocation data={data}/>
 
  


  return (
    <div>
      <h1>Location</h1>
      {buttonNavigate}
      {cardLocation}

    </div>
  );
};

export default Location;