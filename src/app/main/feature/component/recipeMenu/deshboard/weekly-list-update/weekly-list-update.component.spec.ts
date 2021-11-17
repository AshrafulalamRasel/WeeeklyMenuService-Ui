import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyListUpdateComponent } from './weekly-list-update.component';

describe('WeeklyListUpdateComponent', () => {
  let component: WeeklyListUpdateComponent;
  let fixture: ComponentFixture<WeeklyListUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyListUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
