import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../../../../../share/services/toast.service';
import {AuthService} from '../../../../../share/services/auth.service';
import {RecipeService} from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  recipeForm!: FormGroup;
  submitted = false;
  constructor(
    public recipeService: RecipeService,
    public toastService: ToastService,
    private authService: AuthService,
    private formBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      recipeIngredients: ['', Validators.required],
      recipeInstruction: ['', Validators.required],
      nutritionalInformation: ['', Validators.required],
      classification: ['', Validators.required]
    });
  }

  get f() {
    return this.recipeForm.controls;
  }

  save() {
  }

  onSubmit(){
    this.submitted = true;
    if (this.recipeForm.invalid) {
      return true;
    }
    this.recipeService.createRecipe(this.f.recipeName.value,
                                     this.f.recipeIngredients.value,
                                     this.f.recipeInstruction.value,
                                     this.f.nutritionalInformation.value,
                                     this.f.classification.value)
      .subscribe(
        data => {
          this.toastService.success('successfully.');
        },
        error => {

          if (error.status === 403) {
          }
          if (error.status === 500) {
          }
        });
  }

}
