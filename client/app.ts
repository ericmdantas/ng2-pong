import {
  Component
} from 'angular2/core';

import {TableCmp} from './table/table.js';

@Component({
  selector: 'app',
  template: `
    <table-cmp></table-cmp>
  `,
  directives: [TableCmp]
})
export class AppCmp {

}
