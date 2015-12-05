import {
  Component,
  Output,
  EventEmitter
} from 'angular2/angular2';

import {PlayerOneCmp, PlayerTwoCmp} from '../player/players.js';
import {BallCmp} from '../ball/ball.js';
import {ScoreCmp} from '../score/score.js';

@Component({
  selector: 'table-cmp',
  templateUrl: 'client/table/table.html',
  styleUrls: ['client/table/table.css'],
  directives: [ScoreCmp, PlayerOneCmp, PlayerTwoCmp, BallCmp],
  host: {
    '(window:keydown)': 'keyPressedHandler($event)'
  }
})
export class TableCmp {
  @Output('upPressed') upPressed: EventEmitter<any> = new EventEmitter();
  @Output('downPressed') downPressed: EventEmitter<any> = new EventEmitter();

  UP: number = 38;
  DOWN: number = 40;

  keyPressedHandler(ev: KeyboardEvent) {
    if (ev.which === this.UP) {
      return this._up();
    }

    if (ev.which === this.DOWN) {
      return this._down();
    }
  }

  private _up() {
    this.upPressed.next(null);
  }

  private _down() {
    this.downPressed.next(null);
  }
}
