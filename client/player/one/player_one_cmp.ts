import {
  Component,
  Inject,
  ElementRef,
  OnInit
} from 'angular2/angular2';

import {Player} from '../player_model.js';

@Component({
  selector: 'player-one-cmp',
  templateUrl: 'client/player/one/player_one.html',
  styleUrls: ['client/player/one/player_one.css']
})
export class PlayerOneCmp implements OnInit {
  INIT_POS_Y: number = 111;
  MOVE_PACE: number = 10;
  posY: number = this.INIT_POS_Y;
  _player: HTMLDivElement;

  constructor(@Inject(ElementRef) private _el: ElementRef) {

  }

  ngOnInit() {
    this._player = this._el.nativeElement.getElementsByTagName('div')[0];

    this._updatePos(this.INIT_POS_Y);
  }

  moveUp() {
    this.posY -= this.MOVE_PACE;

    this._updatePos(this.posY);
  }

  moveDown() {
    this.posY += this.MOVE_PACE;

    this._updatePos(this.posY);
  }

  private _updatePos(pos: number) {
    this._player.style.top = `${pos}px`;
  }
}
