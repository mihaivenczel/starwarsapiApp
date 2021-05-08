import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import {homeStyles as styles} from './styles';
import {background} from '../../core/constants/images';
import {strings} from '../../core/constants';

// interface Props {}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>Star Wars Api App</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FilmsScreen')}>
              <Text style={styles.buttonText}>Go to Films</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
