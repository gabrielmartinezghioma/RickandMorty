import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../styles/search.module.css'

const Search = ({ searchData, setSearchValue }) => {
  const objectData = searchData.results;

  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 200);
  };


  return (
    <div className={search.divSearch}>

      <input
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${search.divInput} ${isOpen === false ? search.divInput : search.InputActive}`}
        placeholder={'Introduzca el nombre de la ubicación'}
      />



      {
        isOpen  &&
          <ul
            className={search.divUl}>
            {
              objectData?.map((elemnt, index) =>
                <li
                  className={search.ulLi}
                  key={index}>

                  <Link to={`/location/${elemnt?.id}`}>
                    <h2 className={search.ulLi}> {elemnt?.name}</h2>
                  </Link>

                </li>)
            }
          </ul>
      }


    </div>
  );
};

export default Search;