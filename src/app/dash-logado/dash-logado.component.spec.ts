import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLogadoComponent } from './dash-logado.component';

describe('DashLogadoComponent', () => {
  let component: DashLogadoComponent;
  let fixture: ComponentFixture<DashLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashLogadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
