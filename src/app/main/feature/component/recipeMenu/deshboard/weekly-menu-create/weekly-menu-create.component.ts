import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../../services/recipe.service';
import {ToastService} from '../../../../../share/services/toast.service';
import {AuthService} from '../../../../../share/services/auth.service';
import {WeeklyService} from "../../../services/weekly.service";
import {IDropdownSettings} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-weekly-menu-create',
  templateUrl: './weekly-menu-create.component.html',
  styleUrls: ['./weekly-menu-create.component.css']
})
export class WeeklyMenuCreateComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;

  weeklyMenuForm!: FormGroup;
  submitted = false;
  getListRecipe = [];

  constructor(public recipeService: RecipeService,
              public weeklyService: WeeklyService,
              public toastService: ToastService,
              private authService: AuthService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // this.dropdownList = [
    //   {item_id: 1, item_text: 'Mumbai'},
    //   {item_id: 2, item_text: 'Bangaluru'},
    //   {item_id: 3, item_text: 'Pune'},
    //   {item_id: 4, item_text: 'Navsari'},
    //   {item_id: 5, item_text: 'New Delhi'}
    // ];
    this.selectedItems = [
      {item_id: 3, item_text: 'Pune'},
      {item_id: 4, item_text: 'Navsari'}
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


    this.weeklyMenuForm = this.formBuilder.group({
      weekName: ['', Validators.required],
      description: ['', Validators.required],
      recipeIdList: ['', Validators.required]
    });
    this.getRecipeList();
  }

  get f() {
    return this.weeklyMenuForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.weeklyMenuForm.invalid) {
      return true;
    }
    this.weeklyService.createWeeklyMenu(this.f.weekName.value,
      this.f.description.value,
      this.f.recipeIdList.value)
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

  public getRecipeList() {
    this.getListRecipe = [];

    this.recipeService.getRecipeList(0).subscribe(res => {
      res.items.forEach((itemList: any) => {
        this.getListRecipe.push(itemList);
       /* this.dropdownList = [{item_id:  res.items[count].id, item_text:  res.items[count].recipeName}];
        count++;*/
      });
    });

    console.log(this.dropdownList);
    console.log( this.getListRecipe);
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
