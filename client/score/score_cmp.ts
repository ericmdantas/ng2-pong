import {
  Component,
  Inject
} from 'angular2/core';

import {ScoreService} from './score_service.js';
import {Player} from '../player/players.js';

@Component({
  selector: 'score-cmp',
  templateUrl: 'client/score/score.html',
  styleUrls: ['client/score/score.css'],
  providers: [ScoreService]
})
export class ScoreCmp {
  playerOne: Player = new Player();
  playerTwo: Player = new Player();

  constructor(@Inject(ScoreService) private _scoreService: ScoreService) {

  }

  playerOneScored() {
    this._scoreService.scores(this.playerOne);
  }

  playerTwoScored() {
    this._scoreService.scores(this.playerTwo);
  }
}
