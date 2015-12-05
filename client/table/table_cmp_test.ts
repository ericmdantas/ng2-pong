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
});
