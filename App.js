import React from 'react';
import {StatusBar, View, ScrollView, StyleSheet} from 'react-native';

import ProductPage from './src/product_page';

const App = () => {
  return (
    <View style={S.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <ProductPage />
      </ScrollView>
    </View>
  );
};

const S = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'silver'},
});

export default App;
