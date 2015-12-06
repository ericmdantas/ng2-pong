import {
  it,
  expect,
  describe,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {PlayerOneCmp} from './player_one_cmp.js';

describe('player-one-cmp', () => {
  describe('creation', () => {
    it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    }));

    it('should have the right values for the initialization', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        expect(instance.INIT_POS_Y).toBe(111);
        expect(instance.MOVE_PACE).toBe(10);
        expect(instance.posY).toBe(111);
        expect(instance.UP).toBe(38);
        expect(instance.DOWN).toBe(40);
      });
    }));
  });

  describe('moveUp', () => {
    it('should call _updatePos with 101', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveUp();

        expect(instance._updatePos).toHaveBeenCalled();
        expect(instance.posY).toBe(101);
      });
    }));

    it('should call _updatePos with 71', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveUp();
        instance.moveUp();
        instance.moveUp();
        instance.moveUp();

        expect(instance._updatePos).toHaveBeenCalled();

        expect(instance.posY).toBe(71);
      });
    }));
  });

  describe('moveDown', () => {
    it('should call _updatePos with 121', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveDown();

        expect(instance._updatePos).toHaveBeenCalled();

        expect(instance.posY).toBe(121);
      });
    }));

    it('should call _updatePos with 151', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_updatePos').and.callFake(() => {});

        instance.moveDown();
        instance.moveDown();
        instance.moveDown();
        instance.moveDown();

        expect(instance._updatePos).toHaveBeenCalled();

        expect(instance.posY).toBe(151);
      });
    }));
  });

  describe('keyPressedHandler', () => {
    it('should call _up', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_up').and.callFake(() => {});
        spyOn(instance, '_down').and.callFake(() => {});

        instance.keyPressedHandler(<KeyboardEvent>{which: 38});

        expect(instance._up).toHaveBeenCalled();
        expect(instance._down).not.toHaveBeenCalled();
      });
    }));

    it('should call _down', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(PlayerOneCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance, '_up').and.callFake(() => {});
        spyOn(instance, '_down').and.callFake(() => {});

        instance.keyPressedHandler(<KeyboardEvent>{which: 40});

        expect(instance._up).not.toHaveBeenCalled();
        expect(instance._down).toHaveBeenCalled();
      });
    }));
  });
});
