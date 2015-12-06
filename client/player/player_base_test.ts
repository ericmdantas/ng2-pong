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
      expect(_pb.MOVE_PACE).toBe(10);
      expect(_pb.posY).toBe(111);
    });
  });

  describe('moveUp', () => {
    it('should call _updatePos with 91', () => {
      let _pb = new PlayerBase();

      spyOn(_pb, '_updatePos').and.callFake(() => {});

      _pb.moveUp();

      expect(_pb._updatePos).toHaveBeenCalled();

      expect(_pb.posY).toBe(101);
    });

    it('should call _updatePos with 71', () => {
      let _pb = new PlayerBase();

      spyOn(_pb, '_updatePos').and.callFake(() => {});

      _pb.moveUp();
      _pb.moveUp();
      _pb.moveUp();
      _pb.moveUp();

      expect(_pb._updatePos).toHaveBeenCalled();

      expect(_pb.posY).toBe(71);
    });
  });

  describe('moveDown', () => {
    it('should call _updatePos with 121', () => {
      let _pb = new PlayerBase();

      spyOn(_pb, '_updatePos').and.callFake(() => {});

      _pb.moveDown();

      expect(_pb._updatePos).toHaveBeenCalled();

      expect(_pb.posY).toBe(121);
    });

    it('should call _updatePos with 151', () => {
      let _pb = new PlayerBase();

      spyOn(_pb, '_updatePos').and.callFake(() => {});

      _pb.moveDown();
      _pb.moveDown();
      _pb.moveDown();
      _pb.moveDown();

      expect(_pb._updatePos).toHaveBeenCalled();

      expect(_pb.posY).toBe(151);
    });
  });
});
