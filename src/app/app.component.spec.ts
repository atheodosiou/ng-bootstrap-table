import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgBootstrapTableModule } from '../../projects/ng-bootstrap-table/src/lib/ng-bootstrap-table.module'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports:[
        FormsModule,
        HttpClientModule,
        NgBootstrapTableModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
