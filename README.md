# React Native Giphy Modal

## Giphy modal to select gif made using Giphy Api.

<br/>

<img src="./screen/1_react-native-giphy-modal.gif" height="400">
<br/>
<br/>

- [Features](#user-content-Features)
- [Installation](#user-content-Installation)
- [Usage](#user-content-Usage)
- [Props](#user-content-props)
- [Coming soon Features](#user-content-Coming-soon-Features)

<br/>

## Features

- Infinity Scrolling
- [Trending Giphy](https://developers.giphy.com/docs/api/endpoint#trending)
- [Search Giphy](https://developers.giphy.com/docs/api/endpoint#search)

## Installation

<br/>

```shell
$ npm install react-native-giphy-modal
```

### Dependencies

This library needs these dependencies to be installed in your project before you can use it:

```shell
$ npm install yarn add react-native-reanimated react-native-gesture-handler
```

#### INFO

React Native Gesture Handler needs extra steps to finalize its installation, please follow their [installation instructions](https://docs.swmansion.com/react-native-gesture-handler/docs/#installation).

React Native Reanimated v1 needs extra steps to finalize its installation, please follow their [installation instructions](https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/getting_started/).

To work on Android you need to follow react native [instruction](https://reactnative.dev/docs/image#gif-and-webp-support-on-android).

<br/>

## Usage

<br/>

```jsx
import GiphyModal from 'react-native-giphy-modal'

<GiphyModal
  ref={giphyModalRef}
  giphyApiKey={''}
  onSelectGif={(gifDetail) => {}}
/>
```

## Props

<br/>

#### `giphyApiKey`(required)

Api key of Giphy you can get an one https://developers.giphy.com.

#### `onSelectGif`

When you onPress on gift this method will get fired.

<br/>

## Coming soon Features

<br/>

-  Source code Javascript to TypeScript
-  Custom Layout
-  Dark Mode theming

<br/>

## Built With ❤️


-  [React Native Bottom Sheet](https://gorhom.github.io/react-native-bottom-sheet/)
-  [React Native Module Template](https://github.com/demchenkoalex/react-native-module-template)

<br/>

## Author
-  Damith G (http://damithg.dev/)
