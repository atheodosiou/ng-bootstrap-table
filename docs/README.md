![Travis (.com)](https://img.shields.io/travis/com/atheodosiou/ng-bootstrap-table) ![npm](https://img.shields.io/npm/dw/ng-bootstrap-table) ![npm](https://img.shields.io/npm/v/ng-bootstrap-table) ![GitHub stars](https://img.shields.io/github/stars/atheodosiou/ng-bootstrap-table?style=social) ![GitHub forks](https://img.shields.io/github/forks/atheodosiou/ng-bootstrap-table?style=social)

# ng-bootstrap-table *(WIP)*
![new_paginator](https://user-images.githubusercontent.com/20326000/74380557-7e067c00-4df2-11ea-9d29-4d0fb9a1288a.png)


## A lightweight, bootstrap styled Angular data table component!
### Prerequisites:
Make sure that you have already installed bootstrap! If you do not, you can add it by CDN. Just add a link tag into your index.html like the link below:
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```
Otherwise, you can add it via NPM simple by running the following command:
```sh
npm install --save bootstrap
```
Then you have to link the bootstrap.min.css into you styles in your angular.json file.

```json
 "styles": [
              ...
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              ...
            ]
```

### Installation: 
Install the [ng-bootstrap-table](https://www.npmjs.com/package/ng-bootstrap-table) package via NPM using the command below:
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
## Usage examples
### Dynamic rows and columns
```HTML
<b-table [columns]="columns" [value]="data" [striped]="true" [bordered]="true" [small]="true" (onRowUnselect)="selectedRow=$event">
    <ng-template bTemplate="header">
      <tr>
        <th *ngFor="let col of columns">{{col.header}}</th>
      </tr>
    </ng-template>
    <ng-template bTemplate="body" let-rowData>
      <tr [bSelectableRow]="rowData" [ngClass]="{'table-active':selectedRow?.selected && selectedRow?.data===rowData}">
        <td *ngFor="let col of columns">{{rowData[col.field]}}</td>
      </tr>
    </ng-template>
  </b-table>
```

### Column definition

```Typescript
  columns:BTableColumn[]=[
    {header:'Name',field:'name'},
    {header:'Username',field:'username'},
    {header:'Email',field:'email'},
    {header:'Phone',field:'phone'},
    {header:'Website',field:'website'}
  ];
  ```
### Paginator configuration
Alternatively, you can configure the paginator by providing a ``` PaginatorConfig ``` object in the paginatorConfig attribute of ```b-table```. 
With this you will be abple to adjust to paginator sizing and alignment.

```javascript
export class PaginatorConfig {
    sizing: Sizing;
    alignment: Alignment = Alignment.RIGHT;
}
```
For example: 
```javascript 
    this.pConfig= new PaginatorConfig();
    this.pConfig.sizing = Sizing.SMALL;
    this.pConfig.alignment= Alignment.CENTER;
```
After that, you have to enable paginator into ``` b-table ``` component like below.

```HTML
<b-table *ngIf="data" [columns]="columns" [value]="data" [striped]="true" [bordered]="true" [small]="true"
    [paginator]="true" [paginatorConfig]="pConfig" [rows]="rows" [totalRecords]="_data?.length" [hover]="true"
    (onRowSelect)="selectedRow=$event;onRowSelect($event)" (onRowUnselect)="selectedRow=$event;onRowUnselect($event)"
    (onPageChange)="onPageChange($event)">
    <ng-template bTemplate="header">
      <tr>
        <th *ngFor="let col of columns">{{col.header}}</th>
      </tr>
    </ng-template>
    <ng-template bTemplate="body" let-rowData>
      <tr [bSelectableRow]="rowData" [ngClass]="{'table-active':selectedRow?.selected && selectedRow?.data===rowData}">
        <td *ngFor="let col of columns">{{rowData[col.field]}}</td>
      </tr>
    </ng-template>
  </b-table>
```
### Documentation
List of all supported properties which must/can be used with b-table.

Property | Type | Default | Short Description 
--- | --- | --- | ---
columns | BTableColumn array | null | An array of objects to represent dynamic columns.
value | array | null | An array of objects to display.
paginator | boolean | false | Defines if the table should be have a paginator or not.
paginatorConfig | PaginatorConfig | Alignment.RIGHT | Provides configuration for the paginator.
rows | number | null | Defines the total number of rows per page in the table.
totalRecords | number | null | The total number of `value` entries.
striped | boolean | null | Makes table striped by adding the `.table-striped` class.
bordered | boolean | null | Makes table bordered by adding the `.table-bordered` class.
borderless | boolean | null | Makes table borderless by adding the `.table-borderless` class.
small | boolean | null | Makes table small by adding the `.table-sm` class.
dark | boolean | null | Makes table dark by adding the `.table-dark` class.
hover | boolean | null | Makes table hoverable by adding the `.table-hover` class.
headLight | boolean | null | Makes table head light by adding the `.thead-light` class.
headDark | boolean | null | Makes table head dark by adding the `.thead-dark` class.
responsive | boolean | false | Makes table responsive by adding the `.table-responsive` class.

List of events

Event | Parameters | Description
--- | --- | ---
onRowSelect | BRowEvent | Callback to be invoked when a row is selected.
onRowUnselect | BRowEvent | Callback to be invoked when a row was unselected.
onPageChange | PageEvent | Callback to be invoked when a page is changed.


### `PageEvent` event format 
onPageChange: Returns a ``` PageEvent ``` with the following stracture.

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
### `BRowEvent` event format 

```Javascript
{
    originalEvent:any,
    data:any,
    selected:boolean
}
```
### Contribution
Feel free to contribute and/or report a bug at the [GitHub Repository](https://github.com/atheodosiou/ng-bootstrap-table).

### License
ng-bootstrap-table is released under the Apache license.