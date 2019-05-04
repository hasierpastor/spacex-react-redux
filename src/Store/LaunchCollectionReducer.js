import { RECEIVE_LAUNCHES, LAUNCHES_ERRORED } from '../Actions/ActionTypes';

const INITIAL_STATE = {
  launches: [],
  errored: false
};

/**
 * Reducer => takes in state and actions and returns new redux state
 */
export default function launchCollection(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LAUNCHES_ERRORED:
      return {
        ...state,
        errored: action.hasErrored
      };

    case RECEIVE_LAUNCHES:
      return {
        ...state,
        launches: [...state.launches, ...action.launches]
      };
    default:
      return state;
  }
}
