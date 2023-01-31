import React from 'react';
import { Link } from 'react-router-dom';
import cardLocation from '../styles/cardLocation.module.css'

const CardLocation = ({ data }) => {
  const objectData = data.results;
  return (
    <ul className={cardLocation.ul}>
      {
        objectData?.map((elemnt, index) =>
          <li key={index} className={cardLocation.ulLi}>

            <div className={cardLocation.liDiv}>
              <h2 className={cardLocation.divh2}>Nombre</h2>
              <h4 className={cardLocation.divh4}>{elemnt?.name}</h4>
            </div>

            <div className={cardLocation.ulLiDiv}>
              <div className={cardLocation.liDiv}>
                <h2 className={cardLocation.divh2}>Tipo</h2>
                <h3 className={cardLocation.divh3}> {elemnt?.type}</h3>
              </div>

              <div className={cardLocation.liDiv}>
                <h2 className={cardLocation.divh2}>Dimensión</h2>
                <h3 className={cardLocation.divh3}>
                  {elemnt.dimension === 'unknown'
                    ? ' Desconocida'
                    :
                    ` ${elemnt.dimension}`}
                </h3>
              </div>

              <div className={cardLocation.liDiv}>
                <h2 className={cardLocation.divh2}>Residentes </h2>
                <h3 className={cardLocation.divh3}>{elemnt?.residents.length}</h3>
              </div>

            </div>

            <Link className={cardLocation.divLinkDiv} to={`/location/${elemnt?.id}`}>
              <button className={cardLocation.linkDivButton}>Visitar <i className='bx bx-navigation'></i></button>
            </Link>

          </li>)
      }
    </ul>
  );
};

export default CardLocation;