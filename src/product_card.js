import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const ProductCard = ({title, imageUri}) => (
  <View style={S.boxContainer}>
    {imageUri ? (
      <Image style={S.image} source={{uri: imageUri}} />
    ) : (
      <TextCover title={title} />
    )}
    <Text numberOfLines={1} style={S.title}>
      {title}
    </Text>
  </View>
);

const TextCover = ({title}) => (
  <View style={S.textCoverContainer}>
    <Text style={S.textCoverTitle}>{title.substr(0, 2)}</Text>
  </View>
);

const S = StyleSheet.create({
  image: {
    width: '100%',
    height: 50,
    resizeMode: 'cover',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  textCoverContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  textCoverTitle: {
    fontSize: 24,
    color: 'white',
  },
  boxContainer: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    width: Dimensions.get('window').width / 4.7,
  },
  title: {
    justifyContent: 'center',
    fontSize: 12,
  },
});

export default ProductCard;
