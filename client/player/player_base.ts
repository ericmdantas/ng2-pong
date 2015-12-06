import {TableConstants} from '../table/table_constants.js';

export class PlayerBase {
  INIT_POS_Y: number = 111;
  MOVE_PACE: number = 10;
  _player: HTMLDivElement;
  posY: number = this.INIT_POS_Y;

  moveUp() {
    this.posY -= this.MOVE_PACE;
    this._updatePos();
  }

  moveDown() {
    this.posY += this.MOVE_PACE;
    this._updatePos();
  }

  protected _updatePos() {
    if (this.posY > TableConstants.MAX_HEIGHT) {
      this.posY = TableConstants.MAX_HEIGHT;
    }
    else {
      if (this.posY < TableConstants.MIN_HEIGHT) {
        this.posY = TableConstants.MIN_HEIGHT;
      }
    }

    this._player.style.top = `${this.posY}px`;
  }
}
