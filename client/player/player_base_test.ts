import {
  it,
  expect,
  describe
} from 'angular2/testing';

import {PlayerBase} from './player_base.js';

describe('player_base', () => {
  describe('creation', () => {
    it('should have the right values for the variables', () => {
      let _pb = new PlayerBase();

      expect(_pb.INIT_POS_Y).toBe(111);
      expect(_pb.posY).toBe(111);
    });
  });
});
