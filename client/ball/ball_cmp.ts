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
  p1Pos: {x: number, y: number};
  p2Pos: {x: number, y: number};

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

        if (this._playerDefended(this.p1Pos)) {
          this._window.clearInterval(_leftyId);
          this.moveRight();
        }

        if (this._rightScored()) {
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

        if (this._playerDefended(this.p2Pos)) {
          this._window.clearInterval(_rightyId);
          this.moveLeft();
        }

        if (this._leftScored()) {
          this._window.clearInterval(_rightyId);
          this.moveLeft();

          this.leftSideScores.next(null);
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

  private _playerDefended(p: {x: number, y: number}):boolean {
    let _validY = 100;
    let _validX = 20;
    let _rX = false;
    let _rY = false;

    while (_validY || _validX) {
      if (this.posY === (p.y + _validY)) {
        _rY = true;
      }

      if (this.posX === (p.x + _validX)) {
        _rX = true;
      }

      _validY = _validY === 0 ? 0 : --_validY;
      _validX = _validX === 0 ? 0 : --_validX;
    }

    return _rY && _rX;
  }
}
