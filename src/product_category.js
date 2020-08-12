import React from 'react';
import {FlatList} from 'react-native';
import ProductCard from './product_card';

const ProductCategory = () => {
  const renderItem = ({item}) => (
    <ProductCard title={item.title} imageUri={item.image} />
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={() => Math.random().toString()}
      numColumns={1}
    />
  );
};

export default ProductCategory;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cumi Dan Kerang',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sayuran',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ikan',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Minuman',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Happy Hour',
  },
];
