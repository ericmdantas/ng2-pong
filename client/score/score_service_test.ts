import {
  it,
  describe
  expect
} from 'angular2/testing';

import {ScoreService} from './score_service.js';
import {Player} from '../player/players.js';

describe('score_service', () => {
  it('should call scores correctly', () {
    let _ss = new ScoreService();
    let _p = new Player();

    spyOn(_p, 'wins').and.callFake(() => {});

    _ss.scores(_p);

    expect(_p.wins).toHaveBeenCalled();
  });
});
