import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export const ButtonBill = ({onPress, title, buttonStyle, titleStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[S.buttonBillContainer, buttonStyle]}>
    <Text style={[S.buttonBillTitle, titleStyle]}>{title}</Text>
  </TouchableOpacity>
);

export const ButtonSaveAndBuy = () => (
  <View style={S.buttonSaveAndBuyContainer}>
    <ButtonBill
      buttonStyle={S.buttonSave}
      titleStyle={S.buttonSaveTitle}
      title={'Save Bill'}
    />
    <ButtonBill
      buttonStyle={S.buttonCheckout}
      titleStyle={S.buttonCheckoutTitle}
      title={'Bayar Bill'}
    />
  </View>
);

const S = StyleSheet.create({
  buttonBillContainer: {
    height: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonBillTitle: {color: 'grey'},
  buttonSaveAndBuyContainer: {flexDirection: 'row', marginTop: 30},
  buttonSave: {backgroundColor: '#cce2e8'},
  buttonSaveTitle: {color: 'black'},
  buttonCheckout: {backgroundColor: '#cce2e8'},
  buttonCheckoutTitle: {color: 'black'},
});
