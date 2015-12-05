import {
  it,
  expect,
  describe,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {TableCmp} from './table_cmp.js';

describe('table-cmp', () => {
  describe('creation', () => {
    it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TableCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    }));

    it('should have the right values for the constants', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TableCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        expect(instance.UP).toBe(38);
        expect(instance.DOWN).toBe(40);
      });
    }));
  });

  describe('keyPressedHandler', () => {
    it('should call _up', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(TableCmp).then((fixture) => {
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
      return tcb.createAsync(TableCmp).then((fixture) => {
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
