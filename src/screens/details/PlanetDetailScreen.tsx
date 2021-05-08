import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {background} from '../../core/constants/images';
import {detailStyles as styles} from './styles';

const PlanetDetailScreen = ({route}) => {
  const {
    climate,
    // created,
    diameter,
    // films,
    gravity,
    name,
    orbital_period,
    population,
    // residents,
    rotation_period,
    surface_water,
    terrain,
    // url,
  } = route.params.item.item;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <Text style={styles.text}>{name}</Text>
        <View>
          <Text style={styles.text}>Name:{name}</Text>
          <Text style={styles.text}>climate:{climate}</Text>
          <Text style={styles.text}>diameter:{diameter}</Text>
          <Text style={styles.text}>gravity:{gravity}</Text>
          <Text style={styles.text}>orbital_period:{orbital_period}</Text>
          <Text style={styles.text}>population:{population}</Text>
          <Text style={styles.text}>rotation_period:{rotation_period}</Text>
          <Text style={styles.text}>surface_water:{surface_water}</Text>
          <Text style={styles.text}>terrain:{terrain}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PlanetDetailScreen;
