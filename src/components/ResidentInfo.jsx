import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import dataApi from '../customHooks/dataApi';

const ResidentInfo = ({ data }) => {

const [url,setUrl] =useState({})
  
  //  console.log(urls.residents?.[0]);


useEffect(()=>{
  data.residents?.map((url) => {
    setUrl(url);
  })
  
},[data])

console.log(url);


  return (


    

      <h2>hola</h2>




   
  );
};

export default ResidentInfo;