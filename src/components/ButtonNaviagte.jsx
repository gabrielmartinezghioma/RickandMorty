import React from 'react';
import { Link } from 'react-router-dom';

const ButtonNaviagte = ({text,path}) => {
  return (
    <div>
      <Link to={`${path}`}><button>{text}</button></Link>
    </div>
  );
};

export default ButtonNaviagte;