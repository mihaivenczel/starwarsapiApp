import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {detailStyles as styles} from './styles';
import {background} from '../../core/constants/images';

const VehicleDetailScreen = ({route}) => {
  const {
    cargo_capacity,
    consumables,
    cost_in_credits,
    // created,
    crew,
    // edited,
    // films,
    length,
    manufacturer,
    max_athmosphering_speed,
    model,
    name,
    passengers,
    // pilots,
    // url,
    vehicle_class,
  } = route.params.item.item;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <Text style={styles.text}>{name}</Text>
        <View>
          <Text style={styles.text}>Name:{name}</Text>
          <Text style={styles.text}>cargo_capacity:{cargo_capacity}</Text>
          <Text style={styles.text}>consumables:{consumables}</Text>
          <Text style={styles.text}>cost_in_credits:{cost_in_credits}</Text>
          <Text style={styles.text}>crew:{crew}</Text>
          <Text style={styles.text}>length:{length}</Text>
          <Text style={styles.text}>manufacturer:{manufacturer}</Text>
          <Text style={styles.text}>
            max_athmosphering_speed:{max_athmosphering_speed}
          </Text>
          <Text style={styles.text}>model:{model}</Text>
          <Text style={styles.text}>name:{name}</Text>
          <Text style={styles.text}>passengers:{passengers}</Text>
          <Text style={styles.text}>vehicle_class:{vehicle_class}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VehicleDetailScreen;
