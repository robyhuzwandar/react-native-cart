import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {formatIDR} from '../../utils';

export const Table = ({products, totalPrice}) => {
  return (
    <View style={S.container}>
      <Item title={'1'} price={'View Table'} />
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Item
            title={item.title}
            qty={item.qty}
            price={`Rp ${formatIDR(item.price)}`}
          />
        )}
        keyExtractor={(item) => item.title}
      />
      <Item title={'Total : '} price={`Rp ${formatIDR(totalPrice)}`} />
    </View>
  );
};

const Item = ({title, qty, price}) => {
  return (
    <View style={S.itemContainer}>
      <Text style={{flex: 1}}>{title}</Text>
      <Text style={{flex: 1}}>x{qty}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const S = StyleSheet.create({
  container: {padding: 10},
  itemContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
