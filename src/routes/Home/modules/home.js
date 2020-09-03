import update from 'react-addons-update';
import constants from './actionConstants';
import Geolocation from '@react-native-community/geolocation';
import {Dimensions} from 'react-native';

//--------------------
// Constants
//--------------------
const {GET_CURRENT_LOCATION, GET_INPUT, TOGGLE_SEARCH_RESULT} = constants;

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

//--------------------
// Actions
//--------------------
export function getCurrentLocation() {
  return (dispatch) => {
    Geolocation.getCurrentPosition(
      (position) => {
        dispatch({
          type: GET_CURRENT_LOCATION,
          payload: position,
        });
      },
      (error) => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
}

export function getInputData(payload) {
  return {
    type: GET_INPUT,
    payload,
  };
}

export function toggleSearchResultModal(payload) {
  return {
    type: TOGGLE_SEARCH_RESULT,
    payload,
  };
}

//--------------------
// Action handlers
//--------------------
function handleGetCurrentLocation(state, action) {
  return update(state, {
    region: {
      latitude: {$set: action.payload.coords.latitude},
      longitude: {$set: action.payload.coords.longitude},
      latitudeDelta: {$set: LATITUDE_DELTA},
      longitudeDelta: {$set: LONGITUDE_DELTA},
    },
  });
}

function handleGetInputData(state, action) {
  const {key, value} = action.payload;
  return update(state, {
    inputData: {
      [key]: {
        $set: value,
      },
    },
  });
}

function handleToggleSearchResult(state, action) {
  switch (action.payload) {
    case 'pickUp':
      return update(state, {
        resultTypes: {
          pickUp: {
            $set: true,
          },
          dropOff: {
            $set: false,
          },
        },
      });
    case 'dropOff':
      return update(state, {
        resultTypes: {
          pickUp: {
            $set: false,
          },
          dropOff: {
            $set: true,
          },
        },
      });
  }
}

const ACTION_HANDLERS = {
  GET_CURRENT_LOCATION: handleGetCurrentLocation,
  GET_INPUT: handleGetInputData,
  TOGGLE_SEARCH_RESULT: handleToggleSearchResult,
};
const initialState = {
  region: {},
  inputData: {},
  resultTypes: {
    pickUp: false,
    dropOff: false,
  },
};

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
