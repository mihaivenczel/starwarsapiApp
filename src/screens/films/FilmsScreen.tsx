import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import {getAllFilms} from '../../api/api';
import {background} from '../../core/constants/images';
import {FilmCard} from './components';
import {filmsStyles as styles} from './styles';
import {FilmDataType} from './types';

interface Props {
  navigation: any;
}

const FilmsScreen = ({navigation}: Props) => {
  const [data, setData] = useState<FilmDataType[]>([]);
  // const [copyData, setCopyData] = useState<FilmDataType[]>(data);
  // const [selected, setSelected] = useState(null);

  const fetchFilms = async () => {
    const tempData = await getAllFilms();
    setData(tempData);
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  // const sortFilms = (data) => {
  //   const tempData = Object.keys(data).sort();
  //   return tempData;
  //   console.log(tempData, 'temp');
  // };

  return (
    <View>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <FlatList
          data={data}
          keyExtractor={item => item.episode_id}
          renderItem={({item}: {item: FilmDataType}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('IntroScreen', {item});
                }}>
                <FilmCard item={item} />
              </TouchableOpacity>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default FilmsScreen;
