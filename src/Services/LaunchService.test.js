import expect from 'expect';
import LaunchService from './LaunchService';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const mockLaunches = [
  { mission_id: 1, mission_name: 'Test', launch_year: 2019 },
  { mission_id: 2, mission_name: 'Test2', launch_year: 2020 },
  { mission_id: 3, mission_name: 'Test3', launch_year: 2018 }
];

describe('launch service', () => {
  beforeEach(() => {
    mock
      .onGet('https://api.spacexdata.com/v3/launches')
      .reply(200, mockLaunches);
  });

  it('makes a call to api and returns correct data', () => {
    return LaunchService.get().then(response => {
      expect(response.data).toEqual(mockLaunches);
    });
  });
});
