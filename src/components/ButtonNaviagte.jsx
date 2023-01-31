import React from 'react';
import { Link } from 'react-router-dom';
import buttonNaviagte from '../styles/buttonNavigate.module.css'

const ButtonNaviagte = ({ text, path }) => {
  return (
    <div className={buttonNaviagte.div}>
      <Link to={`${path}`}>
        <button className={buttonNaviagte.divButton} >{text}</button>
      </Link>
    </div>
  );
};

export default ButtonNaviagte;