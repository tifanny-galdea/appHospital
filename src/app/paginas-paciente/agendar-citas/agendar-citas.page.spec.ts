import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarCitasPage } from './agendar-citas.page';

describe('AgendarCitasPage', () => {
  let component: AgendarCitasPage;
  let fixture: ComponentFixture<AgendarCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
