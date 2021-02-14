import React, {
  useMemo,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react'
import { View, ActivityIndicator } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { InputSearch, GiphyItem } from './components'
import { useDebounce, useTrending, useSearch } from './utilities'

export default GiphyModal = forwardRef((props, ref) => {
  const { giphyApiKey, onSelectGif } = props

  // ref
  const bottomSheetRef = useRef(null)

  // variables
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const snapPoints = useMemo(() => [0, '90%'], [])
  const debouncedSearchText = useDebounce(searchText, 1000)

  useImperativeHandle(ref, () => ({
    show() {
      bottomSheetRef.current.expand()
    },
    close() {
      bottomSheetRef.current.close()
    },
  }))

  //api calls hooks
  const {
    data: trendingArray,
    fetchMore: fetchMoreTrendingGif,
    resetValues: resetValuesTrending,
  } = useTrending(giphyApiKey)

  const {
    data: searchArray,
    fetchMore: fetchMoreSearchGif,
    resetValues: resetValuesSearch,
  } = useSearch(debouncedSearchText, giphyApiKey)

  const handleSheetChanges = useCallback((index) => {
    if (index == 0) {
      resetValuesTrending()
      resetValuesSearch()
      setSearchText('')
    }
  }, [])

  renderHeader = () => {
    return (
      <InputSearch
        onChangeText={(t) => {
          setSearchText(t)
        }}
        value={searchText}
      />
    )
  }

  renderItem = ({ item }) => {
    return (
      <GiphyItem
        onPress={() => {
          onSelectGif(item)
          bottomSheetModalRef.current.close()
        }}
        item={item}
      />
    )
  }

  renderList = () => {
    const isSearchActive = searchText.length != 0
    const data = isSearchActive ? searchArray : trendingArray
    const fetchMore = isSearchActive ? fetchMoreSearchGif : fetchMoreTrendingGif
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='#512DA8' />
        </View>
      )
    }
    return (
      <BottomSheetFlatList
        data={data}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        onEndReachedThreshold={0.9}
        onEndReached={fetchMore}
        keyExtractor={(item, index) => `-----------${index}`}
      />
    )
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
        {renderHeader()}
        {renderList()}
    </BottomSheet>
  )
})
