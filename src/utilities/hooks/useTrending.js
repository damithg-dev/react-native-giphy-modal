import React, {useCallback, useState, useEffect} from 'react';

export const useTrending = (api_key) => {
  const [page, setPage] = useState(0);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [data, setData] = useState([]);

  const fetchMore = useCallback(() => setShouldFetch(true), []);

  const resetValues = useCallback(() => {
    // setShouldFetch(false);
    // setPage(0);
    // setData([]);
  }, []);

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }

    const getTrendingGif = async () => {
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${10}&offset=${page}&rating=g&lang=en`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setShouldFetch(false);
          setData((oldData) => [...oldData, ...result.data]);
          setPage(page + 10);
        })
        .catch((error) => {
          console.log('error', error);
        });
    };

    getTrendingGif();
  }, [page, shouldFetch]);

  return {data, fetchMore, resetValues};
};
