import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BootstrapTableModule } from './table/table.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      BootstrapTableModule,
      HttpClientModule 
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
