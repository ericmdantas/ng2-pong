import {bootstrap} from 'angular2/platform/browser';
import {AppCmp} from 'client/app.js';
import {Player} from 'client/player/players.js';

bootstrap(AppCmp, [Player]);
