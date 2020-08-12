import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import ProductCard from './product_card';

const ProductList = ({onPress}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <ProductCard title={item.title} imageUri={item.image} />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={() => Math.random().toString()}
      numColumns={3}
    />
  );
};

export default ProductList;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53absaasasb28ba',
    title: 'Nasi Goreng',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53aasasbb28ba',
    title: 'Nasi Putih',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3awewewead53abb28ba',
    title: 'Nasi Kuning',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3adsasa53abb28ba',
    title: 'Nasi Merah',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pecal',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ikan bakar',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cumi',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ayam',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ikan panggang',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Susu Kurma',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Jahe SUSU',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Susu Kedelai',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Air Putih',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Teh hangat',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Jus Jeruk',
    image:
      'https://terasjakarta.id/photo/plugin/article/2019/1575634289_1-org.jpg',
    price: 15000,
  },
];
