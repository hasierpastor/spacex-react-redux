import expect from 'expect';
import jest from 'jest';
import LaunchService from './LaunchService';

it('fetches results from google books api', () => {
  const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} }))
  };
  const mockLaunches = [
    { rocket_id: 1, mission_name: 'Test', launch_year: 2019 },
    { rocket_id: 2, mission_name: 'Test2', launch_year: 2020 },
    { rocket_id: 3, mission_name: 'Test3', launch_year: 2018 }
  ];

  mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockLaunches));

  return LaunchService.get().then(response => {
    expect(response).toEqual(mockLaunches);
  });
});
