import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ResidentInfo = ({ data }) => {

  const [character, setCharacter] = useState([]);
  const [requestMade, setRequestMade] = useState(false);
  const [isArrayEmpty, setIsArrayEmpty] = useState(false);
  const arrayUrl = data.residents;

  useEffect(() => {
    if (!arrayUrl || arrayUrl.length === 0) {
      setIsArrayEmpty(true);
    }
    else if (!requestMade) {
      setIsArrayEmpty(false)
      arrayUrl?.map(async url => {
        try {
          const response = await axios.get(url);
          setCharacter(prevState => [...prevState, response?.data])

        }
        catch (error) {
          console.log(error);
        }
      });
      setRequestMade(true);
    }
  }, [data]);


  return (
    <ul>
      {isArrayEmpty&&<h1>No hay residentes</h1>}

      {character?.map((character, index) =>
        <li key={index}>
          <h2>Name: {character?.name}</h2>
          <h3>Type: {character?.type}</h3>
          <h3>Status: {character?.status}</h3>
          <h3>Gender: {character?.gender}</h3>
          <h3>Location: {character?.location?.name}</h3>
          <h3>Episodios: {character?.episode?.length}</h3>
          <img src={`${character?.image}`} alt="" />
        </li>
      )}
    </ul>
  );
}

export default ResidentInfo;