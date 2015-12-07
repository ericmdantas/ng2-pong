import {TableConstants} from '../table/table_constants.js';

export class PlayerBase {
  INIT_POS_Y: number = 111;
  MOVE_PACE: number = 10;
  posY: number = this.INIT_POS_Y;
  _player: HTMLDivElement;

  moveUp() {
    this.posY -= this.MOVE_PACE;
    this._updatePos();
  }

  moveDown() {
    this.posY += this.MOVE_PACE;
    this._updatePos();
  }
}
