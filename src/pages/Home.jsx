import React from 'react';
import ButtonNaviagte from '../components/ButtonNaviagte';


const Home = () => {
  const buttonNavigate = <ButtonNaviagte
    text='Ir a Location'
    path='/location'
  />

  return (
    <div>
      <h1>Home</h1>
      {buttonNavigate}

    </div>
  );
};

export default Home;