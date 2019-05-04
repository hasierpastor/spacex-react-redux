import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect'; // You can use any testing library
import { getLaunches } from './actionCreators';
import { RECEIVE_LAUNCHES, LAUNCHES_ERRORED } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const mockLaunches = [
  { rocket_id: 1, mission_name: 'Test', launch_year: 2019 },
  { rocket_id: 2, mission_name: 'Test2', launch_year: 2020 },
  { rocket_id: 3, mission_name: 'Test3', launch_year: 2018 }
];

describe('async actions', () => {
  beforeEach(() => {
    mock
      .onGet('https://api.spacexdata.com/v3/launches')
      .reply(200, mockLaunches);
  });

  it('creates correct actions when getting launches', () => {
    const expectedActions = [
      { type: RECEIVE_LAUNCHES, launches: mockLaunches }
    ];
    const store = mockStore({ launches: [] });

    return store.dispatch(getLaunches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
