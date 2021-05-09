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

interface Props {
  navigation: any;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>{strings.homeScreen.appName}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('FilmsScreen')}>
              <Text style={styles.buttonText}>{strings.homeScreen.goTo}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
