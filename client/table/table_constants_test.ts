import {
  it,
  expect,
  describe
} from 'angular2/testing';

import {TableConstants} from './table_constants.js'

describe('table_constants', () => {
  it('should have the right values', () => {
    expect(TableConstants.MAX_HEIGHT).toBe(450);
    expect(TableConstants.MIN_HEIGHT).toBe(1);
  });
});
