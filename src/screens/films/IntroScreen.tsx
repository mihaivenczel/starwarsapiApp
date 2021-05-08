import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import {introStyles as styles} from './styles';
import {background} from '../../core/constants/images';
import {strings} from '../../core/constants';

interface Props {
  route: any;
  navigation: any;
}

const IntroScreen = ({route, navigation}: Props) => {
  const {title, episode_id, opening_crawl} = route.params.item;
  return (
    <View style={styles.mainContainer}>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <View style={styles.container}>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.contentContainer}>
              <Text style={styles.textTitle}>
                {strings.introScreen.episode}
                {episode_id}:
              </Text>
              <Text style={styles.textTitle}>{title}</Text>
              <Text style={styles.text}>{opening_crawl}</Text>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FilmDetailScreen', {
                item: route.params.item,
              });
            }}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;
