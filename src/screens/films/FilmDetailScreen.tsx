import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  getCharacter,
  getPlanet,
  getSpecies,
  getStarship,
  getVehicle,
} from '../../api/api';
import {strings} from '../../core/constants';
import {background} from '../../core/constants/images';
import {detailStyles as styles} from './styles';

interface Props {
  navigation: any;
  route: any;
}

const FilmDetailScreen = ({route, navigation}: Props) => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [dataCharacters, setDataCharacters] = useState([]);
  const [planets, setPlanets] = useState<string[]>([]);
  const [dataPlanets, setDataPlanets] = useState([]);
  const [starships, setStarships] = useState<string[]>([]);
  const [dataStarships, setDataStarships] = useState([]);
  const [vehicles, setVehicles] = useState<string[]>([]);
  const [dataVehicles, setDataVehicles] = useState([]);
  const [species, setSpecies] = useState<string[]>([]);
  const [dataSpecies, setDataSpecies] = useState([]);

  const {item} = route.params;

  const fetchCharacter = async () => {
    const tempData = Promise.all(
      characters.map(async item => {
        return getCharacter(item);
      }),
    ).then(values => {
      setDataCharacters(values);
    });
  };
  const fetchPlanet = async () => {
    const tempData = Promise.all(
      planets.map(async item => {
        return getPlanet(item);
      }),
    ).then(values => {
      setDataPlanets(values);
    });
  };
  const fetchStarship = async () => {
    const tempData = Promise.all(
      starships.map(async item => {
        return getStarship(item);
      }),
    ).then(values => {
      setDataStarships(values);
    });
  };
  const fetchVehicle = async () => {
    const tempData = Promise.all(
      vehicles.map(async item => {
        return getVehicle(item);
      }),
    ).then(values => {
      setDataVehicles(values);
    });
  };
  const fetchSpecie = async () => {
    const tempData = Promise.all(
      species.map(async item => {
        return getSpecies(item);
      }),
    ).then(values => {
      setDataSpecies(values);
    });
  };

  useEffect(() => {
    const tempCharacterArr = [];
    const tempPlanetArr = [];
    const tempStarshipArr = [];
    const tempVehicleArr = [];
    const tempSpecieArr = [];
    item.characters.map(x => {
      tempCharacterArr.push(x);
    });
    item.planets.map(x => {
      tempPlanetArr.push(x);
    });
    item.starships.map(x => {
      tempStarshipArr.push(x);
    });
    item.vehicles.map(x => {
      tempVehicleArr.push(x);
    });
    item.species.map(x => {
      tempSpecieArr.push(x);
    });
    setCharacters(tempCharacterArr);
    setPlanets(tempPlanetArr);
    setStarships(tempStarshipArr);
    setVehicles(tempVehicleArr);
    setSpecies(tempSpecieArr);
  }, [item]);

  useEffect(() => {
    if (characters.length > 0) fetchCharacter();
    if (planets.length > 0) fetchPlanet();
    if (starships.length > 0) fetchStarship();
    if (vehicles.length > 0) fetchVehicle();
    if (species.length > 0) fetchSpecie();
  }, [characters, planets, starships, vehicles, species]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={background}>
        <View style={styles.subContainer}>
          <View>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate('CharacterScreen', {dataCharacters});
              }}>
              <Text style={styles.cardTitleText}>
                {strings.filmDetailScreen.goTo}
                {strings.filmDetailScreen.characters}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate('PlanetScreen', {dataPlanets});
              }}>
              <Text style={styles.cardTitleText}>
                {strings.filmDetailScreen.goTo}
                {strings.filmDetailScreen.planets}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate('StarshipScreen', {dataStarships});
              }}>
              <Text style={styles.cardTitleText}>
                {strings.filmDetailScreen.goTo}{' '}
                {strings.filmDetailScreen.starships}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate('VehicleScreen', {dataVehicles});
              }}>
              <Text style={styles.cardTitleText}>
                {strings.filmDetailScreen.goTo}
                {strings.filmDetailScreen.vehicles}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate('SpeciesScreen', {dataSpecies});
              }}>
              <Text style={styles.cardTitleText}>
                {strings.filmDetailScreen.goTo}
                {strings.filmDetailScreen.species}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                navigation.navigate('MetaDataScreen', {item});
              }}>
              <Text style={styles.cardTitleText}>
                {strings.filmDetailScreen.goTo}
                {strings.filmDetailScreen.metaData}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FilmDetailScreen;
