# NgBootstrapTable *(WIP)*

![table-ligth](https://user-images.githubusercontent.com/20326000/73258331-264efa80-41ce-11ea-9d31-03559632616c.png)

## A lightwaigt data table Angular 2+ componet for Bootstrap
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
### Documentation
List of all supported properties which must/can be used with b-table.

Property | Type | Default | Short Description 
--- | --- | --- | ---
columns | BTableColumn array | null | An array of objects to represent dynamic columns.
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

### Styling
You should just set variables for the b-table properties like below: 
```Typescript
tableClasses='table table-striped table-hover table-borderless';
```
e.g. A dark table style with borderes...
![table-dark](https://user-images.githubusercontent.com/20326000/73258335-2818be00-41ce-11ea-94d4-cf0305c154d9.png)

 In the same way you can use to theadClasses and trClasses properties in order to customize more your table component.

### Contribution
Feel free to contribute and/or report a bug at the [GitHub Repository](https://github.com/atheodosiou/ng-bootstrap-table).

### License
ng-bootstrap-table is released under the Apache license.
 