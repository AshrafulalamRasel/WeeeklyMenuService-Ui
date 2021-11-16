import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewRatingComponent } from './recipe-view-rating.component';

describe('RecipeViewRatingComponent', () => {
  let component: RecipeViewRatingComponent;
  let fixture: ComponentFixture<RecipeViewRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeViewRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeViewRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
