import directoryReducer, { INITIAL_STATE } from './directoryReducer';

describe('directoryReducer', () => {
  it('should return initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
