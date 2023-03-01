import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPrefFormComponent } from './car-pref-form.component';

describe('CarPrefFormComponent', () => {
  let component: CarPrefFormComponent;
  let fixture: ComponentFixture<CarPrefFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPrefFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPrefFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
