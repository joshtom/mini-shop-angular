import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    
  }

  

}
