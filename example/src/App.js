import React, { useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import GiphyModal from 'react-native-giphy-modal'

const App: () => React$Node = () => {
  // ref
  const giphyModalRef = useRef(null)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          giphyModalRef.current.show()
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Open Giphy Modal</Text>
      </TouchableOpacity>

      <GiphyModal
        ref={giphyModalRef}
        giphyApiKey={'REPLACE WITH A GIPHY API KEY'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#512DA8',
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default App
