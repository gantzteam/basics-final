import { Component, OnInit, Input} from '@angular/core';  // , Output, EventEmitter 
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  onSelected() {
    // this.recipeSelected.emit();
  }

  ngOnInit() {
    this.recipeService.recipeSelected.emit();
  }

}
