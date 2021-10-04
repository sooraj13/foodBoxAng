import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodboxComponent } from './foodbox.component';

describe('FoodboxComponent', () => {
  let component: FoodboxComponent;
  let fixture: ComponentFixture<FoodboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
