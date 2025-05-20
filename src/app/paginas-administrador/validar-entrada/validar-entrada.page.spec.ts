import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidarEntradaPage } from './validar-entrada.page';

describe('ValidarEntradaPage', () => {
  let component: ValidarEntradaPage;
  let fixture: ComponentFixture<ValidarEntradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarEntradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
