import React, { useState } from 'react';
import ButtonNaviagte from '../components/ButtonNaviagte';
import dataApi from '../customHooks/dataApi';
import CardLocation from '../components/CardLocation';
import NavigationPagination from '../components/NavigationPagination';
import Search from '../components/Search';


const Location = () => {

  const [pageId, setPageId] = useState(1);
  const [dataSearch, setDataSearch] = useState('')

  const { data: searchData, isLoadingSearch, isErrorSearch } = dataApi(`https://rickandmortyapi.com/api/location?name=${dataSearch}`, pageId, dataSearch);

  const { data, isLoading, isError } = dataApi(`https://rickandmortyapi.com/api/location?page=${pageId}`, pageId);

  const setSearchValue = (data) => {
    setDataSearch(data)
  }

  const buttonNavigate = <ButtonNaviagte
    text='regresar a home'
    path='/'
  />

  const search = <Search
    searchData={searchData}
    setSearchValue={setSearchValue}
  />


  const numberPages = (data) => {
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
      {search}
      {cardLocation}
      {navigationPagination}

    </div>
  );
};

export default Location;