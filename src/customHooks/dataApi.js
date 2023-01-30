import axios from "axios";
import { useEffect, useState } from "react";

function dataApi(url,body,search) {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const getDataApi = async () => {
    setIsLoading(true);
    try {
      const reply = await axios.get(url);
      if (reply.status === 200) {
        setData(reply.data);
        setIsError(false);
      };
    } catch (error) {
      setIsError(true);
    } finally {
      setTimeout(()=>{
        setIsLoading(false);
      },2000);
    };
  };

  useEffect(() => {
    getDataApi();
  }, [body,search]);

  return {
    //loading
    isLoading,
    //dataApi
    data,
    //error
    isError
  }
};
export default dataApi;