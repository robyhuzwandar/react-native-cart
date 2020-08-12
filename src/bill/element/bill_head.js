import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Header = () => (
  <View style={S.container}>
    <Icon
      uri={'https://static.thenounproject.com/png/630729-200.png'}
      label={'Customer'}
    />
    <Text style={S.title}>New Customer</Text>
    <Icon
      uri={'https://static.thenounproject.com/png/630729-200.png'}
      label={'Customer'}
    />
  </View>
);

const Icon = ({uri, label}) => (
  <View style={S.iconContainer}>
    <Image style={S.icon} source={{uri: uri}} />
    <Text style={S.textIcon}>{label}</Text>
  </View>
);

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cce2e8',
  },
  title: {fontSize: 24},
  iconContainer: {
    alignItems: 'center',
    width: 60,
    backgroundColor: '#a7ced9',
  },
  icon: {height: 40, width: 40},
  textIcon: {fontSize: 12},
});
