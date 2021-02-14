import React, { useCallback, useState, useEffect } from 'react'

export const useSearch = (keyword, api_key, mounted) => {
  const [page, setPage] = useState(0)
  const [shouldFetch, setShouldFetch] = useState(true)
  const [data, setData] = useState([])

  const fetchMore = useCallback(() => setShouldFetch(true), [])

  const resetValues = useCallback(() => {
    // setShouldFetch(true);
    // setPage(0);
    // setData([]);
  }, [])

  const getSearchGif = async () => {
    if (!mounted) return
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=${10}&offset=${page}&rating=g&lang=en`
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (result.data != null) {
          setShouldFetch(false)
          setData([...data, ...result.data])
          setPage(page + 10)
        } else {
          console.error('react-native-giphy-modal' , result.message)
        }
      })
      .catch((error) => {
        console.error('react-native-giphy-modal' , error)
      })
  }

  useEffect(() => {
    if (!shouldFetch) {
      return
    }
    getSearchGif()
  }, [page, shouldFetch, mounted])

  useEffect(() => {
    setData([])
    setPage(0)
    getSearchGif()
  }, [keyword, mounted])

  return { data, fetchMore, resetValues }
}
