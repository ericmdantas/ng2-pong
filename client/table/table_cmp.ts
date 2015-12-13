import {
  Component
} from 'angular2/core';

import {PlayerOneCmp, PlayerTwoCmp} from '../player/players.js';
import {BallCmp} from '../ball/ball.js';
import {ScoreCmp} from '../score/score.js';

@Component({
  selector: 'table-cmp',
  templateUrl: 'client/table/table.html',
  styleUrls: ['client/table/table.css'],
  directives: [ScoreCmp, PlayerOneCmp, PlayerTwoCmp, BallCmp]
})
export class TableCmp {

}
