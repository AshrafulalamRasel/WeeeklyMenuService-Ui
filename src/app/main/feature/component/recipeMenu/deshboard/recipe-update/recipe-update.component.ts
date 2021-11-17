import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.css']
})
export class RecipeUpdateComponent implements OnInit {
  recipeUpdateForm!: FormGroup;
  submitted = false;
  recipeId!: string ;
  recipeList: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private recipeService: RecipeService) {
    this.route.params.subscribe(params => {
      this.recipeId = this.route.snapshot.params['id'];
    });
  }

  ngOnInit(): void {
    this.recipeUpdateForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      recipeIngredients: ['', Validators.required],
      recipeInstruction: ['', Validators.required],
      nutritionalInformation: ['', Validators.required],
      classification: ['', Validators.required]
    });
    this.getRecipeListByRecipeId(this.recipeId);
  }
  get f() {
    return this.recipeUpdateForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.recipeUpdateForm.invalid) {
      return true;
    }
    this.recipeService.updateRecipeById(
      this.recipeId,
      this.f.recipeName.value,
      this.f.recipeIngredients.value,
      this.f.recipeInstruction.value,
      this.f.nutritionalInformation.value,
      this.f.classification.value)
      .subscribe(
        data => {
          this.router.navigate(['/home/recipe-list-view']);
        },
        error => {

          if (error.status === 403) {
          }
          if (error.status === 500) {
          }
        });
  }

  public getRecipeListByRecipeId(recipeId: string){
    this.recipeService.getRecipeById(recipeId).subscribe(res => {
      this.recipeList = res;
      console.log(this.recipeList);

    });
  }

}
