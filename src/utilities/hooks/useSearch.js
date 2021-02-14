import React, {useCallback, useState, useEffect} from 'react';

export const useSearch = (keyword, api_key) => {
 const [page, setPage] = useState(0);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [data, setData] = useState([]);

  const fetchMore = useCallback(() => setShouldFetch(true), []);

  const resetValues = useCallback(() => {
    // setShouldFetch(true);
    // setPage(0);
    // setData([]);
  }, []);

  const getSearchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=${10}&offset=${page}&rating=g&lang=en`;
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

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    getSearchGif();
  }, [page, shouldFetch, keyword]);

  useEffect(() => {
    setData([]);
    setPage(0);
    getSearchGif();
  }, [keyword]);

  return {data, fetchMore, resetValues};
};
