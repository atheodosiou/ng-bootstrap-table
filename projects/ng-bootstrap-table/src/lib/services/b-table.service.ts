import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BTableService {

  constructor() { }

  //Subjects to handle b-table row select and unselect actions
  private $onRowSelectSubject: Subject<any> = new Subject<any>();
  private $onRowUnselectSubject: Subject<any> = new Subject<any>();

  //Subject getters
  get onRowSelectSubject(): Subject<any> {
    return this.$onRowSelectSubject;
  }

  get onRowUnselectSubject(): Subject<any> {
    return this.$onRowUnselectSubject;
  }

}
