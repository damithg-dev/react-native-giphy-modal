import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('screen');

export const GiphyItem = ({item, onPress}) => {
  const {
    images: {
      preview_gif: {url, height: gifHeight, width: gifWidth},
    },
  } = item;
  const intHeight = parseInt(gifHeight);
  const intWidth = parseInt(gifWidth);
  const aspectRation = intHeight / intWidth;
  const cellWidth = width - 4;
  const cellHeight = cellWidth * aspectRation;

  return (
    <Pressable onPress={onPress}>
      <LoadingImage url={url} width={cellWidth} height={cellHeight} />
    </Pressable>
  );
};

const LoadingImage = ({url, width, height}) => {
  const [isLoading, setIsLoading] = useState(false);

  renderLoadingIndicator = () => {
    if (!isLoading) return;
    return (
      <View style={styles.loadingIndicatorContainer}>
        <ActivityIndicator size="small" color="#512DA8" />
      </View>
    );
  };

  return (
    <>
      <Image
        source={{uri: url}}
        onLoadEnd={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
        style={[
          {
            width: width,
            height: height,
          },
          styles.loadedImage,
        ]}
      />
      {renderLoadingIndicator()}
    </>
  );
};

const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    position: 'absolute',
    top: 2,
    bottom: 2,
    left: 0,
    right: 0,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  loadedImage: {
    marginTop: 2,
    marginBottom: 2,
    alignSelf: 'center',
  },
});
