import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ResidentInfo = ({ data }) => {

  console.log(data.location);
  const [character, setCharacter] = useState([]);
  const [requestState, setRequestState] = useState({});
  const arrayUrl = data.residents;
   


   useEffect(() => {
    arrayUrl?.map(async url => {
      // check if request has been made before
      if (!requestState[url]) {
        try {
          setRequestState(prevState => ({ ...prevState, [url]: true }));
          const response = await axios.get(url);
          setCharacter(prevState => [...prevState, response?.data])
        }
        catch (error) {
          console.log(error);
        }
      }
    })
  }, [data]);


  return (
    <ul>

      {character?.map((character, index) => (
        <li key={index}>
          <h2>Name: {character?.name}</h2>
          <h3>Type: {character?.type}</h3>
          <h3>Status: {character?.status}</h3>
          <h3>Gender: {character?.gender}</h3>
          <h3>Location: {character?.location?.name}</h3>
          <h3>Episodios: {character?.episode?.length}</h3>
          <img src={`${character?.image}`} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default ResidentInfo;