import React from 'react';
import {View, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import {background} from '../../core/constants';
import {characterStyles as styles} from './styles';
import {CharacterCard} from './components';

const PlanetScreen = ({route, navigation}) => {
  const {dataPlanets} = route.params;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <View style={styles.listContainer}>
          <FlatList
            data={dataPlanets}
            keyExtractor={item => item.index}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('PlanetDetailScreen', {item});
                  }}>
                  <CharacterCard item={item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default PlanetScreen;
