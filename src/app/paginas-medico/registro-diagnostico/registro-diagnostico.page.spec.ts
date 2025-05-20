import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroDiagnosticoPage } from './registro-diagnostico.page';

describe('RegistroDiagnosticoPage', () => {
  let component: RegistroDiagnosticoPage;
  let fixture: ComponentFixture<RegistroDiagnosticoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDiagnosticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
