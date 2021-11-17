import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../../../services/recipe.service";
import {WeeklyService} from "../../../services/weekly.service";

@Component({
  selector: 'app-weekly-list-update',
  templateUrl: './weekly-list-update.component.html',
  styleUrls: ['./weekly-list-update.component.css']
})
export class WeeklyListUpdateComponent implements OnInit {

  weeklyUpdateForm!: FormGroup;
  submitted = false;
  weekId!: string ;
  recipeId!: string ;
  weeklyAndrecipeList: any;
  recipeList: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private weeklyService: WeeklyService) {
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('id2');
      this.weekId = params.get('id');
    });
  }

  ngOnInit(): void {
    this.weeklyUpdateForm = this.formBuilder.group({

      weekName: ['', Validators.required],
      description: ['', Validators.required],
      recipeName: ['', Validators.required],
      recipeIngredients: ['', Validators.required],
      recipeInstruction: ['', Validators.required],
      nutritionalInformation: ['', Validators.required],
      classification: ['', Validators.required]
    });
    this.getWeeklyListByRecipeId(this.weekId);
  }

  get f() {
    return this.weeklyUpdateForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.weeklyUpdateForm.invalid) {
      return true;
    }
    this.weeklyService.updateWeeklyAndRecipeById(
      this.weekId,
      this.recipeId,
      this.f.weekName.value,
      this.f.description.value,
      this.f.recipeName.value,
      this.f.recipeIngredients.value,
      this.f.recipeInstruction.value,
      this.f.nutritionalInformation.value,
      this.f.classification.value)
      .subscribe(
        data => {
          this.router.navigate(['/home/weekly-menu-list']);
        },
        error => {

          if (error.status === 403) {
          }
          if (error.status === 500) {
          }
        });
  }
  public getWeeklyListByRecipeId(weekId: string){
    this.weeklyService.getWeeklyRecipeById(weekId).subscribe(res => {
      this.weeklyAndrecipeList = res;
      this.weeklyAndrecipeList.recipeList.forEach(ff => {
       this.recipeList = ff;
      });

    });
  }

}
