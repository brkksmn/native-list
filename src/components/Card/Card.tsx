import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import style from './Card.style';

type CardProps = {
  image: string;
  cardTitle: string;
  inStock?: boolean;
  price: string;
};
const Card: FC<CardProps> = ({cardTitle, image, inStock, price}) => {
  return (
    <View>
      <Image source={{uri: image}} style={style.image} />

      <Text>{cardTitle}</Text>
      <Text>{price}</Text>
      <Text>{inStock}</Text>
    </View>
  );
};
export default Card;
