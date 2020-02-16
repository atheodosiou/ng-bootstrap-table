import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { BTableColumn } from '../models/table-columns.interface';

@Injectable({
  providedIn: 'root'
})
export class BTableService {
  private _dataSource: any[];
  private _columns: BTableColumn[];

  //Subjects to handle b-table row select and unselect actions
  private $onRowSelectSubject: Subject<any> = new Subject<any>();
  private $onRowUnselectSubject: Subject<any> = new Subject<any>();
  private $tableDataSource: Subject<any[]> = new Subject<any[]>();
  private $tableColumns: Subject<BTableColumn[]> = new Subject<BTableColumn[]>();

  constructor() {
    this.$tableDataSource.subscribe((value: any[]) => {
      this._dataSource = value;
      console.log('Service:DataSrource:', value);
    });
    this.$tableColumns.subscribe((value: BTableColumn[]) => {
      this._columns = value;
      console.log('Service:Columns:', value);
    });
  }

  //Subject getters
  get onRowSelectSubject(): Subject<any> {
    return this.$onRowSelectSubject;
  }

  get onRowUnselectSubject(): Subject<any> {
    return this.$onRowUnselectSubject;
  }

  get dataSource() {
    return this.$tableDataSource;
  }

  get columns(){
    return this.$tableColumns;
  }

  filter(value:string,field:string){
    // if(!value || !field) throw new Error('All parameters are required!');
    // return this._dataSource.filter(o =>
      // Object.keys(o).some(k => o[k].toLowerCase().includes(value.toLowerCase())));
      console.log(value,field,this._dataSource,this._columns);
  }
}
