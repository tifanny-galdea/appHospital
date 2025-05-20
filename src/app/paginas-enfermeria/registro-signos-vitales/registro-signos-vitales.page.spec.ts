import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroSignosVitalesPage } from './registro-signos-vitales.page';

describe('RegistroSignosVitalesPage', () => {
  let component: RegistroSignosVitalesPage;
  let fixture: ComponentFixture<RegistroSignosVitalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSignosVitalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
