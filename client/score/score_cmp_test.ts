import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import {ScoreCmp} from './score_cmp.js';

describe('score_cmp', () => {
  it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(ScoreCmp).then((fixture) => {
      fixture.detectChanges();

      let compiled = fixture.debugElement.nativeElement;

      expect(compiled).toBeDefined();
    });
  }));
});
