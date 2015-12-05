import {Player} from '../player/players.js';

export class ScoreService {
  scores(p: Player) {
    p.wins();
  }
}
