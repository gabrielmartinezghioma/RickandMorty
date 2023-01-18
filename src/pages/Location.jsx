import React from 'react';
import ButtonNaviagte from '../components/ButtonNaviagte';
import dataApi from '../customHooks/dataApi';
import CardLocation from '../components/CardLocation';
import NavigationPagination from '../components/NavigationPagination';

const Location = () => {

  const buttonNavigate = <ButtonNaviagte
    text='regresar a home'
    path='/'
  />

  const { data, isLoading, isError } = dataApi('https://rickandmortyapi.com/api/location?page=5');

 
  const cardLocation = <CardLocation data={data} />
  const navigationPagination =
    <NavigationPagination
      data={data}


    />




  return (
    <div>
      <h1>Location</h1>
      {buttonNavigate}
      {cardLocation}
      {navigationPagination}

    </div>
  );
};

export default Location;