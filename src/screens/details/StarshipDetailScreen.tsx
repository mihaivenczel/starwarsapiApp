import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {background} from '../../core/constants/images';
import {detailStyles as styles} from './styles';

const StarshipDetailScreen = ({route}) => {
  const {
    MGLT,
    cargo_capacity,
    consumables,
    cost_in_credits,
    // created,
    crew,
    // edited,
    // films,
    hyperdrive_rating,
    length,
    manufacturer,
    max_athmosphering_speed,
    model,
    name,
    passengers,
    // pilots,
    starship_class,
    // url,
  } = route.params.item.item;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <Text style={styles.text}>{name}</Text>
        <View>
          <Text style={styles.text}>Name:{name}</Text>
          <Text style={styles.text}>MGLT:{MGLT}</Text>
          <Text style={styles.text}>cargo_capacity:{cargo_capacity}</Text>
          <Text style={styles.text}>consumables:{consumables}</Text>
          <Text style={styles.text}>cost_in_credits:{cost_in_credits}</Text>
          <Text style={styles.text}>crew:{crew}</Text>
          <Text style={styles.text}>hyperdrive_rating:{hyperdrive_rating}</Text>
          <Text style={styles.text}>length:{length}</Text>
          <Text style={styles.text}>manufacturer:{manufacturer}</Text>
          <Text style={styles.text}>
            max_athmosphering_speed:{max_athmosphering_speed}
          </Text>
          <Text style={styles.text}>model:{model}</Text>
          <Text style={styles.text}>passengers:{passengers}</Text>
          <Text style={styles.text}>starship_class:{starship_class}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StarshipDetailScreen;
