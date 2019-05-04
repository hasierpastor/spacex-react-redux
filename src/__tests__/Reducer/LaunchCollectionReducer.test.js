import LaunchCollectionReducer from '../../Store/LaunchCollectionReducer';
import { RECEIVE_LAUNCHES, LAUNCHES_ERRORED } from '../../Actions/ActionTypes';

describe('launch collection reducer', () => {
  it('should return the initial state', () => {
    expect(LaunchCollectionReducer(undefined, {})).toEqual({
      launches: [],
      errored: false
    });
  });

  it('should handle LAUNCHES_ERRORED', () => {
    expect(
      LaunchCollectionReducer([], {
        type: LAUNCHES_ERRORED,
        hasErrored: true
      })
    ).toEqual({
      errored: true
    });
  });

  it('should handle RECEIVE_LAUNCHES', () => {
    expect(
      LaunchCollectionReducer(
        {
          launches: [{ rocket_id: 4, mission_name: 'Test', launch_year: 2019 }]
        },
        {
          type: RECEIVE_LAUNCHES,
          launches: [
            { rocket_id: 1, mission_name: 'Test', launch_year: 2019 },
            { rocket_id: 2, mission_name: 'Test2', launch_year: 2020 },
            { rocket_id: 3, mission_name: 'Test3', launch_year: 2018 }
          ]
        }
      )
    ).toEqual({
      launches: [
        { rocket_id: 4, mission_name: 'Test', launch_year: 2019 },
        { rocket_id: 1, mission_name: 'Test', launch_year: 2019 },
        { rocket_id: 2, mission_name: 'Test2', launch_year: 2020 },
        { rocket_id: 3, mission_name: 'Test3', launch_year: 2018 }
      ]
    });
  });
});
