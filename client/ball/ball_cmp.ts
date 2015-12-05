import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  EventEmitter,
  Output
} from 'angular2/angular2';

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
  NEXT_ANIMATION_TIME: number = 99;
  posX: number = this.INIT_POS_X;
  posY: number = this.INIT_POS_Y;
  _window: Window = window;
  _ball: HTMLDivElement;

  constructor(@Inject(ElementRef) private _el: ElementRef) {

  }

  ngOnInit() {
    this._ball = this._el.nativeElement.getElementsByTagName('div')[0];
    this._ball.style.left = `${this.posX}px`;
    this._ball.style.top = `${this.posY}px`;
  }

  moveLeft() {
    this._window.setInterval(() => {
      this._window.requestAnimationFrame(() => {
        this.posX -= this.MOVE_PACE;
        this._ball.style.left = this.posX + 'px';
      });
    }, this.NEXT_ANIMATION_TIME);
  }

  moveRight() {
    this._window.setInterval(() => {
      this._window.requestAnimationFrame(() => {
        this.posX += this.MOVE_PACE;
        this._ball.style.left = this.posX + 'px';
      });
    }, this.NEXT_ANIMATION_TIME);
  }
}
