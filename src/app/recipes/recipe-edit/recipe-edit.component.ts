import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  /**
   * Listed Below is the process for retrieving routes dynamically
   * 1. Activated Route must be injected into the constructor method
   * 2. The ID can be retrieved in the ngOnInit method
   */
  id: number;
  editMode = false; // To confirm which state the edit route is;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']; // Converting the ID to number
        this.editMode = params['id'] != null; // Check if the id is not empty then update the state of the editMode;
        // console.log(this.editMode);

      }
    )
  }

}
