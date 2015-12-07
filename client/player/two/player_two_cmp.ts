import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  EventEmitter,
  Output
} from 'angular2/angular2';

import {PlayerBase} from '../player_base.js';
import {TableConstants} from '../../table/table_constants.js';

@Component({
  selector: 'player-two-cmp',
  templateUrl: 'client/player/two/player_two.html',
  styleUrls: ['client/player/two/player_two.css']
})
export class PlayerTwoCmp extends PlayerBase implements OnInit {
  @Output('p2PosY') p2PosY: EventEmitter<{x: number, y: number}> = new EventEmitter();

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

  private _updatePos() {
    if (this.posY > TableConstants.MAX_HEIGHT) {
      this.posY = TableConstants.MAX_HEIGHT;
    }
    else {
      if (this.posY < TableConstants.MIN_HEIGHT) {
        this.posY = TableConstants.MIN_HEIGHT;
      }
    }

    this.p2PosY.next({x: TableConstants.MAX_WIDTH - 30, y: this.posY});

    this._player.style.top = `${this.posY}px`;
  }
}
