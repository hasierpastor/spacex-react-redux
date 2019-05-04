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

export function getLaunches() {
  return function(dispatch) {
    return LaunchService.get()
      .then(r => r)
      .then(r => {
        dispatch(receiveLaunches(r.data));
      })
      .catch(() => {
        dispatch(launchesErrored(true));
      });
  };
}
