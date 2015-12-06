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
  selector: 'player-two-cmp',
  templateUrl: 'client/player/two/player_two.html',
  styleUrls: ['client/player/two/player_two.css']
})
export class PlayerTwoCmp extends PlayerBase implements OnInit {
  NEXT_ANIMATION_TIME: number = 300;
  MOVE_PACE: number = 50;
  _window: Window = window;
  _player: HTMLDivElement;

  constructor(@Inject(ElementRef) private _el: ElementRef) {
    super();
  }

  ngOnInit() {
    this._player = this._el.nativeElement.getElementsByTagName('div')[0];

    this._moveRandomly();
  }  

  private _moveRandomly() {
      this._window.setInterval(() => {
        this._window.requestAnimationFrame(() => {
          this._rollDice() ? this.moveUp() : this.moveDown();
        });
      }, this.NEXT_ANIMATION_TIME);
  }

  private _rollDice():boolean {
    return !!(~~(Math.random() * 2));
  }
}
