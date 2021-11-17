import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMenuCreateComponent } from './weekly-menu-create.component';

describe('WeeklyMenuCreateComponent', () => {
  let component: WeeklyMenuCreateComponent;
  let fixture: ComponentFixture<WeeklyMenuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyMenuCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyMenuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
