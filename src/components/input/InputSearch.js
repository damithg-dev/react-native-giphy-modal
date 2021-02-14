import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native'

export const InputSearch = forwardRef((props, ref) => {
  let { value, onChangeText } = props

  const [textInputFocus, setTextInputFocus] = useState(false)

  useImperativeHandle(ref, () => ({
    focus() {
      input.focus()
    },
  }))

  renderIconOnLeft = () => {
    if (textInputFocus) return null
    if (value.length != 0) return null
    return (
      <Image
        style={styles.searchIcon}
        resizeMethod={'auto'}
        resizeMode={'contain'}
        source={require('../../assets/images/search_ic_black.png')}
      />
    )
  }

  return (
    <>
      <View style={[styles.textInputContainer]}>
        <View style={styles.textSubInputContainer}>
          {this.renderIconOnLeft()}
          <TextInput
            style={[
              styles.input,
              {
                color: '#000000',
              },
            ]}
            autoCapitalize={'none'}
            textContentType={'none'}
            autoCompleteType={'off'}
            keyboardType={'default'}
            returnKeyType={'search'}
            placeholderTextColor={'#666666'}
            placeholder={'Search'}
            value={value}
            onChangeText={onChangeText}
            onEndEditing={() => {
              setTextInputFocus(false)
            }}
            onFocus={() => {
              setTextInputFocus(true)
            }}
          />
        </View>
      </View>
    </>
  )
})

export const styles = StyleSheet.create({
  input: {
    minHeight: 40,
    color: '#2c3e50',
    fontSize: 15,
    textAlignVertical: 'center',
    flex: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  textInputContainer: {
    backgroundColor: '#E7E7E7',
    paddingHorizontal: 8,
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'center'
  },
  textSubInputContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
})
