![Travis (.org)](https://img.shields.io/travis/atheodosiou/ng-bootstrap-table?color=green)
![npm](https://img.shields.io/npm/dt/ng-bootstrap-table?color=blue)

# ng-bootstrap-table *(WIP)*
![table-ligth](https://user-images.githubusercontent.com/20326000/73258331-264efa80-41ce-11ea-9d31-03559632616c.png)

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

### Usage: 
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
### Scrollable Body
Ng-bootstrap-table also supports scrollable behaviour. If you need so, you must specify the following properties:
```html
  <b-table 
  ...
  [scrollable]="true"
  scrollHeight="150px"
  rowHeight="45px"
  ...
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
scrollable | boolean | false | Defines if the table should have a scrollable body.
scrollHeight | string | null | Defines the scroll height of the table body.
rowHeight | string | null | Defines the row height of the table body.
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

#### Styling the table haeder
If you want to change the default style of the table header, you must override the .b-table-header class like below:
```css
:host ::ng-deep .b-table-container table .b-table-header{
    //Default
    // background-color: whitesmoke;
    // color: black;
    background-color: lightblue !important;
    color: blue !important;
}
```
![styling](https://user-images.githubusercontent.com/20326000/74109395-b48e8d80-4b8b-11ea-8263-acf9894d6a46.png)

### Styling the paginator
In order to change the default style of the paginator, you have to override the .b-table-paginator-container class like below:
```css
:host ::ng-deep .b-table-paginator-container {
    //Default Style
    // display: flex;
    // align-items: center;
    // justify-content: center;
    //justify-content: flex-start;
    justify-content: center !important;
}
```
![paginator-styling](https://user-images.githubusercontent.com/20326000/74109501-9f662e80-4b8c-11ea-8eb9-ed3206c6a6c1.png)

#### Clases
Class | Default |  Description
--- | --- | ---
.b-table-header | ```background-color: whitesmoke; color: black;``` | The class which is applied on ```<tr>``` tag of the ```<thead>``` tag. 
.b-table-paginator-container | ```  display: flex;align-items: center;justify-content: flex-start;``` | The container class of the paginator
### Contribution
Feel free to contribute and/or report a bug at the [GitHub Repository](https://github.com/atheodosiou/ng-bootstrap-table).

### License
ng-bootstrap-table is released under the Apache license.
 
