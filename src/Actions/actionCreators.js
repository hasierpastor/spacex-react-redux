import LaunchService from '../Services/LaunchService';
import { RECEIVE_LAUNCHES, LAUNCHES_ERRORED } from './ActionTypes';

function receiveLaunches(launches) {
  return {
    type: RECEIVE_LAUNCHES,
    launches
  };
}

function launchesErrored(bool) {
  return { type: LAUNCHES_ERRORED, hasErrored: bool };
}

/**
 * Functions that makes request to Space X api to get launches
 * If request successful then dispatch receiveLaunches action, otherwise dispatch launchesErrored action
 */
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
