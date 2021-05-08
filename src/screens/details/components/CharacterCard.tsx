import React from 'react';
import {View, Text} from 'react-native';

import {characterCardStyles as styles} from './styles';

const CharacterCard = ({item}) => {
  const {name} = item.item;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitleText}>{name}</Text>
    </View>
  );
};

export default CharacterCard;
