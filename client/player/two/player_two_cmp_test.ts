import {
  it,
  expect,
  describe,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {PlayerTwoCmp} from './player_two_cmp.js';

describe('player-two-cmp', () => {
  describe('creation', () => {
    it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerTwoCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    }));

    it('should have the right values for the initialization', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerTwoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        expect(instance.INIT_POS_Y).toBe(111);
        expect(instance.MOVE_PACE).toBe(10);
        expect(instance.posY).toBe(111);
      });
    }));
  });

  describe('moveUp', () => {
    it('should call _updatePos with 91', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerTwoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveUp();

        expect(instance._updatePos).toHaveBeenCalledWith(91);
      });
    }));

    it('should call _updatePos with 51', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerTwoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveUp();
        instance.moveUp();
        instance.moveUp();
        instance.moveUp();

        expect(instance._updatePos).toHaveBeenCalledWith(61);
      });
    }));
  });

  describe('moveDown', () => {
    it('should call _updatePos with 121', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerTwoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveDown();

        expect(instance._updatePos).toHaveBeenCalledWith(121);
      });
    }));

    it('should call _updatePos with 151', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerTwoCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveDown();
        instance.moveDown();
        instance.moveDown();
        instance.moveDown();

        expect(instance._updatePos).toHaveBeenCalledWith(151);
      });
    }));
  });
});
