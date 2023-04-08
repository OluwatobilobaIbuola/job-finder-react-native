import axios from "axios";
import { useEffect, useState } from "react";

const fetchApi = async (route, query, pages) => {
  const res = await axios.get(
    `https://jsearch.p.rapidapi.com/${route}?query=${query}&num_pages=${pages}`,
    {
      headers: {
        "X-RapidAPI-Key": "66568918b0mshfc9beb781d29850p1fc1c6jsn6c6a291b7b66",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    }
  );
  return res.data.data;
};

export const useFetchApiHook = (
  route = "search",
  query = "React Developer",
  pages = 1
) => {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApiHandler = async () => {
      try {
        setIsloading(true);
        const data = await fetchApi(route, query, pages);
        setData(data);
        setIsloading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchApiHandler();
  }, [route, query, pages]);
  return {
    isLoading,
    isError,
    data,
  };
};
