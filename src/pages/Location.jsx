import React, { useState } from 'react';
import ButtonNaviagte from '../components/ButtonNaviagte';
import dataApi from '../customHooks/dataApi';
import CardLocation from '../components/CardLocation';
import NavigationPagination from '../components/NavigationPagination';

const Location = () => {

  const buttonNavigate = <ButtonNaviagte
    text='regresar a home'
    path='/'
  />
  const [pageId,setPageId]=useState(1)

  const { data, isLoading, isError } = dataApi(`https://rickandmortyapi.com/api/location?page=${pageId}`);



  const numberPages = (data)=>{
    setPageId(data);
  }
 
  const cardLocation = <CardLocation data={data} />
  const navigationPagination =
    <NavigationPagination
      data={data}
      numberPages={numberPages}
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