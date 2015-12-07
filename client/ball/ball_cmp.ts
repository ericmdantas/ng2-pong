import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  EventEmitter,
  Output
} from 'angular2/angular2';

import {TableConstants} from '../table/table_constants.js';

@Component({
  selector: 'ball-cmp',
  templateUrl: 'client/ball/ball.html',
  styleUrls: ['client/ball/ball.css']
})
export class BallCmp implements OnInit {
  @Output('leftSideScores') leftSideScores: EventEmitter<any> = new EventEmitter();
  @Output('rightSideScores') rightSideScores: EventEmitter<any> = new EventEmitter();

  INIT_POS_X: number = 333;
  INIT_POS_Y: number = 50;
  MOVE_PACE: number = 10;
  NEXT_ANIMATION_TIME: number = 33;
  posX: number = this.INIT_POS_X;
  posY: number = this.INIT_POS_Y;
  _ball: HTMLDivElement;
  _window: Window = window;
  _movHorizontal = 'left';
  _movVertical = 'up';
  p1PosY: {x: number, y: number};
  p2PosY: {x: number, y: number};

  constructor(@Inject(ElementRef) private _el: ElementRef) {

  }

  ngOnInit() {
    this._ball = this._el.nativeElement.getElementsByTagName('div')[0];
    this._ball.style.left = `${this.posX}px`;
    this._ball.style.top = `${this.posY}px`;

    this.moveLeft();
  }

  moveLeft() {
    let _leftyId = this._window.setInterval(() => {
      this._window.requestAnimationFrame(() => {
        this.posX -= this.MOVE_PACE;

        this._ball.style.left = this.posX + 'px';

        this.moveVertical();

        if (this._p1Defended() || this._rightScored()) {
          this._window.clearInterval(_leftyId);
          this.rightSideScores.next(null);
          this.moveRight();
        }
      });
    }, this.NEXT_ANIMATION_TIME);
  }

  moveRight() {
    let _rightyId = this._window.setInterval(() => {
      this._window.requestAnimationFrame(() => {
        this.posX += this.MOVE_PACE;

        this._ball.style.left = this.posX + 'px';

        this.moveVertical();

        if (this._p2Defended() || this._leftScored()) {
          this._window.clearInterval(_rightyId);
          this.leftSideScores.next(null);
          this.moveLeft();
        }
      });
    }, this.NEXT_ANIMATION_TIME);
  }

  private _moveUp() {
    this.posY -= this.MOVE_PACE;
    this._ball.style.top = this.posY + 'px';

    if (this.posY < TableConstants.MIN_HEIGHT) {
      this.posY += this.MOVE_PACE;
      this._ball.style.top = this.posY + 'px';
      this._movVertical = 'down';
    }
  }

  private _moveDown() {
    this.posY += this.MOVE_PACE;
    this._ball.style.top = this.posY + 'px';

    if (this.posY > TableConstants.MAX_HEIGHT_BALL) {
      this.posY -= this.MOVE_PACE;
      this._ball.style.top = this.posY + 'px';
      this._movVertical = 'up';
    }
  }

  moveVertical() {
    if (this._movVertical === 'up') {
      return this._moveUp();
    }

    if (this._movVertical === 'down') {
      return this._moveDown();
    }
  }

  private _leftScored():boolean {
    return this.posX > TableConstants.MAX_WIDTH;
  }

  private _rightScored():boolean {
    return this.posX < TableConstants.MIN_WIDTH;
  }

  checkP1Pos(p: {x: number, y: number}) {
    this.p1Pos = p;
  }

  checkP2Pos(p: {x: number, y: number}) {
    this.p2Pos = p;
  }

  private _p1Defended():boolean {
    let _validY = 100;
    let _validX = 20;
    let _rX = false;
    let _rY = false;

    while (_validY || _validX) {
      if (this.posY === (this.p1Pos.y + _validY)) {
        _rY = true;
      }

      if (this.posX === (this.p1Pos.x + _validX)) {
        _rX = true;
      }

      _validY = _validY === 0 ? 0 : --_validY;
      _validX = _validX === 0 ? 0 : --_validX;
    }

    return _rY && _rX;
  }

  private _p2Defended():boolean {
    let _validY = 100;
    let _validX = 20;
    let _rX = false;
    let _rY = false;

    while (_validY || _validX) {
      if (this.posY === (this.p2Pos.y + _validY)) {
        _rY = true;
      }

      if (this.posX === (this.p2Pos.x + _validX)) {
        _rX = true;
      }

      _validY = _validY === 0 ? 0 : --_validY;
      _validX = _validX === 0 ? 0 : --_validX;
    }

    return _rY && _rX;
  }
}
