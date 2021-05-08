import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import {HomeScreen} from '../screens/home';
import {FilmDetailScreen, FilmsScreen, IntroScreen} from '../screens/films';
import {
  CharacterDetailScreen,
  CharacterScreen,
  PlanetDetailScreen,
  PlanetScreen,
  VehicleDetailScreen,
  VehicleScreen,
  SpeciesDetailScreen,
  SpeciesScreen,
  StarshipDetailScreen,
  StarshipScreen,
  MetaDataScreen,
} from '../screens/details';

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.homeScreen}>
      <Stack.Screen name={roots.homeScreen} component={HomeScreen} />

      <Stack.Screen name={roots.introScreen} component={IntroScreen} />

      <Stack.Screen name={roots.filmsScreen} component={FilmsScreen} />
      <Stack.Screen
        name={roots.filmDetailScreen}
        component={FilmDetailScreen}
      />

      <Stack.Screen name={roots.characterScreen} component={CharacterScreen} />
      <Stack.Screen
        name={roots.characterDetailScreen}
        component={CharacterDetailScreen}
      />

      <Stack.Screen name={roots.planetScreen} component={PlanetScreen} />
      <Stack.Screen
        name={roots.planetDetailScreen}
        component={PlanetDetailScreen}
      />

      <Stack.Screen name={roots.starshipScreen} component={StarshipScreen} />
      <Stack.Screen
        name={roots.starshipDetailScreen}
        component={StarshipDetailScreen}
      />

      <Stack.Screen name={roots.vehicleScreen} component={VehicleScreen} />
      <Stack.Screen
        name={roots.vehicleDetailScreen}
        component={VehicleDetailScreen}
      />

      <Stack.Screen name={roots.speciesScreen} component={SpeciesScreen} />
      <Stack.Screen
        name={roots.speciesDetailScreen}
        component={SpeciesDetailScreen}
      />

      <Stack.Screen name={roots.metaDataScreen} component={MetaDataScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
