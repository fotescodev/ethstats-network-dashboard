import * as types from 'constants/gasSpending';

function load() {
  return {
    type: types.LOAD
  };
}

function loadSuccess(data) {
  return {
    type: types.LOAD_SUCCESS,
    data
  };
}

function loadFail(error) {
  return {
    type: types.LOAD_FAIL,
    error
  };
}

export function loadGasSpending(data) {
  return dispatch => {
    dispatch(loadSuccess(data));
  };
}

