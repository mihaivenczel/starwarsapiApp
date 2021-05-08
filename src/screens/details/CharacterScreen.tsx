import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {CharacterCard} from './components';

import {background} from '../../core/constants/images';
import {characterStyles as styles} from './styles';

const CharacterScreen = ({route, navigation}) => {
  const {dataCharacters} = route.params;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <View style={styles.listContainer}>
          <FlatList
            data={dataCharacters}
            keyExtractor={item => item.index}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CharacterDetailScreen', {item});
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

export default CharacterScreen;
