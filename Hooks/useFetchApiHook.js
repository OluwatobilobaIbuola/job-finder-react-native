import axios from "axios";
import { useEffect, useState } from "react";

const fetchApi = async (route, query) => {
  const res = await axios.get(`https://jsearch.p.rapidapi.com/${route}`, {
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  });
  return res.data.data;
};

export const useFetchApiHook = (route, query) => {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiHandler = async () => {
      try {
        setIsloading(true);
        const data = await fetchApi(route, query);
        setData(data);
        setIsloading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchApiHandler();
  }, [route, query]);

  const refetch = () => {
    setIsloading(true);
    fetchApiHandler();
  };
  return {
    isLoading,
    isError,
    data,
    refetch,
  };
};
