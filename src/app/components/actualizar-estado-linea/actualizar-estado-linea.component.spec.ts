import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstadoLineaComponent } from './actualizar-estado-linea.component';

describe('ActualizarEstadoLineaComponent', () => {
  let component: ActualizarEstadoLineaComponent;
  let fixture: ComponentFixture<ActualizarEstadoLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarEstadoLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEstadoLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
