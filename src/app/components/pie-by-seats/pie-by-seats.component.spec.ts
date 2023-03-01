import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieBySeatsComponent } from './pie-by-seats.component';

describe('PieBySeatsComponent', () => {
  let component: PieBySeatsComponent;
  let fixture: ComponentFixture<PieBySeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieBySeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieBySeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
