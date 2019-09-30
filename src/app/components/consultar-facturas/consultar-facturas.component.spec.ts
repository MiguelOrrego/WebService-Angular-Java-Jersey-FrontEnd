import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFacturasComponent } from './consultar-facturas.component';

describe('ConsultarFacturasComponent', () => {
  let component: ConsultarFacturasComponent;
  let fixture: ComponentFixture<ConsultarFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
