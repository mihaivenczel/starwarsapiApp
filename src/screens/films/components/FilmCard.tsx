import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {strings} from '../../../core/constants';
import {filmCardStyles as styles} from './styles';

const FilmCard = ({item}) => {
  const {title, episode_id} = item;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitleText}>
        {strings.introScreen.episode}
        {episode_id}:
      </Text>
      <Text style={styles.cardTitleText}>{title}</Text>
    </View>
  );
};

export default FilmCard;
