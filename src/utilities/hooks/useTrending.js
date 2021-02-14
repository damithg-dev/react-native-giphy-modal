import React, { useCallback, useState, useEffect } from 'react'

export const useTrending = (api_key, mounted) => {
  const [page, setPage] = useState(0)
  const [shouldFetch, setShouldFetch] = useState(true)
  const [data, setData] = useState([])

  const fetchMore = useCallback(() => setShouldFetch(true), [])

  const resetValues = useCallback(() => {
    // setShouldFetch(false);
    // setPage(0);
    // setData([]);
  }, [])

  const getTrendingGif = async () => {
    if (!mounted) return
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${10}&offset=${page}&rating=g&lang=en`
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
    getTrendingGif()
  }, [page, shouldFetch, mounted])

  return { data, fetchMore, resetValues }
}
