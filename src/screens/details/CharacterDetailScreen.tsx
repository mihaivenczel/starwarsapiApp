import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {detailStyles as styles} from './styles';
import {background} from '../../core/constants/images';

const CharacterDetailScreen = ({route}) => {
  const {
    birth_year,
    // created,
    // edited,
    eye_color,
    // films,
    gender,
    hair_color,
    mass,
    name,
    skin_color,
    // species,
    // starships,
    // url,
    // vehicles,
  } = route.params.item.item;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <Text style={styles.text}>{name}</Text>
        <View>
          <Text style={styles.text}>Name:{name}</Text>
          <Text style={styles.text}>Birth Year:{birth_year}</Text>
          <Text style={styles.text}>Gender:{gender}</Text>
          <Text style={styles.text}>Eye Color:{eye_color}</Text>
          <Text style={styles.text}>Hair Color:{hair_color}</Text>
          <Text style={styles.text}>Mass:{mass}</Text>
          <Text style={styles.text}>Skin color:{skin_color}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CharacterDetailScreen;
