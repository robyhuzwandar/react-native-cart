import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Table} from './element/bill_table';
import {Header} from './element/bill_head';
import {ButtonBill, ButtonSaveAndBuy} from './element/bill_button';
import {TotalPrice} from './element/bill_total_price';

const Bill = ({products, totalPrice, onClearCart}) => {
  return (
    <View style={S.container}>
      <Header />
      <Table products={products} totalPrice={totalPrice} />
      <ButtonBill onPress={onClearCart} title={'Clear Sale'} />
      <ButtonSaveAndBuy />
      <TotalPrice totalPrice={totalPrice} />
    </View>
  );
};

const S = StyleSheet.create({
  container: {margin: 10, backgroundColor: 'white'},
});

export default Bill;
