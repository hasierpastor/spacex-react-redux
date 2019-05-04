import expect from 'expect';
import RocketService from './RocketService';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

const mockRocket = { rocket_id: 1, rocket_name: 'Test', country: 'Test' };

const id = 'falcon1';

describe('rocket service', () => {
  beforeEach(() => {
    mock
      .onGet(`https://api.spacexdata.com/v3/rockets/${id}`)
      .reply(200, mockRocket);
  });

  it('makes a call to api and returns correct data', () => {
    return RocketService.get('falcon1').then(response => {
      expect(response.data).toEqual(mockRocket);
    });
  });
});
