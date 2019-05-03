import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { RECEIVE_LAUNCHES, LAUNCHES_ERRORED } from './actionTypes';
import { getLaunches } from './actionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockLaunches = [
  { rocket_id: 1, mission_name: 'Test', launch_year: 2019 },
  { rocket_id: 1, mission_name: 'Test', launch_year: 2019 },
  { rocket_id: 1, mission_name: 'Test', launch_year: 2019 }
];

describe('getLaunches action', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates RECEIVE _LAUNCHES after successfuly fetching launches', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockLaunches
      });
    });

    const expectedActions = [
      { type: LAUNCHES_ERRORED, hasErrored: false },
      { type: RECEIVE_LAUNCHES, launches: mockLaunches }
    ];

    const store = mockStore({ launches: [] });
    return store.dispatch(getLaunches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
