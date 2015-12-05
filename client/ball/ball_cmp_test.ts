import {
  it,
  expect,
  describe,
  injectAsync,
  AsyncTe
  TestComponentBuilder
} from 'angular2/testing';

import {BallCmp} from './ball_cmp.js';

describe('ball-cmp', () => {
  describe('creation', () => {
    it('should have the cmp created correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(BallCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    }));

    it('should have the right value for the constants', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(BallCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        expect(instance.INIT_POS_X).toBe(333);
        expect(instance.INIT_POS_Y).toBe(50);
        expect(instance.MOVE_PACE).toBe(10);
        expect(instance.NEXT_ANIMATION_TIME).toBe(99);
        expect(instance.posX).toBe(333);
        expect(instance.posY).toBe(50);
      });
    }));
  });

  describe('moveLeft', () => {
    it('should move to the left', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(BallCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;
        let called = false;

        spyOn(instance._window, 'setInterval').and.callThrough();
        spyOn(instance._window, 'requestAnimationFrame').and.callFake(() => {
          called = true;
        });

        instance.moveLeft();

        fixture.detectChanges();

        expect(called).toBe(true);
      });
    }));
  });

  describe('moveRight', () => {
    it('should move to the right', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(BallCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;
        let called = false;

        spyOn(instance._window, 'setInterval').and.callThrough();
        spyOn(instance._window, 'requestAnimationFrame').and.callFake(() => {
          called = true;
        });

        instance.moveRight();

        fixture.detectChanges();

        expect(called).toBe(true);
      });
    }));
  });
});
