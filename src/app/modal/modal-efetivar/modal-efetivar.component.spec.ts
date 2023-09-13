import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEfetivarComponent } from './modal-efetivar.component';

describe('ModalEfetivarComponent', () => {
  let component: ModalEfetivarComponent;
  let fixture: ComponentFixture<ModalEfetivarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEfetivarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEfetivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
