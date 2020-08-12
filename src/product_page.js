import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ProductList from './product_list';
import ProductCategory from './product_category';
import Bill from './bill/bill';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (product) => {
    let productsTmp = products;
    let index = productsTmp.indexOf(product);
    let totalPriceTmp = totalPrice + product.price;

    if (productsTmp.indexOf(product) !== -1) {
      productsTmp[index].qty += 1;
      productsTmp[index].price += product.price;
    } else {
      product.qty = 1;
      productsTmp.push(product);
    }

    setProducts([...productsTmp]);
    setTotalPrice(totalPriceTmp);
  };

  const clearCart = () => {
    // setProducts([]);
    // setTotalPrice(0);
  };
  return (
    <View>
      <View style={S.listingContainer}>
        <ProductList onPress={addItem} />
        <ProductCategory />
      </View>
      <Bill
        products={products}
        totalPrice={totalPrice}
        onClearCart={clearCart}
      />
    </View>
  );
};

const S = StyleSheet.create({
  listingContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
});
export default ProductPage;
