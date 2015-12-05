import {
  Component
} from 'angular2/angular2';

import {PlayerCmp} from '../player/player.js';
import {BallCmp} from '../ball/ball.js';

@Component({
  selector: 'table-cmp',
  templateUrl: 'client/table/table.html',
  styleUrls: ['client/table/table.css'],
  directives: [PlayerCmp, BallCmp]
})
export class TableCmp {

}
