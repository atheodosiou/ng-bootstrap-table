# NgBootstrapTable

## A lightwaigt data table Angular 2+ componet for Bootstrap

### Usage: 
First we need to install Bootstrap 4+ and then install the [ng-bootstrap-table](https://www.npmjs.com/package/ng-bootstrap-table) package via npm using the command below:
```Javascript
npm i ng-bootstrap-table
```
### Importing the BootstrapTableModule

```Javascript
import { BootstrapTableModule } from 'ng-bootstrap-table';

@NgModule({
  ...
   imports: [
      ...,
      BootstrapTableModule 
   ],
   ...
})
export class AppModule { }
```
### Declare the table component into our HTML template
```HTML
  <b-table 
  [columns]="columns" 
  [value]="data" 
  [responsive]="true"
  [paginator]="true"
  [rows]="rows"
  [totalRecords]="_data.length"
  [tableClasses]="tableClasses"
  [theadClasses]="theadClasses"
  (onRowSelect)="onRowSelect($event)"
  (onPageChange)="onPageChange($event)"
  ></b-table>
```
### Documentation
List of all supported properties which must/can be used with b-table.

Property | Type | Default | Short Description 
--- | --- | --- | ---
columns | array | null | An array of objects to represent dynamic columns.
value | array | null | An array of objects to display.
responsive | boolean | false | Defines if the table should be responsive or not.
paginator | boolean | false | Defines if the table should be have a paginator or not.
rows | number | null | Defines the total number of rows per page in the table.
totalRecords | number | null | The total number of `value` entries.
tableClasses | string | null | Bootstrap classes to be applied on `<table>` tag.
theadClasses | string | null | Bootstrap classes to be applied on `<thead>` tag.
trClasses | string | null | Bootstrap classes to be applied on `<tr>` tag.

List of events

Event | Parameters | Description
--- | --- | ---
onRowSelect | Object | Callback to invoke when a row is selected.
onPageChange | Object | Callback to invoke when a page is changed.


### Event parameters
onRowSelect: Returns an object with the following stracture.

```Javascript 
{
  nextPage: 3,
  activePage: 2,
  previousPage: 1,
  rowsPerPage: 4,
  totalRecords: 10
  totalPages: 3,
  limit: 4,
  offset: 4
}
```
onPageChange -->  Object --> Details

Returns the selected row with the coresponding data of the value array.