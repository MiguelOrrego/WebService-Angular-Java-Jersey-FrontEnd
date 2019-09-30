import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultarLineasComponent } from './consultar-lineas.component';

describe('ConsultarLineasComponent', () => {
  let component: ConsultarLineasComponent;
  let fixture: ComponentFixture<ConsultarLineasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarLineasComponent ],
      imports: [ReactiveFormsModule],
      
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarLineasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
