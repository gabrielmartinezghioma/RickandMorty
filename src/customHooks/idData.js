import { useState, useEffect } from 'react';
import axios from 'axios';

function idData(data) {

  const [character, setCharacter] = useState([]);
  const [requestMade, setRequestMade] = useState(false);
  const [isArrayEmpty, setIsArrayEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const arrayUrl = data.residents;

  useEffect(() => {
    if (!arrayUrl || arrayUrl.length === 0) {
      setIsArrayEmpty(true);
    }
    else if (!requestMade) {
      setIsArrayEmpty(false)
      arrayUrl?.map(async url => {
        setIsLoading(true)
        try {
          const response = await axios.get(url);
          setCharacter(prevState => [...prevState, response?.data])

        }
        catch (error) {
          setIsError(error);
        } finally {
          setIsLoading(false)
        }
      });
      setRequestMade(true);
    }
  }, [data]);

  return {
    //data
    character,
    //content Array.length
    isArrayEmpty,
    //
    isLoading,
    isError
  }

}
export default idData