import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  /**
   * Listed Below is the process for retrieving routes dynamically
   * 1. Activated Route must be injected into the constructor method
   * 
   */
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
