import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import {background} from '../../core/constants/images';
import {detailStyles as styles} from './styles';

const SpeciesDetailScreen = ({route}) => {
  const {
    average_height,
    average_lifespan,
    classification,
    // created,
    designation,
    // edited,
    eye_colors,
    // films,
    hair_colors,
    // homeworld,
    language,
    name,
    // people,
    skin_colors,
    // url,
  } = route.params.item.item;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <Text style={styles.text}>{name}</Text>
        <View>
          <Text style={styles.text}>Name:{name}</Text>
          <Text style={styles.text}>average_height:{average_height}</Text>
          <Text style={styles.text}>average_lifespan:{average_lifespan}</Text>
          <Text style={styles.text}>classification:{classification}</Text>
          <Text style={styles.text}>designation:{designation}</Text>
          <Text style={styles.text}>eye_colors:{eye_colors}</Text>
          <Text style={styles.text}>hair_colors:{hair_colors}</Text>
          <Text style={styles.text}>skin_colors:{skin_colors}</Text>
          <Text style={styles.text}>language:{language}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SpeciesDetailScreen;
