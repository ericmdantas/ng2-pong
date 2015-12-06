import {
  Component,
  Inject,
  ElementRef,
  OnInit
} from 'angular2/angular2';

import {Player} from '../player_model.js';
import {PlayerBase} from '../player_base.js';
import {TableConstants} from '../../table/table_constants.js';

@Component({
  selector: 'player-one-cmp',
  templateUrl: 'client/player/one/player_one.html',
  styleUrls: ['client/player/one/player_one.css'],
  host: {
    '(window:keydown)': 'keyPressedHandler($event)'
  }
})
export class PlayerOneCmp extends PlayerBase implements OnInit {
  UP: number = 38;
  DOWN: number = 40;
  MOVE_PACE: number = 20;
  _player: HTMLDivElement;

  constructor(@Inject(ElementRef) private _el: ElementRef) {
    super();
  }

  ngOnInit() {
    this._player = this._el.nativeElement.getElementsByTagName('div')[0];
    this._updatePos();
  }

  keyPressedHandler(ev: KeyboardEvent) {
    if (ev.which === this.UP) {
      return this.moveUp();
    }

    if (ev.which === this.DOWN) {
      return this.moveDown();
    }
  }  
}
