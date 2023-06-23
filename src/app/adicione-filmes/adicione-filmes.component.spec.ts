import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicioneFilmesComponent } from './adicione-filmes.component';

describe('AdicioneFilmesComponent', () => {
  let component: AdicioneFilmesComponent;
  let fixture: ComponentFixture<AdicioneFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicioneFilmesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicioneFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
