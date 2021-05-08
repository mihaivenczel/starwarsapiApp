import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {CharacterCard} from './components';

import {background} from '../../core/constants';
import {characterStyles as styles} from './styles';

const VehicleScreen = ({route, navigation}) => {
  const {dataVehicles} = route.params;

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <View style={styles.listContainer}>
          <FlatList
            data={dataVehicles}
            keyExtractor={item => item.index}
            renderItem={item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('VehicleDetailScreen', {item});
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

export default VehicleScreen;
