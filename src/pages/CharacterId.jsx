import React from 'react';
import { useParams } from 'react-router-dom';
import ButtonNaviagte from '../components/ButtonNaviagte';
import Loading from '../components/Loading';
import ResidentInfo from '../components/ResidentInfo';
import dataApi from '../customHooks/dataApi';
import cardLocation from '../styles/cardLocation.module.css'
import character from '../styles/characterId.module.css'

const CharacterId = () => {

  const { characterId } = useParams();


  const buttonNavigateHome = <ButtonNaviagte
    text={<i className='bx bx-arrow-back'></i>}
    path='/'
  />;

  const { data, isLoading } = dataApi(`https://rickandmortyapi.com/api/location/${characterId}`, characterId);

  const residentsInfo = <ResidentInfo data={data} />;

  const loading = <Loading />


  return (
    <>
      {isLoading === false
        ?
        <div className={character.div}>

          {buttonNavigateHome}

          <div>
            <div className={cardLocation.ulLi}>
              <div className={cardLocation.liDiv}>
                <h2 className={cardLocation.divh2}>Nombre</h2>
                <h4 className={cardLocation.divh4}>{data?.name}</h4>
              </div>

              <div className={cardLocation.ulLiDiv}>

                <div className={cardLocation.liDiv}>
                  <h2 className={cardLocation.divh2}>Tipo</h2>
                  <h3 className={cardLocation.divh3}> {data?.type}</h3>
                </div>

                <div className={cardLocation.liDiv}>
                  <h2 className={cardLocation.divh2}>Dimensión</h2>
                  <h3 className={cardLocation.divh3}>
                    {data?.dimension === 'unknown'
                      ? ' Desconocida'
                      :
                      ` ${data?.dimension}`}
                  </h3>
                </div>

                <div className={cardLocation.liDiv}>
                  <h2 className={cardLocation.divh2}>Residentes </h2>
                  <h3 className={cardLocation.divh3}>{data?.residents?.length}</h3>
                </div>

              </div>

            </div>
          </div>
          <div>

            {residentsInfo}

          </div>

        </div>
        :
        loading 
      }
    </>
  );
};

export default CharacterId;