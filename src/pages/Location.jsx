import React, { useState } from 'react';
import dataApi from '../customHooks/dataApi';
import CardLocation from '../components/CardLocation';
import Search from '../components/Search';
import { Pagination } from '@mui/material'
import location from '../styles/location.module.css'
import Loading from '../components/Loading';



const Location = () => {

  const [pageId, setPageId] = useState(1);
  const [dataSearch, setDataSearch] = useState('')

  const { data: searchData, isLoadingSearch, isErrorSearch } = dataApi(`https://rickandmortyapi.com/api/location?name=${dataSearch}`, pageId, dataSearch);

  const { data, isLoading, isError } = dataApi(`https://rickandmortyapi.com/api/location?page=${pageId}`, pageId);

  const setSearchValue = (data) => {
    setDataSearch(data);
  };


  const search = <Search
    searchData={searchData}
    setSearchValue={setSearchValue}
  />;


  const numberPages = (event, value) => {
    setPageId(value)
  };

  const cardLocation = <CardLocation data={data} />;

  const loading = <Loading />

  return (
    <div className={location.div}>
      {
        isLoading === false || isLoadingSearch === false
          ?
          <div className={location.div}>
            {search}
            {cardLocation}
            {/* {navigationPagination} */}
            <Pagination
              className={location.divPaginated}
              count={7}
              onChange={numberPages}
            />
          </div>
          :
          <div className={location.div}>
           { loading}
          </div>
      }
    </div>

  );
};

export default Location;