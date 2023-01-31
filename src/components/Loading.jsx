import React from 'react';
import loading from '../styles/loading.module.css'

const Loading = () => {
  return (
    <div className={loading.div}>
      <img className={loading.divImg} src="/public/giphy.gif" alt="" />
      <h2 className={loading.divH2}>Cargando...</h2>
    </div>
  );
};

export default Loading;