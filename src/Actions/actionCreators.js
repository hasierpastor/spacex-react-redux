import LaunchService from '../Services/LaunchService';
import { RECEIVE_LAUNCHES, LAUNCHES_ERRORED } from './actionTypes';

function receiveLaunches(launches) {
  return {
    type: RECEIVE_LAUNCHES,
    launches
  };
}

function launchesErrored(bool) {
  return { type: LAUNCHES_ERRORED, hasErrored: bool };
}

// eslint-disable-next-line import/prefer-default-export
export function getLaunches() {
  return function(dispatch) {
    LaunchService.get()
      .then(r => {
        return r;
      })
      .then(r => {
        dispatch(receiveLaunches(r.data));
      })
      .catch(() => {
        dispatch(launchesErrored(true));
      });
  };
}
