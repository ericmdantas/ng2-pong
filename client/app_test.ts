import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {AppCmp} from './app.js';

describe('app', () => {
  it('should have the cmp created correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(AppCmp).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));
});
