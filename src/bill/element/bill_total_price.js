import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {formatIDR} from '../../utils';

export const TotalPrice = ({totalPrice}) => (
  <View style={S.container}>
    <Text style={S.totalPrice}>Total Belanja Rp. {formatIDR(totalPrice)}</Text>
  </View>
);

const S = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  totalPrice: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
});
