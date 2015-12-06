import {
  it,
  expect,
  describe
} from 'angular2/testing';

import {TableConstants} from './table_constants.js'

describe('table_constants', () => {
  it('should have the right values', () => {
    expect(TableConstants.MAX_HEIGHT).toBe(450);
    expect(TableConstants.MAX_HEIGHT_BALL).toBe(545);
    expect(TableConstants.MIN_HEIGHT).toBe(1);

    expect(TableConstants.MAX_WIDTH).toBe(1200);
    expect(TableConstants.MIN_WIDTH).toBe(1);
  });
});
