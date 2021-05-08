import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {background} from '../../core/constants';
import {detailStyles as styles} from './styles';

const MetaDataScreen = ({route, navigation}) => {
  const {item} = route.params;

  console.log(item, 'route');

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <Text style={styles.text}>Name:{item.created}</Text>
        <Text style={styles.text}>edited:{item.edited}</Text>
        <Text style={styles.text}>url:{item.url}</Text>
      </ImageBackground>
    </View>
  );
};

export default MetaDataScreen;
