import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import style from './Card.style';

type CardProps = {
  image: string;
  cardTitle: string;
  inStock?: string;
  price: string;
};
const Card: FC<CardProps> = ({cardTitle, image, inStock, price}) => {
  return (
    <View style={style.container}>
      <Image source={{uri: image}} style={style.image} />

      <Text style={style.textTitle}>{cardTitle}</Text>
      <Text style={style.price}>{price}</Text>
      <Text style={style.inStock}>{inStock}</Text>
    </View>
  );
};
export default Card;
