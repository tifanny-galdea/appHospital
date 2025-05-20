import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoTurnoPage } from './estado-turno.page';

describe('EstadoTurnoPage', () => {
  let component: EstadoTurnoPage;
  let fixture: ComponentFixture<EstadoTurnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoTurnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
