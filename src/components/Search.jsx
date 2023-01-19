import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({ searchData,setSearchValue }) => {
  const objectData = searchData.results
  return (
    <div>
      <input
      type="text"
      onChange={e => setSearchValue(e.target.value)}
      />
      <ul>
        {
          objectData?.map((elemnt, index) =>
            <li key={index}>
              <Link to={`/location/${elemnt?.id}`}>
                <h2>---: {elemnt?.name}</h2>
              </Link>
            </li>)
        }
      </ul>
    </div>
  );
};

export default Search;