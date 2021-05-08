import axios from 'axios';
import {API_BASE_URL} from '../core/constants/url';

export const getAllFilms = async () => {
  return axios
    .get(`${API_BASE_URL}/films/`)
    .then(response => {
      return response.data.results;
    })
    .catch(e => {
      return e;
    });
};

export const getCharacter = async link => {
  return axios
    .get(`${link}`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return e;
    });
};
export const getPlanet = async link => {
  return axios
    .get(`${link}`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return e;
    });
};
export const getStarship = async link => {
  return axios
    .get(`${link}`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return e;
    });
};
export const getVehicle = async link => {
  return axios
    .get(`${link}`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return e;
    });
};
export const getSpecies = async link => {
  return axios
    .get(`${link}`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return e;
    });
};
