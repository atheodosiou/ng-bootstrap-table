import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BTableService {

  constructor() { }

  private $onRowSelectSubject: Subject<any> = new Subject<any>();
  private $onRowUnselectSubject: Subject<any> = new Subject<any>();

  get onRowSelectSubject(): Subject<any> {
    return this.$onRowSelectSubject;
  }

  get onRowUnselectSubject(): Subject<any> {
    return this.$onRowUnselectSubject;
  }

}
