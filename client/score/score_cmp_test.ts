import {
  it,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';

import {ScoreCmp} from './score_cmp.js';
import {Player} from '../player/players.js';

describe('score_cmp', () => {
  beforeEachProviders(() => [Player])

  describe('creation', () => {
    it('should create the cmp correctly', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(ScoreCmp).then((fixture) => {
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled).toBeDefined();
      });
    }));

    it('should have the right instance for playerOne and playerTwo', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(ScoreCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        expect(instance.playerOne instanceof Player).toBe(true);
        expect(instance.playerTwo instanceof Player).toBe(true);
      });
    }));
  });

  describe('playerOneScored', () => {
    it('should call the right method from the model', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(ScoreCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance.playerOne, 'wins').and.callFake(() => {});
        spyOn(instance.playerTwo, 'wins').and.callFake(() => {});

        instance.playerOneScored();

        expect(instance.playerOne.wins).toHaveBeenCalled();
        expect(instance.playerTwo.wins).not.toHaveBeenCalled();
      });
    }));
  });

  describe('playerTwoScored', () => {
    it('should call the right method from the model', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb.createAsync(ScoreCmp).then((fixture) => {
        fixture.detectChanges();

        let instance = fixture.debugElement.componentInstance;

        spyOn(instance.playerOne, 'wins').and.callFake(() => {});
        spyOn(instance.playerTwo, 'wins').and.callFake(() => {});

        instance.playerTwoScored();

        expect(instance.playerOne.wins).not.toHaveBeenCalled();
        expect(instance.playerTwo.wins).toHaveBeenCalled();
      });
    }));
  });
});
